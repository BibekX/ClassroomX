const e = require("express");

class PostAccounts {
    constructor(knex) {
        this.knex = knex;
    }

    async modifyUser(input) {
        console.log("Modifying user details")
        await this.knex
        .where('username', input.username)
        .update({
            nickname : input.nickname,
            picture : input.picture,
            email : input.email,
            bio : input.bio
        })
        .into("users")
        .catch((err) => {
            throw new Error(err);
        })
        console.log("Modification Finished")
    }


    // How this should work - there is a modal on the institution page, to which is sent a list of all the users. From that, there is a button to add the user to that specific page. It'll send the username back to the backend, which would be caught by this specific code here.

    // Need to add a part in the Inst/Course/Class pages, sending the list of all users to those pages.

    // Input format - needs to be an object with the username under key username, and the institution's name under key instName, course's name under key courseName and class's name under key className

    async addInstUser(input) {
        console.log(`Adding ${input.username} to this institution`)
        let query = await this.knex
        .select("id", "username", "nickname", "picture", "email", "bio", "type", "created_at")
        .from("users")
        .where("username", input.username)
        .catch((err) => {
            throw new Error(err);
        })

        let instID = await this.knex
        .select("id")
        .from("institutions")
        .where("name", input.instName)
        .catch((err) => {
            throw new Error(err);
        })


        if (query[0].type === "admin") {
            console.log("admin already found")
        } else if (query[0].type === "teacher") {
            let checker = await this.knex
            .select("*")
            .from('teachersinstitutions')
            .where("institutionsID", instID[0])
            .catch((err) => {
                throw new Error(err);
            })
    
            if (checker[0] === undefined) {
                await this.knex
                .insert({
                    usersID : query[0].id,
                    institutionsID : instID[0].id
                })
                .into("teachersinstitutions")
                .returning("*")
                .catch((err) => {
                    throw new Error(err);
                })
            } else {
                console.log(`${input.username} is already a teacher in this institution`)
            }

    
        } else if (query[0].type === "student") {
            let checker = await this.knex
            .select("*")
            .from('studentsinstitutions')
            .where("institutionsID", instID[0])
            .catch((err) => {
                throw new Error(err);
            })
    
            if (checker[0] === undefined) {
                await this.knex
                .insert({
                    usersID : query[0].id,
                    institutionsID : instID[0].id
                })
                .into("studentsinstitutions")
                .returning("*")
                .catch((err) => {
                    throw new Error(err);
                })
            } else {
                console.log(`${input.username} is already a student in this institution`)
            }

        } else {
            console.log("error, user type not found, here is the query result", query[0])
        }
}

    async addCourseUser(input) {
        console.log(`Adding ${input.username} to this course`)
        let query = await this.knex
        .select("id", "username", "nickname", "picture", "email", "bio", "type", "created_at")
        .from("users")
        .where("username", input.username)
        .catch((err) => {
            throw new Error(err);
        })

        let courseID = await this.knex
        .select("id")
        .from("courses")
        .where("name", input.courseName)
        .catch((err) => {
            throw new Error(err);
        })


        if (query[0].type === "admin" || query[0].type === "teacher") {
            let checker = await this.knex
            .select("*")
            .from('teacherscourses')
            .where("coursesID", courseID[0])
            .catch((err) => {
                throw new Error(err);
            })
    
            if (checker[0] === undefined) {
                await this.knex
                .insert({
                    usersID : query[0].id,
                    coursesID : courseID[0].id
                })
                .into("teacherscourses")
                .returning("*")
                .catch((err) => {
                    throw new Error(err);
                })
            } else {
                console.log(`${input.username} is already a teacher in this course`)
            }

    
        } else if (query[0].type === "student") {
            let checker = await this.knex
            .select("*")
            .from('studentscourses')
            .where("courseID", courseID[0])
            .catch((err) => {
                throw new Error(err);
            })
    
            if (checker[0] === undefined) {
                await this.knex
                .insert({
                    usersID : query[0].id,
                    courseID : courseID[0].id
                })
                .into("studentscourses")
                .returning("*")
                .catch((err) => {
                    throw new Error(err);
                })
            } else {
                console.log(`${input.username} is already a student in this course`)
            }

        } else {
            console.log("error, user type not found, here is the query result", query[0])
        }
    }

    async addClassUser(input) {
        console.log(`Adding ${input.username} to this class`)
        let query = await this.knex
        .select("id", "username", "nickname", "picture", "email", "bio", "type", "created_at")
        .from("users")
        .where("username", input.username)
        .catch((err) => {
            throw new Error(err);
        })

        let classID = await this.knex
        .select("id")
        .from("classes")
        .where("name", input.className)
        .catch((err) => {
            throw new Error(err);
        })


        if (query[0].type === "admin" || query[0].type === "teacher") {
            let checker = await this.knex
            .select("*")
            .from('teachersclasses')
            .where("classesID", classID[0])
            .catch((err) => {
                throw new Error(err);
            })
    
            if (checker[0] === undefined) {
                await this.knex
                .insert({
                    usersID : query[0].id,
                    classID : classID[0].id
                })
                .into("teachersclasses")
                .returning("*")
                .catch((err) => {
                    throw new Error(err);
                })
            } else {
                console.log(`${input.username} is already a teacher in this class`)
            }

    
        } else if (query[0].type === "student") {
            let checker = await this.knex
            .select("*")
            .from('studentsclasses')
            .where("classID", classID[0])
            .catch((err) => {
                throw new Error(err);
            })
    
            if (checker[0] === undefined) {
                await this.knex
                .insert({
                    usersID : query[0].id,
                    classID : classID[0].id
                })
                .into("studentsclasses")
                .returning("*")
                .catch((err) => {
                    throw new Error(err);
                })
            } else {
                console.log(`${input.username} is already a student in this class`)
            }

        } else {
            console.log("error, user type not found, here is the query result", query[0])
        }
    }






}

module.exports = PostAccounts;
