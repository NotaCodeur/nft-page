import React from 'react'
import logo from '../logo.svg';
import { Col, Row, Card, Button, Input, List, Typography } from 'antd';
import heroImage from '../images/heroImage.png'

const { Title } = Typography;


const Hero = () => {
    return (
        <Row gutter={[40, 40]} justify='center' style={{ paddingTop: '100px', paddingBottom: '100px', }}>
            <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                <div >

                    <img src={heroImage} alt="heroImage" style={{ height: '10%', width: '100%', padding: '20px' }} />
                </div>
            </Col>
            <Col xs={22} sm={8} md={8} lg={8} xl={8}>
                <Title>Super Bull</Title>
                <p>
                    SuperBull is a gaming and utility focused project on the Cardano Blockchain.

                    We believe that the technology behind Cardano has enormous potential to create amazing applications and experiences for NFTs. Join our amazing community and explore the endless possibilities together!
                </p>

                <Button block={true}>
                    Call To Action !
                </Button>
            </Col>
        </Row>
    )
}

export default Hero