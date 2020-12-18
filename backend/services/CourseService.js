class CourseService {
    constructor(knex) {
        this.knex = knex;
    }

    async getCourseDetails(courseName) {
        console.log(`getting details for ${courseName}`)

        let baseDetails = await this.knex
            .select("*")
            .from("courses")
            .where("name", courseName)
            .catch((err) => {
                throw new Error(err);
            });

        console.log("Course Details Here", baseDetails[0])

        let listOfTeachers = getListOfTeachers(baseDetails[0].id);
        let listOfStudents = getListOfStudents(baseDetails[0].id);
        let listOfClasses = getListOfClasses(baseDetails[0].id);

        let listOfQuestions = listofClasses.map(x => this.getListofQuestions(x))

        let resultObject = {
            baseDetails: baseDetails[0],
            listOfTeachers: listOfTeachers,
            listOfStudents: listOfStudents,
            listOfClasses: listOfClasses,
            listOfQuestions: listOfQuestions
        }

        return resultObject;


    }

    async getListOfStudents(coursesID) {
        console.log("Getting List of Students")

        let query = await this.knex
            .select("usersID", "username", "picture")
            .from("studentscourses")
            .innerJoin("users", "studentscourses.usersID", "users.id")
            .where("coursesID", coursesID)
            .catch((err) => {
                throw new Error(err);
            });
        console.log("List of Students:", query)
        return query;

    }

    async getListOfTeachers(coursesID) {
        console.log("Getting List of Teachers")

        let query = await this.knex
            .select("usersID", "username", "picture")
            .from("teacherscourses")
            .innerJoin("users", "teacherscourses.usersID", "users.id")
            .where("coursesID", coursesID)
            .catch((err) => {
                throw new Error(err);
            });
        console.log("List of Teachers:", query)
        return query;

    }

    async getListOfClasses(coursesID) {
        console.log("Getting List of Classes")

        let query = await this.knex
            .select("*")
            .from("classes")
            .where("coursesID", coursesID)
            .catch((err) => {
                throw new Error(err);
            });
        console.log("List of Classes:", query)
        return query;

    }

    async getListOfQuestions(x) {
        console.log("Getting List of Questions")

        let query = await this.knex
            .select("*")
            .from("questions")
            .where("classesID", x.id)
            .catch((err) => {
                throw new Error(err);
            });
        console.log(`Questions in ${x.name}:`, query)
        return query;

    }
}

module.exports = CourseService;


