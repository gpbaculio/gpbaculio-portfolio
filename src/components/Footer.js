import React from 'react';
import { Row, Col } from 'reactstrap';
import { Icon } from 'react-icons-kit';
import { freeCodeCamp } from 'react-icons-kit/fa/freeCodeCamp';
import { githubSquare } from 'react-icons-kit/fa/githubSquare';
import { stackOverflow } from 'react-icons-kit/fa/stackOverflow';

const Footer = () => (
  <Row
    className="mt-5 py-4"
    style={{
      backgroundColor: '#20232A',
      color: '#5ED3F3',
      fontSize: '21px',
      textAlign: 'center'
    }}>
    <Col xs="12" xl="4" lg="6">
      <a
        style={{ color: 'inherit' }}
        className="w-100"
        href="https://www.github.com/gpbaculio">
        <Icon size={30} icon={githubSquare} />
        /gpbaculio
      </a>
    </Col>
    <Col xs="12" xl="4" lg="6">
      <a
        style={{ color: 'inherit' }}
        className="ml-1  w-100"
        href="https://www.stackoverflow.com/u/5288560">
        <Icon size={30} icon={stackOverflow} />
        /u/5288560/i-am-gpbaculio
      </a>
    </Col>
    <Col xs="12" xl="4" lg="12">
      <a
        style={{ color: 'inherit' }}
        className="ml-1 w-100"
        href="https://www.freecodecamp.org/iamglenbacs">
        <Icon size={30} icon={freeCodeCamp} />
        /iamglenbacs
      </a>
    </Col>
  </Row>
);

export default Footer;
