import { Carousel, Row, Col, Card, Typography } from 'antd';
import React from 'react';
const { Title } = Typography;

const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const { Meta } = Card;
const Art = () => {
  return (
    <>
      <Row justify='center' style={{ paddingTop: '100px', paddingBottom: '100px', }}>
        <Col xs={24} sm={24} md={24} lg={20} xl={20}>
          <Title level={5}>Art</Title>
          <Row justify='center'>
            <Col span={24}>
              <Carousel autoplay>
                {/* <div style={contentStyle}>
                  <Row justify='center'>
                    <Col>

                      <Card
                        hoverable
                        style={{
                          width: 240,
                        }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                      >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                      </Card>
                    </Col>
                  </Row>
                </div> */}
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Art