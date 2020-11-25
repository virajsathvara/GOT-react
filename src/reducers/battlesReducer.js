
const initialState = {
  battle: {},
  locations: [],
  kings: [],
  types: []
};
const BattlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BATTLE_SUCCESS':
      return {
        ...state,
        battle: action.payload.battle
      };

    case 'FETCH_LOCATIONS_SUCCESS':
      return {
        ...state,
        locations: action.payload.locations
      };

    case 'FETCH_KINGS_SUCCESS':
      return {
        ...state,
        kings: action.payload.kings
      };

    case 'FETCH_TYPES_SUCCESS':
      return {
        ...state,
        types: action.payload.types
      };
    default:
      return state;
  }
};

export default BattlesReducer;
