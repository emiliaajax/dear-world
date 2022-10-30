# Vision & Idea

The vision is to create an application for people who need to ventilate their feelings and thoughts. The application should be like an anonymous private diary shared with the world. The aim is for people to have a place where they could turn to if they need to feel less lonely. The user should be able to read posts created by others and create posts themselves without needing to create an account if they don't want to. The focus and theme should be on mental health.

The goal is to create an application and a community that is anonymous and safe and where the posts stays on topic.

# Technology
The application is built with the MERN technology stack (MongoDB, Express, React, Node), Mongoose as ODM and MUI components (https://mui.com/). The components are written as React class components.

# System Design
![System Design](./release/images/system-design.png)

# Requirements

Requirements specification can be found in [`./release/requirements-specification.md`](https://github.com/emiliaajax/dear-world/blob/main/release/requirements-specification.md)

When implementing a feature already specified in the requirements specification, don't forget to update its status. 

When adding a new feature, please add it to the requirements specification.

# Testing

The test specification can be found in [`./release/test-specification.md`](https://github.com/emiliaajax/dear-world/blob/main/release/test-specification.md).
The testing is done with manual test cases and test reports can be found in [`./release/testreports/`](https://github.com/emiliaajax/dear-world/tree/main/release/test-reports).

When adding a new feature, make sure to add the tests and document the testing by adding a test report in the test reports folder.

# Contributing

- Fork the project!
- Install dependencies (`npm install`) on both server and client.
- Add neccessary environment variables for the server described in [`./server/.example.env`](https://github.com/emiliaajax/dear-world/blob/main/server/.example.env).
- Add neccessary environment variables for the client described in [`./client/.example.env`](https://github.com/emiliaajax/dear-world/blob/main/client/.example.env).
- Create a new feature branch.
- Add your new feature to [`./release/requirements-specification.md`](https://github.com/emiliaajax/dear-world/blob/main/release/requirements-specification.md).
- Add tests to your feature (if manual, add them to [`./release/test-specification.md`](https://github.com/emiliaajax/dear-world/blob/main/release/test-specification.md)).
- Document the tests in a test report and add to [`./release/testreports/`](https://github.com/emiliaajax/dear-world/tree/main/release/test-reports).
- Create a pull request.

# Run application locally
- [Quick start guide for the server](https://github.com/emiliaajax/dear-world/blob/main/server/README.md)
- [Quick start guide for the client](https://github.com/emiliaajax/dear-world/blob/main/client/README.md).

# Prior knowledge
To contribute to the project, knowledge of the technology used in the application as well as React class components is a prerequisite.

Learn about React:
<br />
https://reactjs.org/docs/getting-started.html

Learn about React class components:
<br />
https://www.w3schools.com/react/react_class.asp
<br />
https://reactjs.org/docs/components-and-props.html
<br />
https://www.pragimtech.com/blog/reactjs/introduction-to-class-components-in-react/
<br />
https://www.geeksforgeeks.org/reactjs-class-based-components/
<br />

Learn about Node:
<br />
https://nodejs.dev/en/learn/

Learn about Express:
<br />
https://expressjs.com/

Learn about MongoDB:
<br />
https://www.mongodb.com/docs/

Learn about Mongoose:
<br />
https://mongoosejs.com/

Learn about MUI:
<br />
https://mui.com/
