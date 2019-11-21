import React from "react"

class LoginContainer extends React.Component {

    constructor() {
        super()
    }

    render() {
        const date = new Date();
        const hours = date.getHours();
        let greeting
    
        if (hours >= 0 && hours < 12) {
            greeting = "morning"
        } else if(hours >= 12 && hours < 18) {
            greeting = "afternoon"
        } else if(hours >= 18) {
            greeting = "evening"
        }

        console.log(this.props)
    
        return (
            !this.props.isLoggedIn ? <div className="login-container" onClick={() => { this.props.handleLogin()}}>Log in</div> : <div className="login-container">Good {greeting}, Ollie</div>
        )
    }
}

export default LoginContainer