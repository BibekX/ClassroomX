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
                type: input.details.type,
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

        input.details.map(async (tag) => {
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
            .where('name', input.name)
            .update({
                title: input.details.title,
                text: input.details.text,
                type: input.details.type,
                privacy: input.details.privacy,
                classpin: input.details.classpin,
                institutionpin: input.details.institutionpin
            })
            .into("questions")
            .catch((err) => {
                throw new Error(err);
            })




            console.log("Modification Finished")
    }



}

module.exports = PostQuestions;
