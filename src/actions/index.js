import axios from 'axios';

//Here are the

export const LOAD_PRESIDENTS = "LOAD_PRESIDENTS";
export const load_prez = (data) => {
    return { type: LOAD_PRESIDENTS, data }
}

//Default API request that's fired upon page load. Data is stored in Redux global state
export const getallprez = () => {
  return dispatch => {
      axios.get(`/api/presidents/`)
      .then( res => {
         dispatch(load_prez(res.data))
      })
  }
}

//API request by ascending order
export const az = () => {
  return dispatch => {
      axios.get(`/api/presidents/az`)
      .then( res => {
         dispatch(load_prez(res.data))
      })
  }
}

//API request by descending order
export const za = () => {
  return dispatch => {
      axios.get(`/api/presidents/za`)
      .then( res => {
         dispatch(load_prez(res.data))
      })
  }
}
