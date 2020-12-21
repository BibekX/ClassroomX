const question = [
  {
    id: 1,
    username: "Brock",
    title: "Upload image in sql with express in nodejs ",
    content:
      "I'm newbie in node and I'm having a little trouble. I'm using express in node, and trying to upload a image as a base64 for blob in sql DB. If the image is under 50kb, upload else got PayloadTooLargeError: request entity too large.",
    tags: ["node.js", "express", "vuejs"],
    votes: 10,
    comment: [
      {
        id: 1,
        username: "Bob",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        votes: 3,
        answered: false,
      },
      {
        id: 2,
        username: "Blob",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        votes: 9,
        answered: true,
      },
      {
        id: 3,
        username: "Blob",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        votes: 9,
        answered: true,
      },
      {
        id: 4,
        username: "Blob",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        votes: 9,
        answered: true,
      },
      {
        id: 5,
        username: "Blob",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        votes: 9,
        answered: true,
      },
      {
        id: 6,
        username: "Blob",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        votes: 9,
        answered: true,
      },
      {
        id: 7,
        username: "Blob",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        votes: 19,
        answered: true,
      },
      {
        id: 8,
        username: "Blob",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        votes: 19,
        answered: true,
      },
    ],
  },
  {
    id: 2,
    username: "Toast",
    title:
      "How to send HTML Checkbox information and file input to java servlet within a single POST?",
    content:
      "I'm currently trying to build a website where the user can visualize different machine learning algorithms for a school project. However, when trying to collect the checked checkboxes and input file, I am unable to get the file within my servlet. I have checked several posts about ajax, FormData among others but none have solved the issue for me yet. Starting at the very beginning is my HTML form containing all the required input/options for the user",
    tags: ["javascript", "java", "html", "ajax", "servlets"],
    votes: 17,
    comment: [
      {
        username: "Bob",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        votes: 3,
        answered: false,
      },
      {
        username: "Blob",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        votes: 9,
        answered: true,
      },
    ],
  },
  {
    id: 3,
    username: "Ashley",
    title: "Parse screeninfo into useable csv",
    content:
      "This results in a one cell csv because it imports the whole string. I am trying to parse it so that I can call x, y , width, height and display as individual cells. So it would look similar to monitor, x=0, y=0, x1=0, y1=0, displayname",
    tags: ["python", "csv"],
    votes: 15,
    comment: [
      {
        username: "Bob",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        votes: 3,
        answered: false,
      },
      {
        username: "Blob",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        votes: 9,
        answered: true,
      },
    ],
  },
  {
    id: 4,
    username: "Richard",
    title:
      "How to debug in VS Code a local AWS Lambda function with API Gateway written in TypeScript?",
    content:
      "We are about to start working with Lambda functions. We have that technology constraint that we have to use TypeScript. I want to be able to debug my ts file in VS Code when the related endpoint is called from Postman. So, we have the following development environment: Windows 10, Docker for Windows (with Hyper-V not with WSL 2), TypeScript 4.1, Node 12.17, SAM CLI 1.13.2",
    tags: [
      "node.js",
      "typescript",
      "amazon-web-services",
      "aws-lambda",
      "aws-sam-cli",
    ],
    votes: 7,
    comment: [],
  },
];

export default question;
