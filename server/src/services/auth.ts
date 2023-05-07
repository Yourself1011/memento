import User from "../models/Users.ts";

export const authenticate = async ({ username, email, password }: {
    username: string,
    email: string,
    password: string
}) => {
    if ((await User.findOne({ username })).username) {
        console.log("Already exists")
        throw new TypeError("Username already exists.")
    }
    else if ((await User.findOne({ email })).email) {
        throw new TypeError("Email already exists.")
    }
    
    await User.findOneAndUpdate(
        { username, email, password },
        { username, email, password },
        { upsert: true }
    )

    return {
        message: "Success! You have been authenticated."
    }
}