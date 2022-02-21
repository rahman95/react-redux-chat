const initState = {
  loading: false,
  error: null,
  messages: [],
};

const messageReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_MESSAGES_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_MESSAGES_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        messages: action.payload,
      };
    case 'FETCH_MESSAGES_ERROR':
      return {
        ...state, loading: false, messages: [], error: action.payload,
      };
    default:
      return state;
  }
};

export default messageReducer;
