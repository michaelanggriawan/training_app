import React, {Component} from 'react';
import DateTimePicker from 'react-datetime-picker';
import { trainingRequest } from '../../actions/trainingAction';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input,
        Modal, ModalHeader, ModalBody, ModalFooter
 } from 'reactstrap';
 import { Redirect } from 'react-router-dom';


class RequestTraining extends Component{
    state = {
      pengelola_training:'',
      topik:'',
      lokasi:'',
      tanggal_mulai: new Date(),
      tanggal_berakhir: new Date(),
      harga: Number,
      modal:false,
    }
    handleChange = (e)=> {
      this.setState({
          [e.target.id] : e.target.value
      })
    }
    handleTanggalMulai = (tanggal_mulai)=> {
      this.setState({
        tanggal_mulai
      });
    }
    handleTanggalBerakhir = (tanggal_berakhir)=> {
      this.setState({
        tanggal_berakhir
      });
    }
    hanldeSubmit = (e)=> {
      e.preventDefault();
      if(this.state.harga === 'IDRNaN')
      {
        alert('Kolom harga harus berisi angka !!');
        return false;
      }

      this.props.trainingRequest(this.state);

      this.setState({
        pengelola_training:'',
        topik:'',
        lokasi:'',
        tanggal_mulai: new Date(),
        tanggal_berakhir: new Date(),
        harga: '',
        modal:false
      })
    }
    toggle = ()=> {
      if( this.state.pengelola_training === '' || this.state.topik === '' || this.state.lokasi === '' || this.state.harga === '')
      {
          alert('Data Tidak Boleh Kosong !!')
          this.setState(({
            modal: true
          }))
      }

      this.setState({
        harga: parseInt(this.state.harga)
      })

      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      });
      
      this.setState(prevState => ({
        harga: formatter.format(this.state.harga),
        modal: !prevState.modal
      }))
    }
    render(){
      const { auth } = this.props;
      if( !auth.uid ) return <Redirect to="/LogIn" />
      const { tanggal_mulai, tanggal_berakhir, pengelola_training, topik, lokasi, harga, modal } = this.state;
      return(
        <div className="container">
          <Form onSubmit={this.hanldeSubmit}>
          <h5 className="text-dark">Request Training</h5>
            <FormGroup>
              <Label>Pengelola Training</Label>
              <Input type="text" name="pengelola_training" id="pengelola_training" onChange={this.handleChange}  value={pengelola_training} required/>{this.state.err}
            </FormGroup>
            <FormGroup>
              <Label>Topik</Label>
              <Input type="textarea" name="topik" id="topik" onChange={this.handleChange} value ={topik} required/>
            </FormGroup>
            <FormGroup>
              <Label>Lokasi</Label>
              <Input type="textarea" name="lokasi" id="lokasi" onChange={this.handleChange} value={lokasi} required/>
            </FormGroup>
            <FormGroup>
            <Label style={{paddingRight:'10px'}}>Tanggal Mulai</Label>
              <DateTimePicker 
                onChange={this.handleTanggalMulai}
                value={tanggal_mulai}
              />
            </FormGroup>
            <FormGroup>
            <Label style={{paddingRight:'10px'}}>Tanggal Berakhir</Label>
              <DateTimePicker 
                onChange={this.handleTanggalBerakhir}
                value={tanggal_berakhir}
              />
            </FormGroup>
            <FormGroup>
              <Label>Harga</Label>
              <Input type="text" name="text" id="harga" onChange={this.handleChange} value={harga} required/>
            </FormGroup>
            <Button color="dark" onClick={this.toggle}>Submit</Button>
            <Modal isOpen={modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle} style={{textAlign: 'center'}}>Informasi</ModalHeader>
          <ModalBody>
            <h1 style={{textAlign: 'center'}}>Yakin sudah benar ??</h1>
          </ModalBody>
          <ModalFooter>
            <Button color="dark" onClick={this.hanldeSubmit}>OK</Button>
          </ModalFooter>
        </Modal>
          </Form>
        </div>
      )
    }
}

const mapStateToProps = (state)=> {
    return {
      auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch)=> {
  return {
    trainingRequest: (request) => dispatch(trainingRequest(request))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(RequestTraining);
