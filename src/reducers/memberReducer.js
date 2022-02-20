const initState = {
  loading: false,
  error: null,
  members: []
};

const memberReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_MEMBERS_START':
      return { ...state, loading: true, error: null }
    case 'FETCH_MEMBERS_SUCCESS':
        return { ...state, loading: false, error: null, members: action.payload }
    case 'FETCH_MEMBERS_ERROR':
        return { ...state, loading: false, error: action.payload }
    default:
      return state;
  }
};

export default memberReducer;
