import React, { Component, Fragment } from 'react'
import {Modal, Container, Button, Row, Col, Card} from "react-bootstrap"

export default class Notification extends Component {
    constructor(){
        super();
        this.state={
            show:true,
        }
       
    }
    handleClose = () =>{
        this.setState({ show:false})
    }
    handleShow = () =>{
        this.setState({ show:true})
    };
    
  render() {
    return (
        <Fragment>
        <Container  className="TopSection">
            <Row>
                    <Col className=" p-1 " md={4} lg={4} sm={12} xs={12}>
                                <Card onClick={this.handleShow} className="notification-card">
                                    <Card.Body>
                                        <h6>lorem ipsum is simply dummy</h6>
                                        <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i> 20-10-20 | status:unread</p>
                                    
                                    </Card.Body>
                                </Card>
                    </Col>
                    <Col className=" p-1 " md={4} lg={4} sm={12} xs={12}>
                                <Card onClick={this.handleShow} className="notification-card">
                                    <Card.Body>
                                        <h6>lorem ipsum is simply dummy</h6>
                                        <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i> 20-10-20 | status:unread</p>
                                    
                                    </Card.Body>
                                </Card>
                    </Col>
                    <Col className=" p-1 " md={4} lg={4} sm={12} xs={12}>
                                <Card onClick={this.handleShow} className="notification-card">
                                    <Card.Body>
                                        <h6>lorem ipsum is simply dummy</h6>
                                        <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i> 20-10-20 | status:unread</p>
                                    
                                    </Card.Body>
                                </Card>
                    </Col>
                    <Col className=" p-1 " md={4} lg={4} sm={12} xs={12}>
                                <Card onClick={this.handleShow} className="notification-card">
                                    <Card.Body>
                                        <h6>lorem ipsum is simply dummy</h6>
                                        <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i> 20-10-20 | status:unread</p>
                                    
                                    </Card.Body>
                                </Card>
                    </Col>
                    <Col className=" p-1 " md={4} lg={4} sm={12} xs={12}>
                                <Card onClick={this.handleShow} className="notification-card">
                                    <Card.Body>
                                        <h6>lorem ipsum is simply dummy</h6>
                                        <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i> 20-10-20 | status:unread</p>
                                    
                                    </Card.Body>
                                </Card>
                    </Col>
                    <Col className=" p-1 " md={4} lg={4} sm={12} xs={12}>
                                <Card onClick={this.handleShow} className="notification-card cursor-pointer">
                                    <Card.Body>
                                        <h6>lorem ipsum is simply dummy</h6>
                                        <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i> 20-10-20 | status:unread</p>
                                    
                                    </Card.Body>
                                </Card>
                    </Col>
            </Row>
        </Container>
                <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <button className="modal-btn" variant="secondary" onClick={this.handleClose}>
                    Close
                </button>
                
                </Modal.Footer>
            </Modal>
      
    </Fragment>
    )
  }
}
