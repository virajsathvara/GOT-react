import axios from "axios";

export const fetchbattle = (url) => {
  return (dispatch) => {
    axios.get(url)
      .then(res => {
        const payload = (res.data.length > 0) ? { battle: res.data[0], error: null } : { battle: {}, error: { message: "Invalid Search Parameteres" } };
        dispatch({ type: 'FETCH_BATTLE_SUCCESS', payload });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_BATTLE_ERROR', payload: { error } });
      });
  };
};

export const fetchLocations = () => {
  return (dispatch) => {
    axios.get('https://protected-lake-39683.herokuapp.com/battles/locations')
      .then(res => {
        dispatch({ type: 'FETCH_LOCATIONS_SUCCESS', payload: { locations: res.data, error: null } });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_LOCATIONS_ERROR', payload: { error } });
      });
  };
};

export const fetchKings = () => {
  return (dispatch) => {
    axios.get('https://protected-lake-39683.herokuapp.com/battles/kings')
      .then(res => {
        dispatch({ type: 'FETCH_KINGS_SUCCESS', payload: { kings: res.data, error: null } });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_KINGS_ERROR', payload: { error } });
      });
  };
};

export const fetchTypes = () => {
  return (dispatch) => {
    axios.get('https://protected-lake-39683.herokuapp.com/battles/battle_types')
      .then(res => {
        dispatch({ type: 'FETCH_TYPES_SUCCESS', payload: { types: res.data, error: null } });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_TYPES_ERROR', payload: { error } });
      });
  };
};