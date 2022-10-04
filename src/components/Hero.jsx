import React from 'react'
import logo from '../logo.svg';
import { Col, Row, Card, Button, Input, List, Typography } from 'antd';
import heroImage from '../images/heroImage.png'
import Wireframe1 from '../images/Wireframe1.png'
import WireframeTrans from '../images/WireframeTrans.png'

const { Title } = Typography;


const Hero = () => {
    return (
        <Row gutter={[40, 40]} justify='center' style={{ paddingTop: '100px', paddingBottom: '100px', }}>
            <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                <div >

                    <img src={WireframeTrans} alt="heroImage" style={{ height: '10%', width: '100%', padding: '20px' }} />
                </div>
            </Col>
            <Col xs={22} sm={8} md={8} lg={8} xl={8}>
                <Title>Wireframe</Title>
                <br />
                <br />
                <p>
                    Wireframe is a template React js Cardano NFT site.
                    You can copy the code from github to get your own project going.
                    You can use the site with NMKR.io to mint NFT's on the Cardano Blockchain.
                </p>
                <br />
                <br />

                <Button block={true} href='https://github.com/NotaCodeur/nft-page'>
                    Call To Action !
                </Button>
                {/* <Row align='center' justify='center'>
                    <Col span={24} align='center' style={{
                        position: 'absolute',
                        bottom: 20,
                        zIndex: 1,
                        transition: 'all 0.2s',
                    }}>
                        <Row
                            className='createListBottomRow'
                            gutter={[20, 20]}
                            justify='center'
                        >
                            <Col span={24}  align='center'>
                                <Button block={true}>Call To Action !</Button>
                            </Col>
                        </Row>
                    </Col>

                </Row> */}
            </Col>
        </Row>
    )
}

export default Hero