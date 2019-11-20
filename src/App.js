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
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }

}

export default App