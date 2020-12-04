class InstitutionService {
    constructor(knex) {
        this.knex = knex;
    }

    async getInstitutionDetails(institutionName) {
        console.log(`getting details for ${institutionName}`)

        let baseDetails = await this.knex
            .select("*")
            .from("institutions")
            .where("name", institutionName)
            .catch((err) => {
                throw new Error(err);
            });

        console.log("Institution Details Here", baseDetails[0])

        let listOfAdmins = getListOfAdmins(baseDetails[0].id);
        let listOfTeachers = getListOfTeachers(baseDetails[0].id);
        let listOfStudents = getListOfStudents(baseDetails[0].id);
        let listOfCourses = getListOfCourses(baseDetails[0].id);

        let listOfClasses = listOfCourses.map(x => this.getListOfClasses(x))
        let listOfQuestions = listOfClasses.map(x => this.getListOfQuestions(x))

        let resultObject = {
            baseDetails: baseDetails,
            listOfAdmins: listOfAdmins,
            listOfTeachers: listOfTeachers,
            listOfStudents: listOfStudents,
            listOfCourses: listOfCourses,
            listOfClasses: listOfClasses,
            listOfQuestions: listOfQuestions
        }

        return resultObject;
    }

    async getListOfAdmins(institutionID) {
        console.log("Getting List of Admins")

        let query = await this.knex
            .select("usersID", "username", "picture")
            .from("admins")
            .innerJoin("users", "admins.usersID", "users.id")
            .where("institutionsID", institutionID)
            .catch((err) => {
                throw new Error(err);
            });
        console.log("List of Admins:", query)
        return query;
    }

    async getListOfTeachers(institutionID) {
        console.log("Getting List of Teachers")

        let query = await this.knex
            .select("usersID", "username", "picture")
            .from("teachersinstitutions")
            .innerJoin("users", "teachersinstitutions.usersID", "users.id")
            .where("institutionsID", institutionID)
            .catch((err) => {
                throw new Error(err);
            });
        console.log("List of Teachers:", query)
        return query;

    }

    async getListOfStudents(institutionID) {
        console.log("Getting List of Students")

        let query = await this.knex
            .select("usersID", "username", "picture")
            .from("studentsinstitutions")
            .innerJoin("users", "studentsinstitutions.usersID", "users.id")
            .where("institutionsID", institutionID)
            .catch((err) => {
                throw new Error(err);
            });
        console.log("List of Students:", query)
        return query;

    }

    async getListOfCourses(institutionID) {
        console.log("Getting List of Courses")

        let query = await this.knex
            .select("*")
            .from("courses")
            .where("institutionsID", institutionID)
            .catch((err) => {
                throw new Error(err);
            });
        console.log("List of Courses:", query)
        return query;

    }

    async getListOfClasses(course) {
        console.log("Getting List of Classes")

        let query = await this.knex
            .select("*")
            .from("classes")
            .where("coursesID", course.id)
            .catch((err) => {
                throw new Error(err);
            });
        console.log(`Classes in ${course.name}:`, query)
        return query;

    }

    async getListOfQuestions(y) {
        console.log("Getting List of Questions")

        let query = await this.knex
            .select("*")
            .from("questions")
            .where("classesID", y.id)
            .catch((err) => {
                throw new Error(err);
            });
        console.log(`Classes in ${y.name}:`, query)
        return query;

    }


}

module.exports = InstitutionService;
