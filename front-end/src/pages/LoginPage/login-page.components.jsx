import React, { Component } from 'react';

import Header from '../../components/Header/header.component';
import WindowCard from '../../components/WindowCard/window-card.components';
import CustomInput from '../../components/CustomInput/custom-input.component';
import CustomButton from '../../components/CustomButton/custom-button.component';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password: ''
        }

    }

    handleChange = (name) => (event) => {
        this.setState({ [name] : event.target.value },
            () => console.log(this.state))
    }

    handleSubmit = (btnName) => (event) => {
        event.preventDefault();
        switch (btnName) {
            case 'Login with Google':
                break;
            case 'Basic login':
                break;    
            default:
                console.log('clicked')
                break;
        }
    }

    
    
    render() {
        return (
            <div>
                <WindowCard>
                    <Header />
                    <CustomInput 
                        name='email'
                        placeholder='username or email'
                        type='email'
                        otherProps
                        onChange={this.handleChange('email')}
                    />
                    <CustomInput 
                        name='password'
                        placeholder='password'
                        type='password'
                        otherProps
                        onChange={this.handleChange('name')}
                    />
                    <div className="buttons-area">
                        <CustomButton
                        onClick={this.handleSubmit('Login with Google')}>Google+</CustomButton>
                        <CustomButton
                        onClick={this.handleSubmit('Basic login')}>Login</CustomButton>
                    </div>
                </WindowCard>
            </div>
        );
    }
}

export default LoginPage;
