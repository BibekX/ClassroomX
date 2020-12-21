class PostQuestions {
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

    async getClassID(input) {
        let classID = await this.knex
            .select("id")
            .from("classes")
            .where("name", input)
            .catch((err) => {
                throw new Error(err);
            })
        if (classID === undefined) {
            throw new Error("Class not found");
        } else {
            return classID[0];
        }

    }

    // New Questions are posted with an object, parameters: username : username, classname : classname, details : all other details including title and actual text of question

    async newQuestion(input) {
        let userID = await getUserID(input.username)
        let classID = await getClassID(input.classname)
        console.log("New Question", input)

        let query = await this.knex
            .insert({
                title: input.details.title,
                text: input.details.text,
                votes: 0,
                privacy: input.details.privacy,
                classpin: input.details.classpin,
                institutionpin: input.details.institutionpin,
                answered: false,
                usersID: userID,
                classesID: classID
            })
            .into("questions")
            .returning("id")
            .catch((err) => {
                throw new Error(err);
            });

        let tags = input.details.tags;

        tags.map(async (tag) => {
            let query1 = await this.knex
                .select("*")
                .from("tags")
                .where("name", "=", tag.name)
                .then(async (data) => {
                    console.log(data, tag.name);
                    return data;
                })
                .catch((err) => {
                    throw new Error(err);
                });

            if (query1[0] === undefined) {
                await this.knex
                    .insert({
                        name: tag.name,
                    })
                    .into("tags")
                    .returning("id")
                    .then(async (data) => {
                        await this.knex
                            .insert({
                                questionsID: query[0],
                                tagsID: data[0],
                            })
                            .into("questionstags")
                            .returning("id")
                            .catch((err) => {
                                throw new Error(err);
                            });
                    });
            } else {
                await this.knex
                    .insert({
                        questionsID: query[0],
                        tagsID: query1[0].id,
                    })
                    .into("questionstags")
                    .returning("id")
                    .catch((err) => {
                        throw new Error(err);
                    });
            }

        })

        console.log("Question submitted")
    }


    async modifyQuestion(input) {
        console.log("Modifying this Question", input)

        let query = await this.knex
            .where('title', input.title)
            .update({
                title: input.title,
                text: input.text,
                privacy: input.privacy,
                classpin: input.classpin,
                institutionpin: input.institutionpin
            })
            .into("questions")
            .catch((err) => {
                throw new Error(err);
            })




        console.log("Modification Finished")
    }

    async upvoteQuestion(input) {
        let query = await this.knex
            .where('id', input.id)
            .increment('votes', 1)
            .into("questions")
            .catch((err) => {
                throw new Error(err);
            })

        let query2 = await this.knex
            .select("upvotedlist")
            .from("questions")
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
            .into("questions")
            .catch((err) => {
                throw new Error(err);
            })

        console.log("question upvoted")

    }

    async pinQuestion(input) {
        let query = await this.knex
            .where('id', input)
            .update({
                classpin: true
            })
            .into("questions")
            .catch((err) => {
                throw new Error(err);
            })
        console.log("question pinned")

    }

}

module.exports = PostQuestions;
