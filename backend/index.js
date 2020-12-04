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


// Landing Service
const LandingService = require("./services/LandingService");
const landingService = new LandingService(knex);

app.get("/", (req, res) => {
    let institutions = landingService.getInstitutions();
    res.render("index", {
        institutions: institutions
    })
})

//Institution Portal - Login Page/Register Page - for now only list of institutions and their details
app.get("/login", (req, res) => {
    let institutions = landingservice.getInstitutions();
    res.render("login", {
        institutions: institutions
    })
})

//Institution Mainpage - in this case :institution is the specific institution's name in the database
const InstitutionService = require("./services/InstitutionService");
const institutionService = new InstitutionService(knex);

app.get('/institutions/:institution', (req, res) => {
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
        courseDetails : courseDetails
    })
})


//Class Mainpage - as above, :class is the specific class's name in the database
const ClassService = require("./services/ClassService");
const classService = new ClassService(knex);

app.get('/class/:class', (req, res) => {
    let classDetails = classService.getClassDetails(req.params.class);
    res.render("class", {
        classDetails : classDetails
    })
})


//Account Page - as above, :name is the username of that account holder in the database
const AccountService = require("./services/AccountService")
const accountService = new AccountService(knex);

app.get('/account/:name', (req, res) => {
    let accountDetails = accountService.getAccountDetails(req.params.name);
    res.render("account", {
        accountDetails : accountDetails
    })
})


//Single Question Page - in this case, :question should be the question ID in the database
const QuestionService = require("./services/QuestionService")
const questionService = new QuestionService(knex);

app.get('/question/:question', (req, res) => {
    let questionDetails = questionService.getQuestionDetails(req.params.question);
    res.render("question", {
        questionDetails : questionDetails
    })
})


//Search Page - 






app.listen(8080, () => {
    console.log("Application listening to port 8080");
  });
  

/*

Still require:
- JWT stuff for logging in, logging out
- Checking for whether an account is logged in for access to specific pages, and account type for specific page functionalities


POST routes:

- New User
    - Only from Register Page

- Modify User
    - Institution Mainpage - Add specific user to this institution
    - Course Mainpage - Add specific user to this course
    - Class Mainpage - Add specific user to this class
    - User Mainpage - Change this user's details



- New Institution??
    - Not sure, maybe these should just be added manually to the database


- New Course
    - Institution Mainpage

- Modify Course
    - Course Mainpage - Change this course's details


- New Class
    - Course Mainpage

- Modify Class
    - Class Mainpage - Change this class's details



- New Note
    - Class Mainpage

- Modify Note
    - Class Mainpage - Teacher/Admin tool to remove this note
    - Class Mainpage - Save changes made to Note to database



- New Question
    - Class Mainpage

- Modify Question
    - Class Mainpage - Teacher/Admin tool to remove this question
    - Question Mainpage - Change this note's details
    - Question Mainpage - Denote specific answer as correct



- New Answer
    - Question Mainpage

- Modify Answer
    - Question Mainpage - Change this answer's details
    - Question Mainpage - denote specific answer to answer as correct



- New Answer to Answer
    - Question Mainpage

- Modify A to A
    - Question Mainpage




Routes to be set up:


Landing: 
- GET - Actual Landing page 
- GET - All institutions and details for the institution finder 


Institution Portal/ Login:
- GET - List of all institutions for drop-down menu
- POST - Login details + LINK to institution page, make sure this user is a valid user for this institution
- POST?? - Logout button
- After user is logged in, should redirect to institution mainpage of selected institution


Institution Mainpage:
- GET - Picture, about details, announcements, other information
- GET - Lists of admins, students, courses, classes, questions etc.
- All of these should involve links etc. Teachers and Admins should be checked for extra functionality for this and all other pages going forwards
- This page is publicly available - all links should redirect to the login page if the student is not logged in/ is not valid for this institution


Course Mainpage:
- GET - About/ pictures etc.
- GET - list of students, teachers, classes, questions
- As with the above, all these should be links


Class Mainpage:
- GET - Informational, class title, other details from db
- GET - List of teachers and students
        - These would be links into their individual account pages
- GET - List of notes under this class, list of questions under this class
- GET - List of Notes and Questions under this Class
        - Each of these would be a further GET request, which stays on the same page but sends more data inwards into the React Page, which would then populate the middle of the page depending on the module being loaded
- GET - Class Chatroom - Socket.io


Course/ Class Search Page:
- POST - Search Bar post request, searching the Class, Course and Notes in the db for the searched parameters


Question Search Page:
- POST - As above, but with Questions, and with different filtering options available.


Single Question Page:
- GET - All DB details on that specific question, the answers applicable to that question, the atoa for those answers, and all user details


Account Page:
- GET - All user info from DB
- GET - Classes, Notes, Questions for that student from the Database

*/










