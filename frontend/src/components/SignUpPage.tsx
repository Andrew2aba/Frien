import React from "react";

const SignUpPage= () => {

    return (
        <div>
            <h1>Sign Up Page</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
                <br />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpPage;