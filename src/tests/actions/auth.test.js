import { login, logout } from "../../actions/auth";

test("should generate login action object", () => {
  const user = { uid: "abc123", username: "Emirhan" };
  const action = login(user);
  expect(action).toEqual({
    type: "LOGIN",
    user: { uid: user.uid, username: user.displayName }
  });
});

test("should generate logout action object", () => {
  const action = logout();
  expect(action).toEqual({
    type: "LOGOUT",
  });
});
