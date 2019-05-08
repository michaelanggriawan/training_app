import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../actions/authActions';

class SignUp extends Component {
    state = {
        nama_lengkap : '',
        alamat:'',
        nomor_ktp:'',
        nomor_hp:'',
        jenis_kelamin:'',
        email:'',
        password:''
    }

    handleChange = (e)=> {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        this.props.signUp(this.state);
    }
    render(){
        const { nama_lengkap, alamat, nomor_ktp, nomor_hp, email, password, jenis_kelamin } = this.state;
        const { auth, authError } = this.props;
        if( auth.uid ) return <Redirect to="/" />
        return(
            <div className="container">
                <Form onSubmit={this.handleSubmit}>
                    <h5 className="text-dark">Sign Up</h5>
                    { auth ? <p>{authError}</p>: null}
                    <FormGroup>
                        <Label for="nama_lengkap">Nama Lengkap</Label>
                        <Input type="text" name="nama_lengkap" id="nama_lengkap" placeholder="Nama Lengkap" onChange={this.handleChange} value={nama_lengkap}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="alamat">Alamat</Label>
                        <Input type="textarea" name="alamat" id="alamat" placeholder="Alamat" onChange={this.handleChange} value={alamat}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="nomor_ktp">Nomor KTP</Label>
                        <Input type="text" name="nomor_ktp" id="nomor_ktp" placeholder="Nomor KTP" onChange={this.handleChange} value={nomor_ktp}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="nomor_hp">Nomor HP</Label>
                        <Input type="text" name="nomor_hp" id="nomor_hp" placeholder="Nomor HP" onChange={this.handleChange} value={nomor_hp}/>
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <legend>Jenis Kelamin</legend>
                        <FormGroup check>
                        <Label check>
                        <Input type="radio" name="pria" value="Pria" id="jenis_kelamin" checked={ jenis_kelamin === 'Pria'} onChange={this.handleChange}/>
                            Pria
                        </Label>
                        </FormGroup>

                        <FormGroup check>
                        <Label check>
                        <Input type="radio" name="perempuan" value="Wanita" id="jenis_kelamin" checked={ jenis_kelamin === 'Wanita'} onChange={this.handleChange}/>
                            Perempuan
                        </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email </Label>
                        <Input type="email" name="email" id="email" placeholder="Email"  onChange={this.handleChange} value={email}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Password" onChange={this.handleChange} value={password}/>
                    </FormGroup>
                    <Button color="dark">Submit</Button>
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

const mapDispatchToProps = (dispatch)=> {
    return{
        signUp:(newUser)=> dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);