import React from "react"
import "./App.css"

import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"

class App extends React.Component {

    constructor() {
        super()

        this.state = {
            isLoggedIn: false
        }
    }

    

    render() {

        const handleLogin = () => {
            console.log("hel")
            this.setState({
                isLoggedIn: true
            })
        }

        return (
            <div>
                <Header isLoggedIn={this.state.isLoggedIn} handleLogin={handleLogin}/>
                <Main />
                <Footer />
            </div>
        )
    }

}

export default App