class AccountService {
    constructor(knex) {
        this.knex = knex;
    }

    async getAccountDetails(accName) {
        console.log(`getting account details for ${accName}`);

        let baseDetails = await this.knex
            .select("id", "username", "nickname", "picture", "email", "bio", "type", "created_at")
            .from("users")
            .where("username", accName)
            .catch((err) => {
                throw new Error(err);
            })

        console.log("account details here", baseDetails[0])

        let listOfCourses = getListOfCourses(baseDetails[0].id);
        let listOfClasses = getListOfClasses(baseDetails[0].id);
        let listOfNotes = getListOfNotes(baseDetails[0].id);
        let listOfQuestions = getListOfQuestions(baseDetails[0].id);
        let listOfAnswers = getListOfAnswers(baseDetails[0].id);
        let listOfAtoa = getListOfAtoa(baseDetails[0].id);


        let resultObject = {
            baseDetails: baseDetails,
            listOfCourses: listOfCourses,
            listOfClasses: listOfClasses,
            listOfNotes: listOfNotes,
            listOfQuestions: listOfQuestions,
            listOfAnswers: listOfAnswers,
            listOfAtoa: listOfAtoa

        }

        return resultObject;
    }

    async getListOfCourses(userID) {
        console.log(`Getting list of courses`)

        let query = await this.knex
            .select("*")
            .from("studentscourses")
            .innerJoin("courses", "studentscourses.coursesID", "courses.id")
            .where("usersID", userID)
            .catch((err) => {
                throw new Error(err);
            });
        console.log("List of Courses", query)
        return query;

    }

    async getListOfClasses(userID) {
        console.log(`Getting list of Classes`)

        let query = await this.knex
            .select("*")
            .from("studentsclasses")
            .innerJoin("classes", "studentsclasses.classesID", "classes.id")
            .where("usersID", userID)
            .catch((err) => {
                throw new Error(err);
            });
        console.log("List of Classes", query)
        return query;


    }

    async getListOfNotes(userID) {
        console.log(`Getting list of Notes`)

        let query = await this.knex
            .select("*")
            .from("notes")
            .where("usersID", userID)
            .catch((err) => {
                throw new Error(err);
            });
        console.log("List of Notes", query)
        return query;
    }

    async getListOfQuestions(userID) {
        console.log(`Getting list of Questions`)

        let query = await this.knex
            .select("*")
            .from("questions")
            .where("usersID", userID)
            .catch((err) => {
                throw new Error(err);
            });
        console.log("List of Questions", query)
        return query;
    }

    async getListOfAnswers(userID) {
        console.log("Getting List of Answers")

        let query = await this.knex
            .select("*")
            .from("answers")
            .innerJoin("questions", "answers.questionID", "questions.id")
            .where("userID", userID)
            .catch((err) => {
                throw new Error(err);
            });
        console.log("List of Answers:", query)
        return query;


    }

    async getListOfAtoa(userID) {
        console.log("Getting List of Answers to Answers")

        let query = await this.knex
            .select("*")
            .from("atoa")
            .innerJoin("answers", "atoa.answersID", "answers.id")
            .where("userID", userID)
            .catch((err) => {
                throw new Error(err);
            });
        console.log("List of Answers to Answers:", query)
        return query;


    }





}

module.exports = AccountService;



