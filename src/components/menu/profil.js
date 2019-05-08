import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Profile extends Component{
  render(){
    const { profile, auth } = this.props;
    if( !auth.uid ) return <Redirect to="/LogIn" />
    return(
      <div className="container" style={{marginTop:'50px'}}>
      <ListGroup>
        <ListGroupItem>Nama : { profile.nama_lengkap }</ListGroupItem>
        <ListGroupItem>Alamat : { profile.alamat } </ListGroupItem>
        <ListGroupItem>Nomor Ktp : { profile.nomor_ktp } </ListGroupItem>
        <ListGroupItem>Nomor Hp : { profile.nomor_hp }</ListGroupItem>
        <ListGroupItem>Jenis Kelamin : { profile.jenis_kelamin } </ListGroupItem>
      </ListGroup>
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    profile: state.firebase.profile,
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Profile)