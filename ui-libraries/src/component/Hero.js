import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'

const Hero = () => {
  return (
    <div>
    <Container className='my-5'>
        <Row>
            <Col md={8} className='text-md-left'>
                <h2 className='text-primary'>Title</h2>
                <h2  className='text-primary'>Gendre</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaque possimus inventore architecto? Quia hic maxime recusandae nesciunt! Velit harum maxime cumque dicta, tenetur similique.</p>
                <Button>Primary</Button>
            </Col>
            <Col md={4}>
                <img src="https://picsum.photos/300/200" alt="hero-img "/>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Hero;
