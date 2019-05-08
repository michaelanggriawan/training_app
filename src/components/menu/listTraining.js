import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

class ListTraining extends Component {
  render(){
    const { training, auth } = this.props;
    let result = '';
    if( !auth.uid ) return <Redirect to="/LogIn" />
    if( training ){
        result = training && training.map(item=> {
        const tanggal_mulai = moment(item.tanggal_mulai.toDate()).format();
        const tanggal_akhir = moment(item.tanggal_berakhir.toDate()).format();
        return(
          <div className="container" key={item.id}>
            <Table>
            <tbody>
            <tr>
              <td>{item.pengelola_training}</td>
              <td>{item.topik}</td>
              <td>{item.lokasi}</td>
              <td>{tanggal_mulai}</td>
              <td>{tanggal_akhir}</td>
              <td>{item.harga}</td> 
            </tr>
            </tbody>
            </Table>
          </div>
        )
      });
    }else{
      return(
        <div className="container">
          <h4 style={{textAlign: 'center', marginTop:'25px'}}>Loading....</h4>
        </div>
      )
    }
    return (
      <div className="container">
        { result }
      </div>
    )
  }
}

const mapToProps = ( state ) => {
  return{
    training:state.firestoreReducer.ordered.training_request,
    auth: state.firebase.auth
  }
}
export default compose(
  connect(mapToProps),
  firestoreConnect([
    { collection: 'training_request'}
  ])
)(ListTraining);
