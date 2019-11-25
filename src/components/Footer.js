import React from "react"

class Footer extends React.Component {

    constructor() {
        super()

        this.state = {
            firstName: "",
            lastName: "",
            textArea: "hehe",
            isFriendly: true,
            gender: ""
        }
    }

    render() {

        const handleChange = (e) => {

            const { name, value, type, checked } = e.target
            type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })

        }

        return (
            <div className="footer" >
                <form>

                    <input type="text"
                        value={this.state.firstName}
                        name="firstName"
                        onChange={handleChange}
                        placeholder="First Name" />

                    <input type="text"
                        value={this.state.lastName}
                        name="lastName"
                        onChange={handleChange}
                        placeholder="Last Name" />

                    <h1>{this.state.firstName} {this.state.lastName}</h1>

                    <textarea
                        value={this.state.textArea}
                        name="textArea"
                        onChange={handleChange}
                    />

                    <input
                        type="checkbox"
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={handleChange}
                    /> is Friendly?

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value={this.state.gender === "female"}
                            onChange={handleChange}
                        /> Female
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value={this.state.gender === "male"}
                            onChange={handleChange}
                        /> Male
                    </label>

                </form>
            </div>
        )
    }
}

export default Footer