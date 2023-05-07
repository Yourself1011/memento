import User from "../models/Users";

export const signUp = async ({ username, email, password }: {
    username: string,
    email: string,
    password: string
}) => {
    if (await User.findOne({ username })) {
        throw new TypeError("Username already exists.")
    }
    else if (await User.findOne({ email })) {
        throw new TypeError("Password already exists.")
    }
    else return {
        message: "Success! User has been created.",
        user: {
            username,
            email
        }
    }
}