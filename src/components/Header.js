import React from 'react';
import { Row, Col } from 'reactstrap';

const Header = () => (
  <Row>
    <Col>
      <div
        style={{
          backgroundColor: '#20232A',
          color: '#5ED3F3'
        }}
        className="text-center p-3">
        <div className="w-50 mx-auto d-flex flex-column">
          <div style={{ fontSize: '28px', borderBottom: 'solid #5ED3F3 1px' }}>
            Glendon Philipp Baculio
          </div>
          <div style={{ fontSize: '21px', width: '100%' }}>
            Email: gpbaculio@gmail.com
          </div>
        </div>
      </div>
    </Col>
  </Row>
);

export default Header;
