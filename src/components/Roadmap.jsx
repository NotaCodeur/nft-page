import { Divider, Steps, Row, Col, Typography } from 'antd';
import React, { useState } from 'react';
const { Step } = Steps;
const { Title } = Typography;


const Roadmap = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value) => {
    console.log('onChange:', current);
    setCurrent(value);
  };

  return (
    <>
      <Row justify="center" style={{ paddingTop: '100px', paddingBottom: '100px', }}>
        <Col xs={22} sm={22} md={22} lg={20} xl={20}>


          <Title level={5}>Roadmap</Title>

          <Row justify="center">
            <Col span={24}>
              <Steps current={current} onChange={onChange}>
                <Step title="Step 1" description="This is a description." />
                <Step title="Step 2" description="This is a description." />
                <Step title="Step 3" description="This is a description." />
              </Steps>

              <Divider />

              <Steps current={current} onChange={onChange} direction="vertical">
                <Step title="Step 1" description="This is a description." />
                <Step title="Step 2" description="This is a description." />
                <Step title="Step 3" description="This is a description." />
              </Steps>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default Roadmap