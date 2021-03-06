import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator.js';
import Icon from './Icon.js';


// const Column = props => (
//   <section className={styles.component}>
//     <h3 className={styles.title}>{props.title}</h3>
//   </section>
// );

// Column.propTypes = {
//   columns: PropTypes.string.isRequired,
// };

class Column extends React.Component {
  // state = {
  //   cards: this.props.cards || [],
  // }

  static propTypes = {
    columns: PropTypes.array,
    cards: PropTypes.array,
    title: PropTypes.string,
    icon: PropTypes.node,
    addColumn: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const { title, icon, cards, addColumn } = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>
        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addColumn} />
        </div>
      </section>
    );
  }
}

export default Column;