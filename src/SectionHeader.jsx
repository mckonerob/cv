import React from 'react';
import { Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

import './SectionHeader.css';

const SectionHeader = ({ icon, title }) => (
  <Col xs={12} className="section">
    <div className="circle yellow-background section-circle">
      <FontAwesome name={icon} size="2x" className="icon section-icon" />
    </div>
    <div className="section-label large green-background white-color">{title}</div>
  </Col>
);

SectionHeader.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SectionHeader;