import { UserOutlined } from '@ant-design/icons';
import { Carousel, Row, Col, Card, Typography, Avatar } from 'antd';
import React from 'react';
const { Title, Text } = Typography;
const { Meta } = Card;


const Team = () => {
  return (
    <>
      <Row justify="center" style={{ paddingTop: '100px', paddingBottom: '50px', }}>
        <Col xs={22} sm={22} md={22} lg={20} xl={20}>
          <Title level={5}>Team</Title>
          <Row gutters={[40, 40]} justify="center">
            <Col xs={24} sm={12} md={12} lg={12} xl={12} >
              <Card style={{ padding: '20px' }}>
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title="Joe Random"
                  description="CEO of NFT Corp."
                >
                </Meta>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <Card style={{ padding: '20px' }}>
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title="Barry Chuck"
                  description="CFO, responsible for finance."
                >
                </Meta>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <Card style={{ padding: '20px' }}>
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title="Lisa Asil"
                  description="Hogwards graduate, Art director."
                >
                </Meta>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <Card style={{ padding: '20px' }}>
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title="Evelyn Rosewood"
                  description="5 years experience, Chief of Marketing."
                >
                </Meta>
              </Card>
            </Col>

          </Row>

        </Col>
      </Row>
    </>
  )
}

export default Team