import React from 'react';
import { Row, Col, Card, CardImg, CardBody, CardText } from 'reactstrap';

const Body = () => {
  return (
    <React.Fragment>
      <Row>
        <Col>
          <strong
            style={{ fontSize: '26px' }}
            className="d-block mt-5 text-center">
            About Me
          </strong>
          {/*<strong
            style={{ fontSize: '20px' }}
            className="d-block mt-1 text-center">
            This is also a live site deployed at:{' '}
            <a href="https://priceless-montalcini-501471.netlify.com/">
              https://priceless-montalcini-501471.netlify.com/
            </a>
         </strong>*/}
        </Col>
      </Row>
      <Row>
        <Col
          sm="12"
          md="6"
          className="align-items-center justify-content-center d-flex">
          <img
            alt="graduation"
            className="w-75 h-75 m-auto"
            src="https://i.imgur.com/bcgvvO1.png"
          />
        </Col>
        <Col
          sm="12"
          md="6"
          className="align-items-center justify-content-center d-flex">
          <img
            alt="graduation"
            className="w-75 h-75 m-auto"
            src="https://i.imgur.com/ljpk4my.png"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="w-75 mx-auto text-justify">
            I have a degree in Bachelor of Science Major in Information Technology. Became fascinated with web development, discovered FreeCodeCamp.org and decided to go further on the frontend, learned ES6, TypeScript,React, Redux, React Apollo, Relay Modern and Express, GraphQL, Mongoose for the backend.
          </div>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <strong
            style={{ fontSize: '26px' }}
            className="d-block mt-3 text-center">
            Plain HTML/CSS/JSS CRUD APP
          </strong>
        </Col>
      </Row>
      <Row className="align-items-center justify-content-center">
        <Col md="4">
          <Card>
            <CardImg top width="100%" src="https://i.imgur.com/YnTrI3k.png" />
            <CardBody>
              <CardText>
                <strong>Features(DOM Manipulation)</strong>
              </CardText>
              <div className="d-flex flex-column mb-2">
                <div>1. ADD/EDIT/DELETE Todo</div>
                <div>2. Filter Todos(All, Active, Completed)</div>
              </div>
              <div>
                <strong>Github:</strong>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/gpbaculio/cs50-rn-project0">
                  https://github.com/gpbaculio/cs50-rn-project0
                </a>
              </div>
              <div>
                <strong>Codepen:</strong>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://codepen.io/iamglenbacs/pen/VNvjpv">
                  https://codepen.io/iamglenbacs/pen/VNvjpv
                </a>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <strong
            style={{ fontSize: '26px' }}
            className="d-block mt-3 text-center">
            React Responsive Design
          </strong>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md="4">
          <Card>
            <CardImg top width="100%" src="https://i.imgur.com/CIniMPL.png" />
            <CardBody>
              <div>
                <strong>Github:</strong>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/gpbaculio/altmanager-landing-challenge">
                  https://github.com/gpbaculio/altmanager-landing-challenge
                </a>
              </div>
              <div>
                <strong>Deployment:</strong>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://amazing-varahamihira-59200e.netlify.com/">
                  {' '}
                  https://amazing-varahamihira-59200e.netlify.com/
                </a>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="4">
          <Card>
            <CardImg top width="100%" src="https://i.imgur.com/Lje5mtP.png" />
            <CardBody>
              <div>
                <strong>Github:</strong>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/gpbaculio/growtiger-landing-css-challenge">
                  https://github.com/gpbaculio/growtiger-landing-css-challenge
                </a>
              </div>
              <div>
                <strong>Deployment:</strong>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wizardly-volhard-6a976c.netlify.com/">
                  https://wizardly-volhard-6a976c.netlify.com/
                </a>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="4">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://i.imgur.com/8ogvjAA.png"
              alt="Card image cap"
            />
            <CardBody>
              <div>
                <strong>Github:</strong>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/gpbaculio/grove-landing-challenge">
                  https://github.com/gpbaculio/grove-landing-challenge
                </a>
              </div>
              <div>
                <strong>Deployment:</strong>
                <a href="https://elegant-booth-6a2e25.netlify.com/">
                  https://elegant-booth-6a2e25.netlify.com/
                </a>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <strong style={{ fontSize: '26px' }} className="d-block text-center">
            React Projects
          </strong>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md="4">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://i.imgur.com/2ZcZrDC.png"
              alt="Card image cap"
            />
            <CardBody>
              <CardText>
                <strong>Frontend: </strong> TypeScript, Redux, Redux Thunk
              </CardText>
              <CardText>
                <strong>Backend: </strong> TypeScript, Express, Mongoose
              </CardText>
              <CardText className="mt-1">
                <strong>Features</strong>
              </CardText>
              <div className="d-flex flex-column mb-2">
                <div>1. Unit Test with Jest</div>
                <div>2. Signup + confirmation</div>
                <div>3. Login + authentication</div>
                <div>4. Add, Edit, Delete todos</div>
                <div>5. Filter All, Active and Completed todos </div>
                <div>6. Search Todos</div>
                <div>7. Pagination</div>
              </div>
              <div>
                <strong>Demo:</strong>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/watch?v=ovZ4g0SaNkk">
                  https://www.youtube.com/watch?v=ovZ4g0SaNkk
                </a>
              </div>
              <div>
                <strong>Deployment:</strong>
                <a href="https://fullstack-react-tsx.herokuapp.com/">
                  https://fullstack-react-tsx.herokuapp.com/
                </a>
              </div>
              <div>
                <strong>Github:</strong>
                <a href="https://github.com/gpbaculio/fullstack-react-tsx">
                  https://github.com/gpbaculio/fullstack-react-tsx
                </a>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="4">
          <Card style={{ textAlign: 'justify' }}>
            <CardImg
              top
              width="100%"
              src="https://i.imgur.com/d29jmm1.png"
              alt="Card image cap"
            />
            <CardBody>
              <CardText>
                <strong>Frontend: </strong> Redux, Redux Saga, Redux Optimistic
              </CardText>
              <CardText>
                <strong>Backend: </strong>Express, Mongoose
              </CardText>
              <CardText>
                <strong>Features</strong>
              </CardText>
              <div className="d-flex flex-column mb-2">
                <div>1. Signup + confirmation</div>
                <div>2. Login + authentication</div>
                <div>3. Add, Edit, Delete todos + Optimistic Update</div>
                <div>4. Filter All, Active and Completed todos </div>
                <div>5. Search Todos</div>
                <div>6. Pagination</div>
              </div>
              <div className="d-flex flex-column">
                <div>
                  <strong>Demo:</strong>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/watch?v=ovZ4g0SaNkk">
                    https://www.youtube.com/watch?v=ovZ4g0SaNkk
                  </a>
                </div>
                <div>
                  <strong>Deployment:</strong>
                  <a href="https://fullstack-redux.herokuapp.com/">
                    https://fullstack-redux.herokuapp.com/
                  </a>
                </div>
                <div>
                  <strong>Github:</strong>
                  <a href="https://github.com/gpbaculio/fullstack-redux-saga">
                    https://github.com/gpbaculio/fullstack-redux-saga
                  </a>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="4">
          <Card style={{ textAlign: 'justify' }}>
            <CardImg
              top
              width="100%"
              src="https://i.imgur.com/vr3iypz.png"
              alt="Card image cap"
            />
            <CardBody>
              <CardText>
                <strong>Frontend: </strong> React Apollo
              </CardText>
              <CardText>
                <strong>Backend: </strong> GraphQL, Express, Mongoose
              </CardText>
              <CardText>
                <strong>Features</strong>
              </CardText>
              <div className="d-flex flex-column mb-2">
                <div>1. Add/Edit todo Subscription</div>
                <div>2. Signup + confirmation</div>
                <div>3. Login + authentication</div>
                <div>4. Add, Edit, Delete todos with Optimistic Update</div>
                <div>5. Filter All, Active and Completed todos </div>
                <div>6. Search Todos</div>
                <div>7. Pagination</div>
              </div>
              <div className="d-flex flex-column">
                <div>
                  <strong>Demo:</strong>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/watch?v=ovZ4g0SaNkk">
                    https://www.youtube.com/watch?v=ovZ4g0SaNkk
                  </a>
                </div>
                <div>
                  <strong>Deployment(YOU MUST LOAD UNSAFE SCRIPTS):</strong>
                  <a href="https://fullstack-apollo-graphql.herokuapp.com/">
                    https://fullstack-apollo-graphql.herokuapp.com/
                  </a>
                </div>
                <div>
                  <strong>Github:</strong>
                  <a href="https://github.com/gpbaculio/fullstack-apollo">
                    https://github.com/gpbaculio/fullstack-apollo
                  </a>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <strong style={{ fontSize: '26px' }} className="d-block text-center">
            React Native Projects
          </strong>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md="4">
          <Card style={{ textAlign: 'justify' }}>
            <CardImg
              top
              width="100%"
              src="https://i.imgur.com/AhYJ6Df.png"
              alt="Card image cap"
            />
            <CardBody>
              <CardText>
                <strong>Features</strong>
              </CardText>
              <div className="d-flex flex-column mb-2">
                <div>1. Pomodoro Timer</div>
              </div>
              <div className="d-flex flex-column">
                <div>
                  <strong>Snack:</strong>
                  <a href="https://snack.expo.io/@gpbaculio/pomodoro-clock">
                    https://snack.expo.io/@gpbaculio/pomodoro-clock
                  </a>
                </div>
                <div>
                  <strong>Github:</strong>
                  <a href="https://github.com/gpbaculio/cs50-rn-project1">
                    https://github.com/gpbaculio/cs50-rn-project1
                  </a>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="4">
          <Card style={{ textAlign: 'justify' }}>
            <CardImg
              top
              width="100%"
              src="https://i.imgur.com/zRb0B9R.png"
              alt="Card image cap"
            />
            <CardBody>
              <CardText>
                <strong>Frontend: </strong> Redux, Redux Thunk
              </CardText>
              <CardText>
                <strong>Database: </strong>
                <div>
                  1.<a href="https://reqres.in/">reqres.in</a> - Mock Login
                  Authentication
                </div>
                <div>
                  2.<a href="https://www.mockapi.io">https://www.mockapi.io</a>{' '}
                  - Todos
                </div>
              </CardText>
              <CardText>
                <strong>Features</strong>
              </CardText>
              <div className="d-flex flex-column mb-2">
                <div>1. Mock Authenticated Login</div>
                <div>2. Filter Todos(All, Active, Completed)</div>
                <div>3. ADD/EDIT/DELETE Todo</div>
              </div>
              <div className="d-flex flex-column">
                <div>
                  <strong>Snack:</strong>
                  <a href="https://snack.expo.io/@gpbaculio/auth-flow_crud-app">
                    https://snack.expo.io/@gpbaculio/auth-flow_crud-app
                  </a>
                </div>
                <div>
                  <strong>Github:</strong>
                  <a href="https://github.com/gpbaculio/cs50-reactnative-project3">
                    https://github.com/gpbaculio/cs50-reactnative-project3
                  </a>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="4">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://i.imgur.com/oi2pfGK.png"
              alt="Card image cap"
            />
            <CardBody>
              <CardText className="mt-1">
                <strong>Features</strong>
              </CardText>
              <div className="d-flex flex-column mb-2">
                <div>
                  1. Search and View Movies data from{' '}
                  <a href="http://www.omdbapi.com">http://www.omdbapi.com</a>
                </div>
              </div>
              <div>
                <strong>Snack:</strong>
                <a href="https://snack.expo.io/@gpbaculio/movie-browser">
                  https://snack.expo.io/@gpbaculio/movie-browser
                </a>
              </div>
              <div>
                <strong>Github:</strong>
                <a href="https://github.com/gpbaculio/cs50-reactnative-project2">
                  https://github.com/gpbaculio/cs50-reactnative-project2
                </a>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Body;
