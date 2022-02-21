import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Dashbord.css"

const Dashbord = () => {
    return (
        <div>
            <Container className='mt-3'>
                <Row className="g-3">
                    <Col xs={6} md={3}>
                        <div className="border text-center p-3 fw-bold rounded-3 hover-cart ">
                            <span>Payable</span> <br />
                            <span>50,000Tk</span>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="border text-center p-3 fw-bold rounded-3 hover-cart">
                            <span>Uneraned</span> <br />
                            <span>60,000Tk</span>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="border text-center p-3 fw-bold rounded-3 hover-cart">
                            <span>Recievable</span> <br />
                            <span>50,000Tk</span>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="border text-center p-3 fw-bold rounded-3 hover-cart">
                            <span>prepaid</span> <br />
                            <span>50,000Tk</span>
                        </div>
                    </Col>
                </Row>

            </Container>

            <Container className='mt-3'>
                <Row className="g-3">
                    <Col xs={12} md={6}>
                        <div className="border text-center px-1 py-2 rounded-3 hover-cart">
                            <span>Laibilities : </span> <span className='fw-bold'> 50,000tk </span> <br />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="border text-center px-1 py-2  rounded-3 hover-cart">
                            <span>Asset : </span> <span className='fw-bold'> 50,000tk </span> <br />
                        </div>
                    </Col>
                </Row>

            </Container>

            <Container className='mt-3'>
                <Row className="g-3">
                    <Col xs={12} md={4}>
                        <div className="border text-center p-3 fw-bold rounded-3 hover-cart ">
                            <span>Bank</span> <br />
                            <span>50,000Tk</span>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="border text-center p-3 fw-bold rounded-3 hover-cart">
                            <span>Mobile Bank</span> <br />
                            <span>60,000Tk</span>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="border text-center p-3 fw-bold rounded-3 hover-cart">
                            <span>Cash</span> <br />
                            <span>50,000Tk</span>
                        </div>
                    </Col>

                </Row>

            </Container>

            <Container className='mt-3'>
                <Row className="g-3">
                    <Col xs={12} md={12}>
                        <div className="border text-center px-1 rounded-3 py-2 hover-cart">
                            <span>Total Cash And Cash Equivilent : </span> <span className='fw-bold'> 50,000tk </span> <br />
                        </div>
                    </Col>
                </Row>

            </Container>

            <Container className='mt-3'>
                <Row className="g-3">
                    <Col xs={12} md={4}>
                        <div className="border text-center p-3  rounded-3 hover-cart">
                            <div>
                                <div className='d-flex justify-content-between'>
                                    <span className='fw-bold'>Vendor Refund</span> <br />
                                    <span>5896315Tk</span>
                                </div> <br />

                                <div className='d-flex justify-content-between'>
                                    <span className='fw-bold'>Refund In Process</span> <br />
                                    <span> 45 <span className='ms-3'>50,000Tk</span> </span>
                                </div> <hr />

                                <div className='d-flex justify-content-between'>
                                    <span className='fw-bold'>Refund Unsettled</span> <br />
                                    <span> 45 <span className='ms-3'>50,000Tk</span> </span>
                                </div> <hr />

                                <div className='d-flex justify-content-between'>
                                    <span className='fw-bold'>Refund Settled</span> <br />
                                    <span> 45 <span className='ms-3'>50,000Tk</span> </span>
                                </div> <hr />

                                <div className='d-flex justify-content-between'>
                                    <span className='fw-bold'>Refund Not In Process</span> <br />
                                    <span> 45 <span className='ms-3'>50,000Tk</span> </span>
                                </div> <hr />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="border text-center p-3  rounded-3  hover-cart">
                            <div>
                                <div className='d-flex justify-content-between'>
                                    <span className='fw-bold'>Client Refund</span> <br />
                                    <span>5896315Tk</span>
                                </div> <br />

                                <div className='d-flex justify-content-between'>
                                    <span className='fw-bold'>Refund In Process</span> <br />
                                    <span> 45 <span className='ms-3'>50,000Tk</span> </span>
                                </div> <hr />

                                <div className='d-flex justify-content-between'>
                                    <span className='fw-bold'>Refund Unsettled</span> <br />
                                    <span> 45 <span className='ms-3'>50,000Tk</span> </span>
                                </div> <hr />

                                <div className='d-flex justify-content-between'>
                                    <span className='fw-bold'>Refund Settled</span> <br />
                                    <span> 45 <span className='ms-3'>50,000Tk</span> </span>
                                </div> <hr />

                                <div className='d-flex justify-content-between'>
                                    <span className='fw-bold'>Refund Not In Process</span> <br />
                                    <span> 45 <span className='ms-3'>50,000Tk</span> </span>
                                </div> <hr />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="border text-center p-3  rounded-3 hover-cart ">
                            <div>
                                <div className='d-flex justify-content-between'>
                                    <span className='fw-bold'>Vendor Refund</span> <br />
                                    <span>5896315Tk</span>
                                </div> <br />

                                <div className='d-flex justify-content-between'>
                                    <span className='fw-bold'>Refund In Process</span> <br />
                                    <span> 45 <span className='ms-3'>50,000Tk</span> </span>
                                </div> <hr />

                                <div className='d-flex justify-content-between'>
                                    <span className='fw-bold'>Refund Unsettled</span> <br />
                                    <span> 45 <span className='ms-3'>50,000Tk</span> </span>
                                </div> <hr />

                                <div className='d-flex justify-content-between'>
                                    <span className='fw-bold'>Refund Settled</span> <br />
                                    <span> 45 <span className='ms-3'>50,000Tk</span> </span>
                                </div> <hr />

                                <div className='d-flex justify-content-between'>
                                    <span className='fw-bold'>Refund Not In Process</span> <br />
                                    <span> 45 <span className='ms-3'>50,000Tk</span> </span>
                                </div> <hr />
                            </div>
                        </div>
                    </Col>

                </Row>

            </Container >
        </div >
    );
};

export default Dashbord;