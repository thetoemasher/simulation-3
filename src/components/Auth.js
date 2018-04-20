import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Auth extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    updateUsername(val) {
        this.setState({ username: val })
    }

    updatePassword(val) {
        this.setState({ password: val })
    }

    registerUser() {
        let { username, password } = this.state
        axios.post('http://localhost:3005/api/register', { username, password }).then(() => {
            this.props.history.push('/dashboard') 
        })
    }

    loginUser() {
        let { username, password } = this.state
        axios.post('http://localhost:3005/api/login', { username, password }).then(user => {
            if(user.data.length > 0){
                this.props.history.push('/dashboard')
            }
        })
    }

    render() {
        let { username, password } = this.state
        return (
            <div>
                <input value={ username } type='text' onChange={ (e) => {this.updateUsername( e.target.value )}}></input>
                <input value={ password } type='text' onChange={ (e) => {this.updatePassword( e.target.value )}}></input>
                    <button onClick={() => this.loginUser()}>Login</button>
                    <button onClick={() => this.registerUser()}>Register</button>
            </div>
        );
    }
}

export default Auth;