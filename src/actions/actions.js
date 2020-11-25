import axios from "axios";

export const fetchbattle = (url) => {
  return (dispatch) => {
    axios.get(url)
      .then(res => {
        dispatch({ type: 'FETCH_BATTLE_SUCCESS', payload: { battle: res.data[0] } });
      })
      .catch(err => {
        dispatch({ type: 'FETCH_BATTLE_ERROR', payload: err });
      });
  };
};

export const fetchLocations = () => {
  return (dispatch) => {
    axios.get('https://protected-lake-39683.herokuapp.com/battles/locations')
      .then(res => {
        dispatch({ type: 'FETCH_LOCATIONS_SUCCESS', payload: { locations: res.data } });
      })
      .catch(err => {
        dispatch({ type: 'FETCH_LOCATIONS_ERROR', payload: err });
      });
  };
};

export const fetchKings = () => {
  return (dispatch) => {
    axios.get('https://protected-lake-39683.herokuapp.com/battles/kings')
      .then(res => {
        dispatch({ type: 'FETCH_KINGS_SUCCESS', payload: { kings: res.data } });
      })
      .catch(err => {
        dispatch({ type: 'FETCH_KINGS_ERROR', payload: err });
      });
  };
};

export const fetchTypes = () => {
  return (dispatch) => {
    axios.get('https://protected-lake-39683.herokuapp.com/battles/battle_types')
      .then(res => {
        dispatch({ type: 'FETCH_TYPES_SUCCESS', payload: { types: res.data } });
      })
      .catch(err => {
        dispatch({ type: 'FETCH_TYPES_ERROR', payload: err });
      });
  };
};