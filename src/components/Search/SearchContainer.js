import { connect } from 'react-redux';
import Search from './Search';
import {
  countVisibleCards,
  countAllCards,
} from '../../redux/searchStringRedux';

const mapStateToProps = (state) => {
  const { searchString } = state;
  return {
    searchString: state.searchString,
    countVisible: countVisibleCards(state, searchString),
    countAll: countAllCards(state),
  };
};

// const mapDispatchToProps = (dispatch) => ({
//   changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
// });

export default connect(mapStateToProps)(Search);
