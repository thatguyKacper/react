import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

// const Card = props => (<h3 className={styles.component}>{props.title}</h3>);

// Card.propTypes = {
//   title: PropTypes.string.isRequired,
// };

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  }

  render() {
    const { title } = this.props;

    return (
      <h3 className={styles.component}>{title}</h3>
    );
  }
}

export default Card;