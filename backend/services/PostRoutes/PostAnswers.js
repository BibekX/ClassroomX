class PostAnswers {
    constructor(knex) {
        this.knex = knex;
    }

    async getUserID(input) {
        let userID = await this.knex
            .select("id")
            .from("users")
            .where("username", input)
            .catch((err) => {
                throw new Error(err);
            })
        if (userID === undefined) {
            throw new Error("User not found");
        } else {
            return userID[0];
        }
    }

    /*
    Input format: Object {
        parent: ID of the question or answer being answered
        username : name of the user posting the question
        body : all body details to fill into database
    }
    */

    async newAnswer(input) {
        let userID = await getUserID(input.username)
        console.log("new answer", input)

        let query = await this.knex
        .insert({
            text : input.body.text,
            votes : 0,
            correct : false,
            usersID : userID,
            questionsID : input.parent
        })
        .into("answers")
        .returning("id")
        .catch((err) => {
            throw new Error(err);
        });
    }

    async modifyAnswer(input) {
        console.log("Modifying this answer", input)

        let query = await this.knex
        .where('id', input.id)
        .update({
            text : input.text
        })
        .into("answers")
        .catch((err) => {
            throw new Error(err);
        })

        console.log("modification finished")
    }

    async newAtoa(input) {
        let userID = await getUserID(input.username)
        console.log("new answer to answer", input)

        let query = await this.knex
        .insert({
            text : input.text,
            votes : 0,
            usersID : userID,
            answersID : input.parent
        })
        .into("atoa")
        .returning("id")
        .catch((err) => {
            throw new Error(err);
        });

    }

    async modifyAtoa(input) {
        console.log("Modifying this answer to answer", input)

        let query = await this.knex
        .where('id', input.id)
        .update({
            text : input.text
        })
        .into("atoa")
        .catch((err) => {
            throw new Error(err);
        })

        console.log("modification finished")

    }

    // Input format: id of answer being designated as the correct answer

    async answerQuestion(input) {
        console.log(`Answer ${input} is being marked as correct`)

        let query = await this.knex
        .where('id', input)
        .update({
            correct : true
        })
        .into("answers")
        .catch((err) => {
            throw new Error(err);
        })

        let questionsIDfinder = await this.knex
        .select("questionsID")
        .where('id', input)
        .from("answers")
        .catch((err) => {
            throw new Error(err);
        })

        let query2 = await this.knex
        .where("id", questionsIDfinder[0])
        .update({
            answered : true
        })
        .into("questions")
        .catch((err) => {
            throw new Error(err);
        })

    }

    async upvoteAnswer(input) {
        let query = await this.knex
        .where('id', input)
        .increment('votes', 1)
        .into("answers")
        .catch((err) => {
            throw new Error(err);
        })

        let query2 = await this.knex
            .select("upvotedlist")
            .from("answers")
            .where('id', input.id)
            .catch((err) => {
                throw new Error(err);
            })

        let updatedupvotedlist = [...query2[0], input.username];

        let query3 = await this.knex
            .where('id', input.id)
            .update({
                upvotedlist: updatedupvotedlist
            })
            .into("answers")
            .catch((err) => {
                throw new Error(err);
            })



        console.log("answer upvoted")

    }

    async upvoteAtoa(input) {
        let query = await this.knex
        .where('id', input)
        .increment('votes', 1)
        .into("atoa")
        .catch((err) => {
            throw new Error(err);
        })

        let query2 = await this.knex
            .select("upvotedlist")
            .from("atoa")
            .where('id', input.id)
            .catch((err) => {
                throw new Error(err);
            })

        let updatedupvotedlist = [...query2[0], input.username];

        let query3 = await this.knex
            .where('id', input.id)
            .update({
                upvotedlist: updatedupvotedlist
            })
            .into("atoa")
            .catch((err) => {
                throw new Error(err);
            })




        console.log("answer to answer upvoted")

    }

}

module.exports = PostAnswers;
