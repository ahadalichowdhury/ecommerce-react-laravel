import React, { Component, Fragment } from 'react'
import {Modal, Container, Button, Row, Col, Card} from "react-bootstrap"
import axios from "axios";
import ApiURL from "../../Api/ApiURL";
import {toast, ToastContainer} from "react-toastify";

export default class Notification extends Component {
    constructor(){
        super();
        this.state={
            show:true,
            notificationData:[],
            isLoading:"",
            mainDiv:"d-none",
            NotificationModal:false,
            NotificationDate:"",
            NotificationTitle:"",
            NotificationMsg:"",
        }
       
    }
    handleClose = () =>{
        this.setState({NotificationModal:false})
    }
    handleShow = (event) =>{
        this.setState({NotificationModal:true});
        let Ndate= event.target.getAttribute('data-date');
        let Nmsg= event.target.getAttribute('data-msg');
        let Ntitle= event.target.getAttribute('data-title');
        this.setState({NotificationDate:Ndate,NotificationMsg:Nmsg,NotificationTitle:Ntitle})
    };

    componentDidMount(){

        axios.get(ApiURL.notificationHistory).then((response)=>{
          this.setState({notificationData: response.data,isLoading:"d-none",mainDiv:""})
    
          
        }).catch((error)=>{
          toast.error("something is wrong");
    
        });
      }
    
  render() {

    let notificationData=this.state.notificationData;

    let myView = notificationData.map((notification, i)=>{
        return (
        <Col className=" p-1 " md={4} lg={4} sm={12} xs={12}>
        <Card className="notification-card">
            <Card.Body>
                <h6> {notification.title}</h6>
                <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i>  {notification.date}</p>
                <button data-msg={notification.msg} data-date={notification.date} data-title={notification.title} onClick={this.handleShow} className="">Details</button>
            </Card.Body>
        </Card>
    </Col>
    )
    })

    return (
        <Fragment>
        <Container  className="TopSection">
            <Row>
                   {myView}
            </Row>
        </Container>
                <Modal show={this.state.NotificationModal} onHide={this.handleClose}>
                <Modal.Header closeButton>
                             <h6> <i className="fa theme-text fa-bell"></i> Date: {this.state.NotificationDate}</h6>
                         </Modal.Header>
                         <Modal.Body>
                             <h6 className="Notification-title">
                                 {this.state.NotificationTitle}
                             </h6>
                             <p>
                                 {this.state.NotificationMsg}
                             </p>
                         </Modal.Body>
                         <Modal.Footer>
                             <button className="" onClick={this.handleClose}>
                                 Close
                             </button>
                         </Modal.Footer>
            </Modal>
      
    </Fragment>
    )
  }
}
