import React from "react"

class LoginContainer extends React.Component {

    render() {
        // const date = new Date();
        // const hours = date.getHours();
        // let greeting = ""

        // if (hours >= 0 && hours < 12) {
        //     greeting = "morning"
        // } else if (hours >= 12 && hours < 18) {
        //     greeting = "afternoon"
        // } else if (hours >= 18) {
        //     greeting = "evening"
        // }

        let buttonMessage = this.props.isLoggedIn ? " Log In" : "Log Out"

        return (
            <div onClick={() => { this.props.handleLogin() }}>{buttonMessage}</div>
        )
    }
}

export default LoginContainer