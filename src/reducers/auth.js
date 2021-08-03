export default (state = {}, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          uid: action.user.uid,
          username: action.user.username
        };
      case 'LOGOUT':
        return {};
      default:
        return state;
    }
  };
  