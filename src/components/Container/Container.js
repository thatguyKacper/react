import React from 'react';
import styles from './Container.scss';
import PropTypes from 'prop-types';

class Container extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  }
  render() {

    return (
      <div className={styles.component}>{this.props.children}</div>
    );
  }
}

export default Container;