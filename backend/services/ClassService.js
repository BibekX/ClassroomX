class ClassService {
    constructor(knex) {
        this.knex = knex;
    }

    async getClassDetails(className) {
        console.log(`getting class details for ${className}`)

        let baseDetails = await this.knex
        .select("*")
        .from("classes")
        .where("name", className)
        .catch((err) => {
            throw new Error(err);
        });

    console.log("Class Details Here", baseDetails[0])

    let listOfTeachers = getListOfTeachers(baseDetails[0].id);
    let listOfStudents = getListOfStudents(baseDetails[0].id);
    let listOfNotes = getListOfNotes(baseDetails[0].id);
    let listOfQuestions = getListOfQuestions(baseDetails[0].id);

    let listofAllUsers = getListOfAllUsers();


    let resultObject = {
        baseDetails: baseDetails[0],
        listOfTeachers: listOfTeachers,
        listOfStudents: listOfStudents,
        listOfNotes: listOfNotes,
        listOfQuestions: listOfQuestions,
        listOfAllUsers : listofAllUsers
    }

    return resultObject;
    }

    async getListOfTeachers(classID) {
        console.log("Getting List of Teachers")

        let query = await this.knex
            .select("usersID", "username", "picture")
            .from("teachersclasses")
            .innerJoin("users", "teachersclasses.usersID", "users.id")
            .where("classesID", classID)
            .catch((err) => {
                throw new Error(err);
            });
        console.log("List of Teachers:", query)
        return query;

    }

    async getListOfStudents(classID) {
        console.log("Getting List of Students")

        let query = await this.knex
            .select("usersID", "username", "picture")
            .from("studentsclasses")
            .innerJoin("users", "studentsclasses.usersID", "users.id")
            .where("classesID", classID)
            .catch((err) => {
                throw new Error(err);
            });
        console.log("List of Students:", query)
        return query;

    }

    async getListOfNotes(classID) {
        console.log("Getting List of Notes")

        let query = await this.knex
            .select("*")
            .from("notes")
            .where("classesID", classID)
            .catch((err) => {
                throw new Error(err);
            });
        console.log("List of Notes:", query)
        return query;

    }

    async getListOfQuestions(classID) {
        console.log("Getting List of Questions")

        let query = await this.knex
            .select("*")
            .from("questions")
            .where("classesID", classID)
            .catch((err) => {
                throw new Error(err);
            });
        console.log("List of Questions:", query)
        return query;
    }

    async getListOfAllUsers() {
        console.log("getting list of all users")

        let query = await this.knex
        .select("id", "username", "nickname", "picture")
        .from("users")
        .catch((err) => {
            throw new Error(err);
        });
        console.log("List of All users collected")

        return query;
    }

}


module.exports = ClassService;
