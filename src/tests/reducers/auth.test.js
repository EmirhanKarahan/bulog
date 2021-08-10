import authReducer from '../../reducers/auth';

test('should set user for login', () => {
  const user = { uid: "abc123", username: "Emirhan" };
  const action = {
    type: 'LOGIN',
    user
  };
  const state = authReducer({}, action);
  expect(state).toEqual(action.user);
});

test('should clear uid for logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ uid: 'anything', username: "Anybody" }, action);
  expect(state).toEqual({});
});