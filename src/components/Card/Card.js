import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = props => (<h3 className={styles.component}>{props.title}</h3>);

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Card;