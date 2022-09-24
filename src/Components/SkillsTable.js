/*

//////////////////////////////////////////
//      This compononent is            //
//    archived until I decide to      //
//   expand this portfolio.          //
//////////////////////////////////////



import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import Tab from 'react-bootstrap/Tab'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


function SkillsTables() {
    return (
        <>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#overview">
        <Row>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#frontend">
              Front-End Skills
              </ListGroup.Item>
              <ListGroup.Item action href="#backend">
                Back-End Skills
              </ListGroup.Item>
              <ListGroup.Item action href="#js">
              Raw JavaScript Skills
              </ListGroup.Item>
              <ListGroup.Item action href="#dsa">
                Data Structures and Algorithms
              </ListGroup.Item>
              <ListGroup.Item action href="#overview">
                Thinkful Bootcamp Overview
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#frontend">
              <ul class="list-group">
  <li class="list-group-item list-group-item-primary">Front-End Skills</li>
  <li class="list-group-item">HTML5 and CSS, including FlexBox, Media Queries, mobile-first development, navigation and HTML forms.</li>
  <li class="list-group-item">CSS Framework implementation, with a special affinity for Bootstrap. Skilled in formatting and implementing components and utilities.</li>
  <li class="list-group-item">Reading, using and manipulating the DOM, including modifying HTML text and content. Using event listeners for form submission and page rendering. </li>
  <li class="list-group-item">Basic React.js, inlcuding creating React apps, applying the single-responsibility principle in development to create multiple reusable components, using and returning JSX, using props in components to create reusable components, creating tables and lists, and applying styling.</li>
  <li class="list-group-item">Advanced React.js, including React with API hooks, Managing and manipulating multiple use states, creating efficient navigation using React Router, switch and link, organizing React code and using history.</li>
  <li class="list-group-item">Frontend deployment, including understanding environment files and variables, understanding different environments and their purposes, as well as deploying live front-end apps using services such as Vercel and Heroku.</li>
</ul>
              </Tab.Pane>
              <Tab.Pane eventKey="#backend">
              <ul class="list-group">
  <li class="list-group-item list-group-item-danger">Back-End Skills</li>
  <li class="list-group-item">Using Web frameworks such as Express to build complex servers.</li>
  <li class="list-group-item">Writing application and router-level middleware, building routes using query and route parameters, implementing complex error and not found handlers and organizing express code via .controller and .router files.</li>
  <li class="list-group-item">Implementing REST principles to write RESTful API's, testing these API's using SuperTest, implementing major error types, and returning server status codes along with .json data. </li>
  <li class="list-group-item">Creating and Using hosted databases, using tools such as ElephantSQL and DBeaver to create, update, manipulate and delete table data. Using SQL to insert, query, update and delete data within tables, as well as creating complex relations between data tables using keys.</li>
  <li class="list-group-item">Knex Configuration, including creating/writing migrations and seeds; applying these to connect databases to back-end code to create CRUD applications. Using Async/Await to write asynchronous middleware.</li>
  <li class="list-group-item">Backend deployment, including understanding environment files and variables, understanding different environments and their purposes, as well as deploying live back-end servers using cloud services such as Heroku.</li>
</ul>
              </Tab.Pane>
              <Tab.Pane eventKey="#js">
              <ul class="list-group">
  <li class="list-group-item list-group-item-success">Raw JavaScript Skills</li>


  <li class="list-group-item">Basic foundational JavaScript elements including variables, strings, arrays, objects, looping through arrays, destructring, object shorthand, using operators such as rest and spread, understanding scope, and default parameters.</li>
  <li class="list-group-item">Advanced JavaScript functions such as function expressions, arrow functions, higher-order functions, using Array methods, such as Find, Filter, Map, Some, Every, Reduce and sort to use and manipulate complex data.</li>
  <li class="list-group-item">Testing JavaScript code, using the test-driven development mindset to test JavaScript using Mocha, Chai and Jest.</li>
  <li class="list-group-item">Error Handling, including useing Try/Catch blocks to implement clean code that provides clear errors.</li>
  <li class="list-group-item">Implementing Asynchronous code using promises, web requests, promise chaining, resolving/rejecting promises and async/await to write modern code.</li>
</ul>
              </Tab.Pane>
              <Tab.Pane eventKey="#dsa">
              <ul class="list-group">
  <li class="list-group-item list-group-item-warning">Data Structures and Algorithms</li>
  <li class="list-group-item">I'm still expanding my knowledge every day! Soon I'll have more to put here.</li>
  <li class="list-group-item">.</li>
  <li class="list-group-item">.</li>
  <li class="list-group-item">.</li>
  <li class="list-group-item">.</li>
  <li class="list-group-item">.</li>
</ul>
              </Tab.Pane>
              <Tab.Pane eventKey="#overview">
              <ul class="list-group">
  <li class="list-group-item list-group-item-info">Bootcamp Experience</li>
  <li class="list-group-item">Full-Stack software engineer proficient in using Javascript for front-end and back-end programming, React, HTML, CSS, API implementing, Node.JS, Express, PostgreSQL, and frameworks like Bootstrap.</li>
  <li class="list-group-item">Learned industry best practices and software development standards with a focus on Javascript, HTML5, CSS3, React Native, Node.js, PostgreSQL, RESTful API's, algorithms, and data structures.</li>
  <li class="list-group-item">Developed and deployed mobile-first applications while learning new languages and frameworks, spending several hours per week collaborating with and learning from senior web developers in a mentor-student relationship.</li>
  <li class="list-group-item">Switch through the available tabs to see what I'm specifically experienced with.</li>
</ul>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </>
      );


}

export default SkillsTables

*/