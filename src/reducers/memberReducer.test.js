import memberReducer from './memberReducer';

describe('Member reducer', () => {
  const payload = [
    {
      id: 'e837c9f5-247f-445f-bcc3-7d434348336b',
      firstName: 'Martin',
      lastName: 'Bradley',
      email: 'mbradley0@google.it',
      avatar: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
      ip: '166.124.172.160',
    },
  ];

  it('should return default state', () => {
    // force default
    const state = memberReducer(undefined, {});

    expect(state).toMatchObject({ error: null, loading: false, members: [] });
  });

  it('should return correct state when starting fetch', () => {
    const state = memberReducer(undefined, { type: 'FETCH_MEMBERS_START' });

    expect(state).toMatchObject({
      error: null,
      loading: true,
      members: [],
      error: null,
    });
  });

  it('should return correct state when fetch succeeds', () => {
    const state = memberReducer(undefined, {
      type: 'FETCH_MEMBERS_SUCCESS',
      payload,
    });

    expect(state).toMatchObject({
      error: null,
      loading: false,
      members: payload,
      error: null,
    });
  });

  it('should return correct state when fetch fails', () => {
    const error = new Error('Failed making API request to get member details');
    const state = memberReducer(undefined, {
      type: 'FETCH_MEMBERS_ERROR',
      payload: error,
    });

    expect(state).toMatchObject({
      error: null,
      loading: false,
      members: [],
      error,
    });
  });
});
