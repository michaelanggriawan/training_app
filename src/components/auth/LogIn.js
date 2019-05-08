import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { connect } from 'react-redux';
import { signIn } from '../../actions/authActions';
import { Redirect } from 'react-router-dom';

class LogIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        this.props.signIn(this.state);
    }
    render(){
        const { authError, auth } = this.props;
        if( auth.uid ) return <Redirect to="/" />
        return(
            <div className="container">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Masukan email anda" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Masukan password anda" onChange={this.handleChange} />
                    </FormGroup>
                    <Button color="dark">Log In</Button>
                    <div style={{textAlign:'center', color: 'red'}}>
                        { authError ? <p>{ authError }</p> : null }
                    </div>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds)=> dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);