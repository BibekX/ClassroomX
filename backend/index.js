const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const knexConfig = require("./knexfile").development;
const knex = require("knex")(knexConfig);

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("combined"));

// JWT auth
const bcrypt = require('./auth/bcrypt');
const config = require('./auth/config');
const jwt = require("jwt-simple");

// Landing Service
const LandingService = require("./services/LandingService");
const landingService = new LandingService(knex);

app.get("/", (req, res) => {
    let institutions = landingService.getInstitutions();
    res.render("index", {
        institutions: institutions
    })
})

//Institution Mainpage - in this case :institution is the specific institution's name in the database
const InstitutionService = require("./services/InstitutionService");
const institutionService = new InstitutionService(knex);

app.get('/institution/:institution', (req, res) => {
    let institutionDetails = institutionService.getInstitutionDetails(req.params.institution);
    res.render("institution", {
        institutionDetails: institutionDetails
    })
})

//Course Mainpage - as above :course is the specific course's name in the database
const CourseService = require("./services/CourseService");
const courseService = new CourseService(knex);

app.get('/course/:course', (req, res) => {
    let courseDetails = courseService.getCourseDetails(req.params.course);
    res.render("course", {
        courseDetails: courseDetails
    })
})


//Class Mainpage - as above, :class is the specific class's name in the database
const ClassService = require("./services/ClassService");
const classService = new ClassService(knex);

app.get('/class/:class', (req, res) => {
    let classDetails = classService.getClassDetails(req.params.class);
    res.render("class", {
        classDetails: classDetails
    })
})


//Account Page - as above, :name is the username of that account holder in the database
const AccountService = require("./services/AccountService")
const accountService = new AccountService(knex);

app.get('/account/:name', (req, res) => {
    let accountDetails = accountService.getAccountDetails(req.params.name);
    res.render("account", {
        accountDetails: accountDetails
    })
})


//Single Question Page - in this case, :question should be the question ID in the database
const QuestionService = require("./services/QuestionService")
const questionService = new QuestionService(knex);

app.get('/question/:question', (req, res) => {
    let questionDetails = questionService.getQuestionDetails(req.params.question);
    res.render("question", {
        questionDetails: questionDetails
    })
})


//Search Page

const SearchService = require("./services/SearchService");
const searchService = new SearchService(knex);

app.get('/search', (req, res) => {
    res.render("search")
})

app.post('/search', (req, res) => {
    let searchDetails = searchService.getSearchDetails(req.query.search)
    res.json(searchDetails)
})



//POST routes:

// Post - Need JWT details to figure out how to make the login and register work properly, skip over this for now.

// const NewUsers = require("./services/PostRoutes/NewUsers");
// const newUsers = new NewUsers(knex);

// app.post("/register", (req, res) => {
//     console.log("Post = ", req.body)
//     return newUsers
//         .register(req.body)
//         .then("Login")
//         .catch((err) => res.status(500).json(err));
// })
// app.post("/login")

// POST - Register Route ('/api/signup/user')

app.post("/api/signup/user", async function (req, res) {
    console.log("POST = ", req.body)

    if (req.body.username && req.body.password && req.body.email) {
      const username = req.body.username;
      const email = req.body.email;
      const password = req.body.password;
  
      const users = await knex("users").where({ username: username });
      if (users.length > 0) {
        res.sendStatus(401);
      }

      const hash = await bcrypt.hashPassword(password);
      // create new user
      const newUser = {
        username: username,
        email: email,
        password: hash,
        type: req.body.institute
      };
  
      let user = await knex("users")
        .insert(newUser)
        .catch((err) => console.log(err))
    }
});

// POST - Login Route ('/api/login')

app.post("/api/login", async function (req, res) {
    console.log(req.body.username);
    if (req.body.username && req.body.password) {
      const username = req.body.username;
      const password = req.body.password;
      let type = "";
  
      // Read from database to check if user exists
      const users = await knex("users").where({ username });
  
      if (users.length === 0) {
        res.sendStatus(401);
      }
      const user = users[0];
      const result = await bcrypt.checkPassword(password, user.password); // QUERY "users".password table?
  
      // validation check on user type
      if (user.user === true) {
        type = "student";
      } else if (user.teacher === true) {
        type = "teacher";
      } else if (user.admin === true) {
        type = "admin";
      }
  
      if (result) {
        const PAYLOAD = {
          id: user.id,
        };
        const token = jwt.encode(PAYLOAD, config.jwtSecret);
        res.json({
          token,
          id: user.id,
          type: type,
          username: username,
        });
        console.log("login success" + PAYLOAD)
      } else {
        console.log('first LOGIN 401 check')
        res.sendStatus(401);
      }
    } else {
        console.log('Second LOGIN 401 check')
        res.sendStatus(401);
    }
  });

//Route for changing user details - Not sure how auth would happen, need to figure that out later for all POST routes
const PostAccounts = require("./services/PostRoutes/PostAccounts");
const postAccounts = new PostAccounts(knex);

app.post("/modifyuser/:user", (req, res) => {
    console.log("Post = ", req.body)
    return postAccounts
        .modifyUser(req.body)
        .then(() => {
            res.redirect('back');
            res.end()
        })
        .catch((err) => res.status(500).json(err));
})

