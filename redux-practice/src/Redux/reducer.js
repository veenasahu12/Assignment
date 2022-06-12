import { GET_LOGGEDIN_USERS, GET_USERS_ERROR, GET_USERS_LOADING, GET_USERS_SUCCESS,GET_ORDERS_LOADING,GET_ORDERS_SUCCESS,GET_ORDERS_ERROR,POST_ORDERS_LOADING,POST_ORDERS_SUCCESS,POST_ORDERS_ERROR } from "./actions";

const init = {
  getusers : {
    loading : false,
    error: false,
    users : []
  },
  LoggedIn : {
    user : {},
    IsAuth : false,
  },
  getorders : {
    loading : false,
    error: false,
    orders : []
  },
  postorders: {
    loading : false,
    error: false,
  }
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case GET_USERS_LOADING: {
      return{
        ...store,
        getusers: {
          ...store.getusers,
          loading: true,
        }
      }
    }
    case GET_USERS_SUCCESS: {
      return{
        ...store,
        getusers: {
          ...store.getusers,
          loading: false,
          users: payload,
        }
      }
    }
    case GET_USERS_ERROR: {
      return {
        ...store,
        getusers:{
          ...store.getusers,
          loading: false,
          error: true,
        }
      }
    }
    case GET_LOGGEDIN_USERS:{
      return{
        ...store,
        LoggedIn: {
          ...store.LoggedIn,
          user : payload,
          IsAuth: true,
        }
      }
    }
    case GET_ORDERS_LOADING: {
      return{
        ...store,
        getorders: {
          ...store.getorders,
          loading: true,
        }
      }
    }
    case GET_ORDERS_SUCCESS: {
      return{
        ...store,
        getorders: {
          ...store.getorders,
          loading: false,
          orders: payload,
        }
      }
    }
    case GET_ORDERS_ERROR: {
      return {
        ...store,
        getorders:{
          ...store.getorders,
          loading: false,
          error: true,
        }
      }
    }
    case POST_ORDERS_LOADING: {
      return{
        ...store,
        postorders: {
          ...store.postorders,
          loading: true,
        }
      }
    }
    case POST_ORDERS_SUCCESS: {
      return{
        ...store,
        postorders: {
          ...store.postorders,
          loading: false,
        }
      }
    }
    case POST_ORDERS_ERROR: {
      return {
        ...store,
        postorders:{
          ...store.postorders,
          loading: false,
          error: true,
        }
      }
    }
    default:
      return store;
  }
};
