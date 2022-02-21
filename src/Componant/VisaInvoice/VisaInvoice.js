import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import "./visaInvoice.css"

const VisaInvoice = () => {
    return (
        <div>
            <Container className='mt-3'>
                <Row className="g-3">
                    <Col xs={12} md={4}>
                        <div className=" p-3  rounded-3 input-border ">
                            <span className='fw-bold visa-heading'>Inv-v-1001</span> <br />
                            <span>Deal By: Mr Shah Alam</span><br />
                            <span>Operation By: Mr Shah Alam</span>
                            <span>Date : 02 Feb 2022 03:15</span>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className=" text-center p-3 fw-bold">
                            <span className='fw-bold fs-3 visa-heading'>VISA INVOICE</span> <br />

                            <div className='d-flex mt-2 justify-content-center'>
                                <Button className=' buttons-design' variant="light">Modify</Button>
                                <Button className='ms-4 buttons-design2' variant="primary">Create</Button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className=" text-center  fw-bold ">
                            <Form.Control type="text" placeholder="Vendor Invoice Amount :" className='ms-2 input-border ' />
                            <Form.Control type="text" placeholder="Client Invoice Amount :" className='ms-2 mt-2 input-border' />
                            <Form.Control type="text" placeholder="Profit/Loss Amount" className='ms-2 mt-2 input-border' />
                        </div>
                    </Col>

                </Row>

            </Container>

            <Container className='mt-3'>
                <Row className="g-4">
                    <Col xs={12} md={4} >

                        <div className=' from-box mx-auto py-3 px-3'>
                            <div className="  ">
                                <span>Vendor Name</span> <br />
                                <Form.Control size="sm" type="text" className='mt-1 input-border ' />
                            </div>

                            <div className=" mt-3 ">
                                <span>Embassy Fee</span> <br />
                                <Form.Control size="sm" type="text" className='mt-1 input-border ' />
                            </div>

                            <div className=" mt-3 ">
                                <span>Embassy Agent Fee</span> <br />
                                <Form.Control size="sm" type="text" className='mt-1 input-border ' />
                            </div>

                            <div className=" mt-3 ">
                                <span> Vendor Service Charge</span> <br />
                                <Form.Control size="sm" type="text" className='mt-1 input-border ' />
                            </div>

                            <div className=" mt-3 ">
                                <span> Vendor Delivery Charge</span> <br />
                                <Form.Control size="sm" type="text" className='mt-1 input-border ' />
                            </div>

                            <div className=" mt-3 ">
                                <span> Vendor Note</span> <br />
                                <Form.Control
                                    size="sm"
                                    as="textarea"
                                    placeholder="Leave a Note here"
                                    style={{ height: '100px' }}
                                    className="input-border mt-1"
                                />
                            </div> <br />
                        </div>



                    </Col>


                    <Col xs={12} md={4} >

                        <div className='from-box mx-auto  py-3 px-3'>
                            <div className="  ">
                                <span>Client Name</span> <br />
                                <Form.Control size="sm" type="text" className='mt-1 input-border ' />
                            </div>

                            <div className=" mt-3 ">
                                <span>Pax Fee</span> <br />
                                <Form.Control size="sm" type="text" className='mt-1 input-border ' />
                            </div>

                            <div className=" mt-3 ">
                                <span>Pax Phone Number</span> <br />
                                <Form.Control size="sm" type="text" className='mt-1 input-border ' />
                            </div>

                            <div className=" mt-3 ">
                                <span> Client Service Charge</span> <br />
                                <Form.Control size="sm" type="text" className='mt-1 input-border ' />
                            </div>

                            <div className=" mt-3 ">
                                <span> Client Delivery Date</span> <br />
                                <Form.Control size="sm" type="text" className='mt-1 input-border ' />
                            </div>

                            <div className=" mt-3 ">
                                <span> Client Note</span> <br />
                                <Form.Control
                                    size="sm"
                                    as="textarea"
                                    placeholder="Leave a Note here"
                                    style={{ height: '100px' }}
                                    className="input-border mt-1"
                                />
                            </div> <br />
                        </div>



                    </Col>
                    <Col xs={12} md={4} >

                        <div className='from-box mx-auto py-3 px-3'>
                            <div className="  ">
                                <span>Country Name</span> <br />
                                <Form.Control size="sm" type="text" className='mt-1 input-border ' />
                            </div>

                            <div className=" mt-3 ">
                                <span> Visa Catagory</span> <br />
                                <Form.Control size="sm" type="text" className='mt-1 input-border ' />
                            </div>

                            <div className=" mt-3 ">
                                <span>Visa Type</span> <br />
                                <Form.Control size="sm" type="text" className='mt-1 input-border ' />
                            </div>

                            <div className=" mt-3 ">
                                <span> Visa duration</span> <br />
                                <Form.Control size="sm" type="text" className='mt-1 input-border ' />
                            </div>

                            <div className=" mt-3 ">
                                <span> Entry Type</span> <br />
                                <Form.Control size="sm" type="text" className='mt-1 input-border ' />
                            </div>
                            <div className=" mt-3 ">
                                <span> Passport Number</span> <br />
                                <Form.Control size="sm" type="text" className='mt-1 input-border ' />
                            </div>

                            <div className=" mt-3 ">
                                <span> Oparational Notes</span> <br />
                                <Form.Control
                                    size="sm"
                                    as="textarea"
                                    placeholder="Leave a Note here"
                                    style={{ height: '50px' }}
                                    className="input-border mt-1"
                                />
                            </div>
                        </div>



                    </Col>

                </Row>

            </Container>

            <Container className='mt-3 mb-5'>
                <Row className="g-3">
                    <Col xs={6} md={6}>
                        <div className="text-center px-1 text-danger">
                            <span className='border-bottom border-danger' > Cancel By Vendor </span>
                        </div>
                    </Col>

                    <Col xs={6} md={6}>
                        <div className="text-center px-1 text-success">
                            <span className='border-bottom border-success' > Cancel By Client </span>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default VisaInvoice;