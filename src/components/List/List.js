import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js'

class List extends React.Component {
  static PropTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <p>Interesting things I want to check out!</p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} src={this.props.image} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column titleColumn={this.props.titleColumn1} />
          <Column titleColumn={this.props.titleColumn2} />
          <Column titleColumn={this.props.titleColumn3} />
        </div>
      </section>
    )
  }
}

export default List;
