import React from 'react';
import { Carousel } from 'react-bootstrap';
import projects2 from '../../images/screenbud-adbf8587-0197-4e57-8e5f-c77d32a2e36a.png';
import image1 from '../../images/project2/image1.png'
import image2 from '../../images/project2/image2.png'
import image3 from '../../images/project2/image3.png'
import image4 from '../../images/project2/image4.png'
import image5 from '../../images/project2/image5.png'

const ProjectsDetails2 = () => {
    return (
        <div>
            <div className="" style={{ backgroundColor: '#F0F8FF' }}>
                <h1>Projects Details 2</h1>
                <div className='container w-75 mb-5'>

                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={projects2}
                                alt="First slide"
                            />
                            {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src={image1}
                                alt="Second slide"
                            />
                            {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={image2}
                                alt="Third slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={image3}
                                alt="Third slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={image4}
                                alt="Third slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={image5}
                                alt="Third slide"
                            />

                        </Carousel.Item>


                    </Carousel>

                </div>
                <div className='container text-start w-75 mt-2 p-3'>
                    <p>This is a travel realated website you can choose your holliday destinaiton
                        the website has many section for example home,login,myorders,manageAllOrders and AddNewService.
                        if you are not login you can not books any orders
                        if you are not login you can not see myOders,manageOrders,manageAllOrders,and AddNewService.
                        if you are login you can access all section and perform any action.
                        you can see your all orders in myOrders section and if you want to delete any orders you can.
                        you see all users orders in manageAllOrders.
                        you can add a new service in AddNewService section</p>

                    <a href="https://github.com/amithasan102827/Assignment-11-client-side"><button type="button" class="btn btn-primary btn-sm">Github Link</button></a>

                    <a href=" https://travel-assignment-11.web.app/"><button type="button" class="btn btn-success btn-sm mx-3">Live Site</button></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetails2;