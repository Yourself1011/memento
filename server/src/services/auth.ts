import User from "../models/Users.ts";

export const authenticate = async ({ username, email, password }: {
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
    
    const { errors } = await User.findOneAndUpdate(
        { username, email, password },
        { username, email, password },
        { upsert: true }
    )

    if (errors) {
        throw errors
    }


    return {
        message: "Success! User has been created.",
        user: {
            username,
            email
        }
    }
}