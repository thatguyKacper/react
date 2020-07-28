import { connect } from 'react-redux';
import SearchResults from './SearchResults.js';
import { createAction_changeSearchString } from '../../redux/searchStringRedux.js';
import { filteredColumns } from '../../redux/cardsRedux.js';

const mapStateToProps = state => {
  return {
    title: state.app.title,
    subtitle: state.app.subtitle,
    columns: filteredColumns(state),
    searchString: state.searchString,
  };
};

const mapDispatchToProps = dispatch => ({
  changeSearchString: newSearchString =>
    dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);