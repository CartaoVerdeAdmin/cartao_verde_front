import React from 'react';
import PropTypes from "prop-types";

import {Certificated, Description, Name, Title} from './Styles'

const Certificate = ({ name, description }) => {
  return (
      <Certificated id="certificated">
        <Title>CERTIFICADO DE POSSE DE ÁRVORE</Title>
        <Name>{ name }</Name>
        <Description>{ description }</Description>
      </Certificated>
  );
}

export default Certificate;

Certificate.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string
};