import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({ cards }, columnId) => cards.filter(card => card.columnId == columnId);
// && new RegExp(searchString, 'i').test(card.title));

export const filteredColumns = ({ columns, cards, searchString }) => {
  const cardsFiltered = cards.filter(card =>
    new RegExp(searchString, 'i').test(card.title)
  );
  const cardsColumns = cardsFiltered.map(card => card.columnId);
  return columns
    .filter(column => cardsColumns.includes(column.id))
    .map(column => ({
      ...column,
      cards: cardsFiltered.filter(card => card.columnId == column.id),
    }));
};

// action name creator
const reducerName = 'columns';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_COLUMN = createActionName('ADD_COLUMN');

// action creators
export const createActionAddColumn = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_COLUMN });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_COLUMN:
      return [...state, action.payload];
    default:
      return state;
  }
}