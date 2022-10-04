import React, { useState, useEffect } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Col, Row, Card, Button, Input, List, Divider, Space, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, DownOutlined  } from '@ant-design/icons/lib/icons';
import bullLogo from '../images/bullLogo.png'
import WireframeLogoTransparent from '../images/WireframeLogoTransparent.png'

const { Header, Content, Footer } = Layout;

const HeaderSection = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);

    }, []);

    useEffect(() => {
        if (screenSize > 768) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);


    const menu = (
        <Menu
            items={[
                {
                    label: <a href="https://www.antgroup.com">About</a>,
                    key: '0',
                },
                {
                    label: <a href="">Art</a>,
                    key: '1',
                },
                {
                    label: <a href="">Roadmap</a>,
                    key: '2',
                },
                {
                    label: <a href="">Team</a>,
                    key: '3',
                },
                {
                    label: <a href="">Faq</a>,
                    key: '4 ',
                },
                {
                    type: 'divider',
                },
                {
                    label: <a href="">App</a>,
                    key: '6 ',
                },
            ]}
        />
    );

    return (
        // <Header>
        //     <div className="logo" />
        //     <Menu
        //         theme="dark"
        //         mode="horizontal"
        //         defaultSelectedKeys={['2']}
        //         items={new Array(1).fill(null).map((_, index) => {
        //             const key = index + 1;
        //             return {
        //                 key,
        //                 label: `nav ${key}`,
        //             };
        //         })}
        //     />
        // </Header>
        <>
            <div style={{ maxHeight: '15vh' }}>
                <Row justify="center">
                    <Col></Col>
                    <Col xs={22} sm={22} md={22} lg={20} xl={20}>
                        <Row justify="space-between" align="middle">
                            <Col >
                                <img src={WireframeLogoTransparent} className="logo" alt="logo" />
                            </Col>
                            <Col >
                                <div style={{ height: '100%', alignContent: 'middle' }}>
                                    {activeMenu ? (

                                        <Dropdown overlay={menu} trigger={['click']} >
                                            <a onClick={(e) => e.preventDefault()}>
                                                <Space>
                                                    Menu
                                                    <DownOutlined />
                                                </Space>
                                            </a>
                                        </Dropdown>

                                    ) 
                                    : activeMenu === false ? (
                                    <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                                        <MenuOutlined />
                                    </Button>

                                    ) : null
                                    }
                                </div>
                            </Col>

                        </Row>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={20} xl={20}>
                        <Row justify="end" >
                            <Col>

                            </Col>

                        </Row>

                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4}></Col>
                </Row>


            </div>
        </>
    )
}

export default HeaderSection