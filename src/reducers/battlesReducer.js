
const initialState = {
  battle: {},
  locations: [],
  kings: [],
  types: [],
  error: null
};
const BattlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BATTLE_SUCCESS':
      return {
        ...state,
        battle: action.payload.battle,
        error: action.payload.error
      };

    case 'FETCH_BATTLE_ERROR':
      return {
        ...state,
        battle: {},
        error: action.payload.error
      };

    case 'FETCH_LOCATIONS_SUCCESS':
      return {
        ...state,
        locations: action.payload.locations
      };

    case 'FETCH_LOCATIONS_ERROR':
      return {
        ...state,
        locations: [],
        error: action.payload.error
      };

    case 'FETCH_KINGS_SUCCESS':
      return {
        ...state,
        kings: action.payload.kings,
        error: action.payload.error
      };

    case 'FETCH_KINGS_ERROR':
      return {
        ...state,
        kings: [],
        error: action.payload.error
      };

    case 'FETCH_TYPES_SUCCESS':
      return {
        ...state,
        types: action.payload.types,
        error: action.payload.error
      };

    case 'FETCH_TYPES_ERROR':
      return {
        ...state,
        types: [],
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default BattlesReducer;
