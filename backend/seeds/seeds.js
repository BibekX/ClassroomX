
exports.seed = function (knex) {
  // User Seeds
  return knex('users').insert([
    {username: 'test', password:"placeholder", nickname: "Keanu", picture: "https://www.nme.com/wp-content/uploads/2020/07/cyberpunk2077-credit-cdprojektred@2000x1270-696x442.jpg", email: "notanemail@email.com", bio:"Professional Gamer, 16 inch laptop screen", type: "admin" },
    {username: 'Sam', password:"placeholder", nickname: "Big Sam11111", picture: "https://www.nme.com/wp-content/uploads/2020/07/cyberpunk2077-credit-cdprojektred@2000x1270-696x442.jpg", email: "notanemail2@email.com", bio:"Professional Gamer, 16 inch laptop screen", type: "teacher" },
    {username: 'student1', password:"placeholder", nickname: "Keanu Steve", picture: "https://www.nme.com/wp-content/uploads/2020/07/cyberpunk2077-credit-cdprojektred@2000x1270-696x442.jpg", email: "notanemail3@email.com", bio:"Professional Gamer, 16 inch laptop screen", type: "student" },
    {username: 'student2', password:"placeholder", nickname: "Keanu", picture: "https://www.nme.com/wp-content/uploads/2020/07/cyberpunk2077-credit-cdprojektred@2000x1270-696x442.jpg", email: "notanemail4@email.com", bio:"Professional Gamer, 16 inch laptop screen", type: "student" },
    {username: 'teacher2', password:"placeholder", nickname: "Keanu", picture: "https://www.nme.com/wp-content/uploads/2020/07/cyberpunk2077-credit-cdprojektred@2000x1270-696x442.jpg", email: "notanemail5@email.com", bio:"Professional Gamer, 16 inch laptop screen", type: "teacher" },
    {username: 'student3', password:"placeholder", nickname: "Keanu", picture: "https://www.nme.com/wp-content/uploads/2020/07/cyberpunk2077-credit-cdprojektred@2000x1270-696x442.jpg", email: "notanemail6@email.com", bio:"Professional Gamer, 16 inch laptop screen", type: "student" }
  ])
    // Institutions Seeds
    .then(function () {
      return knex('institutions').insert([
        {name: 'Xccelerate', picture: "https://assets-global.website-files.com/5dbfd0c08b3107b843917e24/5eead28dde2fa774fdf2ed79_logo.png", backgroundpicture: "https://www.chinadiscovery.com/assets/images/hongkong/hongkong-skyline/hong-kong-skyline-788.jpg", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {name: 'Institution2', picture: "https://www.openmicroscopy.org/img/icons/user-groups_institutions.svg", backgroundpicture: "https://www.chinadiscovery.com/assets/images/hongkong/hongkong-skyline/hong-kong-skyline-788.jpg", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {name: 'Institution3', picture: "https://www.openmicroscopy.org/img/icons/user-groups_institutions.svg", backgroundpicture: "https://www.chinadiscovery.com/assets/images/hongkong/hongkong-skyline/hong-kong-skyline-788.jpg", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
      ])
    })
    // Courses Seeds
    .then(function () {
      return knex('courses').insert([
        {name: 'course1', picture: "https://scholarship-positions.com/wp-content/uploads/2020/02/Free-Online-Course-1-1024x684.jpg", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", institutionsID: 1 },
        {name: 'course2', picture: "https://scholarship-positions.com/wp-content/uploads/2020/02/Free-Online-Course-1-1024x684.jpg", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", institutionsID: 1 },
        {name: 'course3', picture: "https://scholarship-positions.com/wp-content/uploads/2020/02/Free-Online-Course-1-1024x684.jpg", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", institutionsID: 1 },
      ])
    })
    // Classes Seeds
    .then(function () {
      return knex('classes').insert([
        {name: 'class1', schedule: "17th May - 20th Aug", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", coursesID: "1" },
        {name: 'class2', schedule: "17th May - 20th Aug", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", coursesID: "1" },
        {name: 'class3', schedule: "17th May - 20th Aug", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", coursesID: "1" },
        {name: 'class4', schedule: "17th May - 20th Aug", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", coursesID: "2" },
        {name: 'class5', schedule: "17th May - 20th Aug", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", coursesID: "2" },
      ])
    })
    // Notes Seeds
    .then(function () {
      return knex('notes').insert([
        {title: "", type:"", text: "", privacy: "", pinned: false, usersID: 1, classesID: 1},
      ])
    })
    // Questions Seeds
    .then(function () {
      return knex('questions').insert([
        {title: "How do I Javascript?", text: "Lorem Ipsum", votes: 10, privacy: true, classpin: false, institutionpin: false, answered: false, usersID: 1, classesID: 1},
        {title: "Help! I can't do the thing!", text: "Lorem Ipsum", votes: 10, privacy: true, classpin: false, institutionpin: false, answered: false, usersID: 1, classesID: 1},
        {title: 'Oh no! Something?', text: "Lorem Ipsum", votes: 10, privacy: true, classpin: false, institutionpin: false, answered: false, usersID: 1, classesID: 1},
      ])
    })
    // Answers Seeds
    .then(function () {
      return knex('answers').insert([
        {text: 'This is an incorrect answer', votes: 2, correct: false, usersID: 2, questionsID: 1},
        {text: 'This is an incorrect answer', votes: 5, correct: false, usersID: 2, questionsID: 1},
        {text: 'This is the correct answer', votes: 300, correct: true, usersID: 2, questionsID: 1},
      ])
    })
    // Atoa Seeds
    .then(function () {
      return knex('atoa').insert([
        {text: "Test", votes: 5, usersID: 1, answersID: 1},
        {text: "Test", votes: 5, usersID: 2, answersID: 1},
        {text: "Test", votes: 5, usersID: 3, answersID: 1},
        {text: "Test", votes: 5, usersID: 4, answersID: 2},
      ])
    })
    // Admins Seeds
    .then(function () {
      return knex('admins').insert([
        {usersID: 1, institutionsID: 1 },
      ])
    })
    // Teacherscourses Seeds
    .then(function () {
      return knex('teacherscourses').insert([
        {usersID: 2, coursesID: 1 },
        {usersID: 5, coursesID: 1 },
      ])
    })
    // Teachersclasses Seeds
    .then(function () {
      return knex('teachersclasses').insert([
        {usersID: 2, classesID: 1 },
        {usersID: 5, classesID: 1 },
      ])
    })
    // studentscourses Seeds
    .then(function () {
      return knex('studentscourses').insert([
        {usersID: 3, coursesID: 1 },
        {usersID: 4, coursesID: 1 },
        {usersID: 6, coursesID: 1 },
      ])
    })
    // studentsclasses Seeds
    .then(function () {
      return knex('studentsclasses').insert([
        { usersID: 3, classesID: 1 },
        { usersID: 4, classesID: 1 },
        { usersID: 6, classesID: 1 },
      ])
    })
    // teachersinstitutions Seeds
    .then(function () {
      return knex('teachersinstitutions').insert([
        { usersID: 2, institutionsID: 1 },
        { usersID: 5, institutionsID: 1 },
      ])
    })
    // studentsinstitutions Seeds
    .then(function () {
      return knex('studentsinstitutions').insert([
        { usersID: 3, institutionsID: 1 },
        { usersID: 4, institutionsID: 1 },
        { usersID: 6, institutionsID: 1 },
      ])
    })
    // tags Seeds
    .then(function () {
      return knex('tags').insert([
        { name: 'question'},
      ])
    })
    // questionstags Seeds
    .then(function () {
      return knex('questionstags').insert([
        { questionsID: 1, tagsID: 1},
        { questionsID: 2, tagsID: 1},
        { questionsID: 3, tagsID: 1},
      ])
    })

  //New Seed here


};
