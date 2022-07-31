import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

function Footer({ name }) {
  const footerText = `Created by ${name} - 2022`;
  return <h3 className="footer">{footerText}</h3>;
}

Footer.defaultProps = {
  name: 'No name',
};

Footer.propTypes = {
  name: PropTypes.string,
};

export default Footer;
