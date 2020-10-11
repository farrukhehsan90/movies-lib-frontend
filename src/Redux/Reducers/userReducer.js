export default function reducer(
  state = {
    userDetails: null,
  },
  action
) {
  switch (action.type) {
    case 'LOGIN_PROCESSING': {
      return { ...state, fetching: true };
    }
    case 'LOGIN_PROCESSED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        userDetails: action.payload,
      };
    }

    case 'LOGOUT_PROCESSING': {
      return { ...state };
    }
    case 'LOGOUT_PROCESSED': {
      return {
        userDetails: null,
        alerts: null,
        fetching: false,
        fetched: false,
        error: null,
        userAlerts: [],
        myOrders: [],
        cart: [],
        paymentHistory: [],
        paymentDetail: []
      };
    }

    case 'CLEAR_PROCESSING': {
      return {
        ...state,
        fetching: false,
        fetched: true,
      };
    }

  }
  return state;
}