//Routes for adding new users to specific pages
app.post("/instNewUser", (req, res) => {
    console.log("Post =", req.body)
    return postAccounts
        .addInstUser(req.body)
        .then(() => {
            res.redirect('back');
            res.end()
        })
})

app.post("/courseNewUser", (req, res) => {
    console.log("Post =", req.body)
    return postAccounts
        .addCourseUser(req.body)
        .then(() => {
            res.redirect('back');
            res.end()
        })
})

app.post("/classNewUser", (req, res) => {
    console.log("Post =", req.body)
    return postAccounts
        .addClassUser(req.body)
        .then(() => {
            res.redirect('back');
            res.end()
        })
})



//New Institution, Class, Course
const PostPages = require("./services/PostRoutes/PostPages");
const postPages = new PostPages(knex);

app.post("/newInst", async (req, res) => {
    console.log("New Institution:", req.body.newName)
    return postPages
        .newInst(req.body)
        .then(() => {
            res.redirect('back');
            res.end()
        })
})

app.post("/newCourse", async (req, res) => {
    console.log("New Course:", req.body.newName)
    return postPages
        .newCourse(req.body)
        .then(() => {
            res.redirect('back');
            res.end()
        })
})

app.post("/newClass", async (req, res) => {
    console.log("New Class:", req.body.newName)
    return postPages
        .newClass(req.body)
        .then(() => {
            res.redirect('back');
            res.end();
        })
})



app.post("/modifyInst/:institution", async (req, res) => {
    console.log(`Modifying This Institution`)
    return postPages
        .modifyInst({
            name: req.params.institution,
            body: req.body
        })
        .then(() => {
            res.redirect('back');
            res.end();
        })
})

app.post("/modifyCourse/:course", async (req, res) => {
    console.log(`Modifying This Course`)
    return postPages
        .modifyCourse({
            name: req.params.course,
            body: req.body
        })
        .then(() => {
            res.redirect('back');
            res.end();
        })
})

app.post("/modifyClass/:class", async (req, res) => {
    console.log(`Modifying This Class`)
    return postPages
        .modifyClass({
            name: req.params.class,
            body: req.body
        })
        .then(() => {
            res.redirect('back');
            res.end();
        })
})




//New Note
const PostNotes = require("./services/PostRoutes/PostNotes");
const postNotes = new PostNotes(knex);

app.post("/newNote", async (req, res) => {
    console.log("New Note:", req.body.details.title)
    return postNotes
        .newNote(req.body)
        .then(() => {
            res.end()
        })
})

app.post("/modifyNote", async (req, res) => {
    console.log("Modifying this Note")
    return postNotes
    .modifyNote(req.body)
    .then(()=>{
        res.redirect("back");
        res.end()
    })
})





//Question
const PostQuestions = require("./services/PostRoutes/PostQuestions");
const postQuestions = new PostQuestions(knex);

app.post("/newQuestion", async (req, res) => {
    console.log("New Question:", req.body.details.title)
    return postQuestions
        .newQuestion(req.body)
        .then(() => {
            res.end()
        })
})

app.post("/modifyQuestion", async (req, res) => {
    console.log(`Modifying This Question`)
    return postQuestions
        .modifyQuestion(req.body)
        .then(() => {
            res.redirect('back');
            res.end();
        })
})

app.post("/upvoteQuestion", async (req, res) => {
    console.log('upvoting question')
    return postQuestions
    .upvoteQuestion(req.body)
    .then(() => {
        res.redirect('back');
        res.end();
    })
})



//Answer
const PostAnswers = require("./services/PostRoutes/PostAnswers");
const postAnswers = new PostAnswers(knex);

app.post("/newAnswer", async (req, res) => {
    console.log("New Answer:", req.body.details.title)
    return postAnswers
        .newAnswer(req.body)
        .then(() => {
            res.end()
        })
})

app.post("/modifyAnswer", async (req, res) => {
    console.log(`Modifying This Answer`)
    return postAnswers
        .modifyAnswer(req.body)
        .then(() => {
            res.redirect('back');
            res.end();
        })
})

app.post("answerQuestion", async (req, res) => {
    console.log("This answer is now correct:", req.body)
    return postAnswers
        .answerQuestion(req.body)
        .then(() => {
            res.end()
        })
})

//Answer to answer
app.post("/newAtoa", async (req, res) => {
    console.log("New answer to answer:", req.body)
    return postAnswers
        .newAtoA(req.body)
        .then(() => {
            res.end()
        })
})

app.post("modifyAtoa", async (req, res) => {
    console.log(`Modifying This Atoa`)
    return postAnswers
        .modifyAtoa(req.body)
        .then(() => {
            res.redirect('back');
            res.end();
        })
})

app.post("/upvoteQuestion", async (req, res) => {
    console.log('upvoting answer')
    return postAnswers
    .upvoteAnswer(req.body)
    .then(() => {
        res.redirect('back');
        res.end();
    })
})

app.post("/upvoteQuestion", async (req, res) => {
    console.log('upvoting answer to answer')
    return postAnswers
    .upvoteAtoa(req.body)
    .then(() => {
        res.redirect('back');
        res.end();
    })
})



app.listen(8080, () => {
    console.log("Application listening to port 8080");
});
