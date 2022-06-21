import React, {Component,Fragment} from 'react';
import {Container, Row, Col} from "react-bootstrap";

export default class ProductDetails extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
  render() {
    return (
        <Fragment>
        <Container fluid={true} className="mt-0">
            <Row className="p-2">
                <Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
                    <Row>
                        <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                            <img id="PreviewImg" className="w-100 productdetails-img" src="https://files.oyebesmartest.com/uploads/preview/indian-girl-model-photography-photoshoot-hd--(8)wywjkvmzrd.jpg" />
                            <Container  className="my-3">
                                <Row>
                                    <Col className="p-0 image-box m-0"  md={3} lg={3} sm={3} xs={3}>
                                        <img  className="w-100 Product-sm-img" src="https://media.istockphoto.com/photos/young-beautiful-woman-picture-id1294339577?b=1&k=20&m=1294339577&s=170667a&w=0&h=_5-SM0Dmhb1fhRdz64lOUJMy8oic51GB_2_IPlhCCnU="/>
                                    </Col>
                                    <Col className="p-0 image-box m-0"  md={3} lg={3} sm={3} xs={3}>
                                        <img  className="w-100 Product-sm-img" src="https://media.istockphoto.com/photos/young-beautiful-woman-picture-id1294339577?b=1&k=20&m=1294339577&s=170667a&w=0&h=_5-SM0Dmhb1fhRdz64lOUJMy8oic51GB_2_IPlhCCnU="/>
                                    </Col>
                                    <Col className="p-0 image-box m-0"  md={3} lg={3} sm={3} xs={3}>
                                        <img  className="w-100 Product-sm-img" src="https://media.istockphoto.com/photos/young-beautiful-woman-picture-id1294339577?b=1&k=20&m=1294339577&s=170667a&w=0&h=_5-SM0Dmhb1fhRdz64lOUJMy8oic51GB_2_IPlhCCnU="/>
                                    </Col>
                                    <Col className="p-0 image-box m-0"  md={3} lg={3} sm={3} xs={3}>
                                        <img  className="w-100 Product-sm-img" src="https://media.istockphoto.com/photos/young-beautiful-woman-picture-id1294339577?b=1&k=20&m=1294339577&s=170667a&w=0&h=_5-SM0Dmhb1fhRdz64lOUJMy8oic51GB_2_IPlhCCnU="/>
                                    </Col>
                                   
                                </Row>
                            </Container>
                        </Col>
                        <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                            <h5 className="Product-Name">Product name</h5>
                            <h6 className="section-sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quidem? </h6>
                            

                   
                                <h6 className="mt-2">Choose Color</h6>
                                <select className="form-control form-select">
                                    <option value="">Choose Color</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>

                                </select>
                           
                            <div className="input-group">
                                <div className="form-check mx-1">
                                    <input type="radio"  className='form-check-input' name='exampleRadios'/>
                                    <label className='form-check-label' htmlFor='exampleRadios1'>Black</label>
                                </div>
                                <div className="form-check mx-1">
                                    <input type="radio"  className='form-check-input' name='exampleRadios'/>
                                    <label className='form-check-label' htmlFor='exampleRadios1'>Black</label>
                                </div>
                                <div className="form-check mx-1">
                                    <input type="radio"  className='form-check-input' name='exampleRadios'/>
                                    <label className='form-check-label' htmlFor='exampleRadios1'>Black</label>
                                </div>
                            </div>

                            <div className="">
                                <h6 className="mt-2">Choose Quantity</h6>
                                <select className="form-control form-select">
                                    <option value="">Choose Quantity</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                </select>
                            </div>



                            <div className="input-group mt-3">
                                <button className="btn btn-primary m-1 "> <i className="fa fa-shopping-cart"></i>Add To Cart</button>
                                <button className="btn btn-primary m-1"> <i className="fa fa-car"></i>Shipping Mode</button>
                                <button className="btn btn-primary m-1"> <i className="fa fa-heart"></i>Heart button</button>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="mt-0 pt-0" md={6} lg={6} sm={12} xs={12}>
                            <h6 className="mt-2">DETAILS</h6>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ducimus 
                                vitae rerum deserunt molestiae veniam mollitia facere asperiores illo minima adipisci laudantium voluptate
                                 tenetur, veritatis corrupti dolore consequuntur! Vero, est illo doloribus similique doloremque esse quis unde 
                                 exercitationem, 
                                facere adipisci nisi, debitis temporibus praesentium voluptate aspernatur natus repellendus quam corporis.</p>
                        </Col>

                        <Col className="" md={6} lg={6} sm={12} xs={12}>
                            <h6 className="mt-0">REVIEWS</h6>
                            <p className=" p-0 m-0"><span className="Review-Title">Rabbil Hasan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                            <p className=" p-0 m-0"><span className="Review-Title">Rabbil Hasan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                            <p className=" p-0 m-0"><span className="Review-Title">Rabbil Hasan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>

    </Fragment>
    )
  }
}
