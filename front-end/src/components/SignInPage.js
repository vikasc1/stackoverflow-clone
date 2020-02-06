import React, { Component } from "react";

class SignInPage extends Component {
    render() {
        return (
            <main>
            <div className="Login">
                <form>
                    <div>
                        <label>Email: </label> <br />
                        <input type="email" name="email" id="email" />
                    </div>
                    <div>
                        <label>Password: </label> <br />
                        <input type="password" name="password" id="password" />
                    </div>
                    <div>
                        <br />
                        <input type="submit" value="Log In" />
                    </div>
                </form>
            </div>
            </main>
        )
    }
}

export default SignInPage;