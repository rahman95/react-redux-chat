import messageReducer from './messageReducer';

describe('Message reducer', () => {
  const payload = [
    {
      id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
      userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
      message:
        'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
      timestamp: '2017-02-09T04:27:38Z',
    },
  ];

  it('should return default state', () => {
    // force default
    const state = messageReducer(undefined, {});

    expect(state).toMatchObject({ error: null, loading: false, messages: [] });
  });

  it('should return correct state when starting fetch', () => {
    const state = messageReducer(undefined, { type: 'FETCH_MESSAGES_START' });

    expect(state).toMatchObject({
      error: null,
      loading: true,
      messages: [],
      error: null,
    });
  });

  it('should return correct state when fetch succeeds', () => {
    const state = messageReducer(undefined, {
      type: 'FETCH_MESSAGES_SUCCESS',
      payload,
    });

    expect(state).toMatchObject({
      error: null,
      loading: false,
      messages: payload,
      error: null,
    });
  });

  it('should return correct state when fetch fails', () => {
    const error = new Error('Failed making API request to get all messages');
    const state = messageReducer(undefined, {
      type: 'FETCH_MESSAGES_ERROR',
      payload: error,
    });

    expect(state).toMatchObject({
      error: null,
      loading: false,
      messages: [],
      error,
    });
  });
});
