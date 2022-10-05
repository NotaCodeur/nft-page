import React, { useState, useEffect, useRef } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Col, Row, Card, Button, Input, List, Divider, Space, Dropdown, Anchor } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, DownOutlined } from '@ant-design/icons/lib/icons';
import bullLogo from '../images/bullLogo.png'
import WireframeLogoTransparent from '../images/WireframeLogoTransparent.png'
import Roadmap from './Roadmap';
import { Link } from 'react-router-dom';


const { Header, Content, Footer } = Layout;

const HeaderSection = ({ state, dispatch }) => {
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
                    label: <a href="#hero" onClick={() => scrollToSection(state.refs.hero)}>Top</a>,
                    key: '0',
                },
                {
                    label: <a onClick={() => scrollToSection(state.refs.roadmap)}>Roadmap</a>,
                    key: '1',
                },
                {
                    label: <a onClick={() => scrollToSection(state.refs.art)}>Art</a>,
                    key: '2',
                },
                {
                    label: <a onClick={() => scrollToSection(state.refs.team)}>Team</a>,
                    key: '3',
                },
                {
                    label: <a onClick={() => scrollToSection(state.refs.faq)}>Faq</a>,
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

    const scrollToSection = (elementRef) => {
        // console.log('elementRef', elementRef)
        if (elementRef?.current) {

            window.scrollTo({
                top: elementRef.current.offsetTop,
                behavior: "smooth",
            })
        }
    }


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
                                <Link to='/'>
                                    <img src={WireframeLogoTransparent} className="logo" alt="logo" />
                                </Link>
                            </Col>
                            <Col >
                                <div style={{ height: '100%', alignContent: 'middle' }}>
                                    {activeMenu ? (

                                        <Dropdown overlay={menu} trigger={['click']} >
                                            <a onClick={(e) => { e.preventDefault() }}>
                                                <Space>
                                                    Menu
                                                    <DownOutlined />
                                                </Space>
                                            </a>
                                        </Dropdown>

                                    )
                                        : activeMenu === false ? (
                                            <Row>
                                                {/* <Anchor>
                                                    <Link href="#heroSection" title="Basic demo" />
                                                    <Link href="#roadmapSection" title="Roadmap" />
                                                    <Link href="#artSection" title="API">
                                                        <Link href="#teamSection" title="Anchor Props" />
                                                        <Link href="#faqSection" title="Link Props" />
                                                    </Link>
                                                </Anchor> */}
                                                <Dropdown overlay={menu} trigger={['click']} >
                                                    <a onClick={(e) => { e.preventDefault() }}>
                                                        <Space>
                                                            Menu
                                                            <DownOutlined />
                                                        </Space>
                                                    </a>
                                                </Dropdown>
                                            </Row>

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