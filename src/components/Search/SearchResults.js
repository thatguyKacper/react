import React from 'react';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';
import { settings } from '../../data/dataStore.js';
import styles from './SearchResults.scss';
import { Link } from 'react-router-dom';

class SearchResults extends React.Component {
  static propTypes = {
    columns: PropTypes.array,
    result: PropTypes.string,
    changeSearchString: PropTypes.func,
    match: PropTypes.object,
  };
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  componentDidMount() {
    const { result } = this.props.match.params;
    this.props.changeSearchString(result);
  }

  componentDidUpdate(previousProps) {
    if (previousProps.match.params.result != this.props.match.params.result) {
      this.props.changeSearchString(this.props.match.params.result);
    }
  }

  // render() {
  //   const { result } = this.props.match.params;
  //   const { cards } = this.props;
  //   console.log('SearchResult', this);
  //   this.props.changeSearchString(result);
  //   const filterData = cards.filter(cardData => {
  //     return new RegExp(result, 'i').test(cardData.title);
  //   });
  //   console.log('filterData', filterData);
  //   return (
  //     <div className={styles.searchContainer}>
  //       {filterData.map(cardData => (
  //         <Card className="searchedCard" key={cardData.id} {...cardData} />
  //       ))}
  //     </div>
  //   );
  // }
  render() {
    const { columns } = this.props;
    return (
      <div className={styles.searchContainer}>
        {columns.map(column => (
          <Link
            className={styles.columnLink}
            key={column.id}
            to={`/list/${column.listId}`}
          >
            <Column key={column.id} {...column}></Column>
          </Link>
        ))}
      </div>
    );
  }
}

export default SearchResults;