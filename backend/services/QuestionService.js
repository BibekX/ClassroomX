class QuestionService {
    constructor(knex) {
        this.knex = knex;
    }

    async getQuestionDetails(questionID) {
        console.log(`getting question details for question number ${questionID}`)

        let baseDetails = await this.knex
            .select("*")
            .from("questions")
            .where("id", questionID)
            .catch((err) => {
                throw new Error(err);
            })

        console.log("Question details here", baseDetails[0])

        let userDetails = getUserDetails(baseDetails[0].usersID)
        let listOfAnswers = getListOfAnswers(questionID)
        let answersToAnswers = listOfAnswers.map(x => this.getListOfAtoa(x))

        let resultObject = {
            baseDetails: baseDetails[0],
            userDetails: userDetails,
            listOfAnswers: listOfAnswers,
            answersToAnswers: answersToAnswers
        }

        return resultObject;
    }

    async getUserDetails(usersID) {
        console.log("getting user details")

        let query = await this.knex
            .select("username", "nickname", "picture", "type")
            .from("users")
            .where("id", usersID)
            .catch((err) => {
                throw new Error(err);
            });

        console.log("user details", query)
        return query;
    }

    async getListOfAnswers(questionsID) {
        console.log("getting list of answers")

        let query = await this.knex
            .select("text", "votes", "correct", "created_at", "username", "nickname", "picture", "type")
            .from("answers")
            .innerJoin("users", "answers.usersID", "users.id")
            .where("questionsID", questionsID)
            .catch((err) => {
                throw new Error(err);
            });
        console.log("list of answers", query)
        return query;
    }

    async getListOfAtoa(x) {
        console.log("getting list of answers to answers")

        let query = await this.knex
            .select("text", "votes", "correct", "created_at", "username", "nickname", "picture", "type")
            .from("atoa")
            .innerJoin("users", "atoa.usersID", "users.id")
            .where("answersID", x.answersID)
            .catch((err) => {
                throw new Error(err);
            });
        console.log("ist of answers to answers", query)
        return query;

    }


}

module.exports = QuestionService; 
