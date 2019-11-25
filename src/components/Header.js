import React from "react"
import LoginContainer from "./LoginContainer"

class Header extends React.Component {

    constructor() {
        super()
    }

    render() {

        return (
            <div className="header">
                <h1>Store</h1>
                <LoginContainer handleLogin={this.props.handleLogin} isLoggedIn={this.props.isLoggedIn} />
            </div>
        )
    }

}

export default Header