import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

const Column = props => (
  <section className={styles.component}>
    <h3 className={styles.title}>{props.titleColumn}</h3>
  </section>
);

Column.propTypes = {
  titleColumn: PropTypes.string.isRequired,
};

// class Column extends React.Component {
//   static PropTypes = {
//     titleColumn: PropTypes.string.isRequired,
//   }

//   render() {
//     return (
//       <section className={styles.component}>
//         <h3 className={styles.title}>{this.props.titleColumn}</h3>
//       </section>
//     )
//   }
// }

export default Column;