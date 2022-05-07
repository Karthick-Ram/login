
import React, { Component } from 'react'

export class Class extends Component {
    constructor() {
        super();
        this.state = {
            user: { uname: "", password: "" },
            error: {}
        }
    }
    ChangeMethod(event) {
        let user = this.state.user;
        user[event.target.name] = event.target.value;
        this.setState(
            {
                user: user
            }, () => { console.log(this.state.user) }
        )
    }
    submitUserForm(event) {
        event.preventDefault();
        if (this.validateForm()) {
            let user = {};
            user["uname"] = "";
            user["password"] = "";
            this.setState({
                user: user
            })
            alert("form submited")
        }
    }
    validateForm() {
        let user = this.state.user;
        let error = {};
        let formIsValid = true;
        if (user["uname"].length == 0) {
            formIsValid = false;
            //   console.log("uanme enter")
            error["uname"] = "enter the username";
        }
        if (!user["uname"].match(/^[a-zA-Z]*$/)) {
            formIsValid = false;
            //   console.log("uanme valid enter")
            error["uname"] = "enter the username field only with character";
        }
        if (user["password"].length == 0) {
            // console.log("enter password")
            formIsValid = false;
            error["password"] = "enter the password";
        }

        if (user["password"].length < 8) {
            formIsValid = false;
            //   console.log("8 charater")
            error["password"] = "password contain atleast 8 character";
        }
        this.setState({
            error: error
        })
        return formIsValid
    }
    render() {
        return (
            <div>
                <h1>Login Using Class</h1>
                <form onSubmit={(e) => this.submitUserForm(e)}>

                    <label>UserName</label><br />
                    <input type="text" name="uname" value={this.state.user.uname}
                        onChange={(e) => this.ChangeMethod(e)} /><br />
                    <div className='error'>{this.state.error.uname}</div>
                    <label>Password</label><br />
                    <input type="password" name="password" value={this.state.user.password} onChange={(e) => this.ChangeMethod(e)} />
                    <div className='error'>{this.state.error.password}</div>
                    <input type="submit" value="Login" />

                </form>
            </div>

        )
    }
}
export default Class;