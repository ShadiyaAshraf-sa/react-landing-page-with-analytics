import { Col, Container, Image, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './LandingPg.css'

function LandingPg() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Carousel>
                            <Carousel.Item >

                                <div className='d-flex'>
                                    <Image src='/img.png' className='img-stl img-fluid'></Image>
                                </div>

                                <Carousel.Caption style={{color:'rgb(17, 17, 28)'}}>
                                    <h3>code@ Labs</h3>
                                    <h2 >From Beginner to React Developer in 30 Days</h2>
                                    <p style={{fontSize:'18px'}}>Not just a certificate — a real path to a job, with guided support until you land your first role.</p>
                                    
                                    <button className='btn-stl'>Join the Next Batch</button>
                                    <p>Limited seats — Next batch starts May 10</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel >
                    </Col>
                </Row>
            </Container>
        </>



    );
}

export default LandingPg;