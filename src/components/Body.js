import React from 'react';
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';

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
        </Col>
      </Row>
      <Row>
        <Col
          xs="12"
          sm="6"
          className="align-items-center justify-content-center d-flex">
          <img
            alt="graduation"
            className="w-75 h-75 m-auto"
            src="https://i.imgur.com/bcgvvO1.png"
          />
        </Col>
        <Col
          xs="12"
          sm="6"
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
            I am a fullstack reactjs developer, I am a graduate of Bachelor of
            Science in Information Technology at Liceo de Cagayan University, I
            got into web development since 2015, you can see my first
            Stackoverflow question in this
            <a href="https://goo.gl/EyhKWr"> link</a> we used plain html, css,
            bootstrap, php at the time at school. After I graduate I self taught
            myself javascript in freecodecamp and eventually got a frontend
            certificate. Diving into js deeper, I discovered react, redux,
            apollo and relay in frontend and mongoose, graphql, express in
            backend, I used this stacks in my portfolio projects.
          </div>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <strong
            style={{ fontSize: '26px' }}
            className="d-block mt-3 text-center">
            React Responsive Design CSS + SASS
          </strong>
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="4">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://i.imgur.com/CIniMPL.png"
              alt="Card image cap"
            />
            <CardBody>
              <div>
                Github Repo:
                <a href="https://goo.gl/dHUhmz">https://goo.gl/dHUhmz</a>
              </div>
              <div>
                Deployment:
                <a href="https://goo.gl/8GcdBC">https://goo.gl/8GcdBC</a>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://i.imgur.com/Lje5mtP.png"
              alt="Card image cap"
            />
            <CardBody>
              <div>
                Github Repo:
                <a href="https://goo.gl/73PqHg">https://goo.gl/73PqHg</a>
              </div>
              <div>
                Deployment:
                <a href="https://goo.gl/mUYJzG">https://goo.gl/mUYJzG</a>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://i.imgur.com/8ogvjAA.png"
              alt="Card image cap"
            />
            <CardBody>
              <div>
                Github Repo:
                <a href="https://goo.gl/ru9RPW">https://goo.gl/ru9RPW</a>
              </div>
              <div>
                Deployment:
                <a href="https://goo.gl/uUi68R">https://goo.gl/uUi68R</a>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <strong style={{ fontSize: '26px' }} className="d-block text-center">
            React Advanced Projects
          </strong>
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="4">
          <Card style={{ textAlign: 'justify' }}>
            <CardImg
              top
              width="100%"
              src="https://i.imgur.com/d29jmm1.png"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>
                <strong>FullStack Todo App</strong>
                <div>(starred 2x on Github)</div>
              </CardTitle>
              <CardText>
                <strong>Frontend</strong>
              </CardText>{' '}
              <div className="d-flex flex-column">
                <div>1. React</div>
                <div>2. Redux, Redux Saga, Redux Optimistic</div>
              </div>
              <CardText>
                <strong>Backend</strong>
              </CardText>
              <div className="d-flex flex-column">
                <div>1. Express</div>
                <div>2. Mongoose</div>
              </div>
              <CardText>
                <strong>Test Account</strong>
              </CardText>
              <div className="d-flex flex-column">
                <div>Email: gpbaculio1320@gmail.com</div>
                <div>Password: abcd123</div>
              </div>
              <CardText>
                <strong>Deployment + Demo + Github Repo</strong>
              </CardText>
              <div className="d-flex flex-column">
                <div>
                  Deployment:
                  <a href="https://fullstack-redux.herokuapp.com/">
                    https://fullstack-redux.herokuapp.com/
                  </a>
                </div>
                <div>
                  Demo:
                  <a href="https://goo.gl/wTUVSB">https://goo.gl/wTUVSB</a>
                </div>
                <div>
                  Github Repo:
                  <a href="https://goo.gl/tSrTPG">https://goo.gl/tSrTPG</a>
                </div>
              </div>
              <CardText>
                <strong>Features</strong>
              </CardText>
              <div className="d-flex flex-column">
                <div>1. Signup with confirmation</div>
                <div>2. Login with authentication</div>
                <div>3. Add, Edit, Delete todos with Optimistic Update</div>
                <div>4. Filter All, Active and Completed todos </div>
                <div>5. Search Todos</div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card style={{ textAlign: 'justify' }}>
            <CardImg
              top
              width="100%"
              src="https://i.imgur.com/vr3iypz.png"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>
                <strong>FullStack Todo App</strong>
              </CardTitle>
              <div>(starred 1x on Github)</div>
              <CardText>
                <strong>Frontend</strong>
              </CardText>
              <div className="d-flex flex-column">
                <div>1. React</div>
                <div>2. React Apollo(with Subscriptions)</div>
              </div>
              <CardText>
                <strong>Backend</strong>
              </CardText>
              <div className="d-flex flex-column">
                <div>1. Apollo GraphQL Express</div>
                <div>2. GraphQL(with Subscriptions)</div>
                <div>3. Mongoose</div>
              </div>
              <CardText>
                <strong>Test Account</strong>
              </CardText>
              <div className="d-flex flex-column">
                <div>Email: gpbaculio1320@gmail.com</div>
                <div>Password: abcd123</div>
              </div>
              <CardText>
                <strong>Deployment + Github Repo</strong>
              </CardText>
              <div>
                <strong>NOTE:</strong> when visiting demo site, I cannot pay for
                a certificate so <strong>YOU MUST LOAD UNSAFE SCRIPTS</strong>
              </div>
              <div className="d-flex flex-column">
                <div>
                  Deployment:
                  <a href="https://fullstack-apollo-graphql.herokuapp.com/">
                    https://fullstack-apollo-graphql.herokuapp.com/
                  </a>
                </div>
                <div>
                  Github Repo:
                  <a href="https://goo.gl/XLK1Gj">https://goo.gl/XLK1Gj</a>
                </div>
              </div>
              <CardText>
                <strong>Features</strong>
              </CardText>
              <div className="d-flex flex-column">
                <div>1. Add/Edit todo Subscription</div>
                <div>2. Signup with confirmation</div>
                <div>3. Login with authentication</div>
                <div>4. Add, Edit, Delete todos with Optimistic Update</div>
                <div>5. Filter All, Active and Completed todos </div>
                <div>6. Search Todos</div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://i.imgur.com/ANg8UAC.png"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>
                <strong>FullStack CRUD App</strong>
              </CardTitle>
              <div>(starred 7x on Github)</div>
              <CardText>
                <strong>Frontend</strong>
              </CardText>
              <div className="d-flex flex-column">
                <div>1. React</div>
                <div>2. Relay Modern(with Subscriptions)</div>
              </div>
              <CardText>
                <strong>Backend</strong>
              </CardText>
              <div className="d-flex flex-column">
                <div>1. Express</div>
                <div>2. Mongoose</div>
                <div>3. GraphQL(with Subscriptions)</div>
              </div>
              <div>
                Github Repo:
                <a href="https://goo.gl/LkaxXo">https://goo.gl/LkaxXo</a>
              </div>
              <CardText>
                <strong>Features</strong>
              </CardText>
              <div className="d-flex flex-column">
                <div>1. Signup </div>
                <div>2. Login with authentication</div>
                <div>3. Add, Edit, Delete items</div>
                <div>4. Add, Edit item Optimistic Response</div>
                <div>4. Add, Edit Subscriptions</div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Body;
