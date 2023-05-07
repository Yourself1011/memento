import User from "../models/Users.ts";

export const authenticate = async ({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) => {
  const foundUser = await User.findOne({ username: { $eq: username } });
  if (foundUser) {
    if (foundUser.email !== email) {
      throw new TypeError("Incorrect email.");
    }
    if (foundUser.password !== password) {
      throw new TypeError("Incorrect password.");
    } else
      return {
        message: "Success! You have been authenticated.",
      };
  } else {
    if (await User.findOne({ email: { $eq: email } })) {
      throw new TypeError("An account with that email already exists");
    } else {
      await User.create({ username, email, password });

      return {
        message: "Success! Your account has been created.",
      };
    }
  }
};
