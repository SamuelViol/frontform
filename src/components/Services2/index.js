import React from 'react'
import { CardGroup, Card, Button, Row, Col, Container, CardDeck } from 'react-bootstrap'
import { Styles, ServicesH1, Imgbg, Servicebg, ServicesWrapper, ServiceContainer } from './Services2Elements'

import { IconContext } from 'react-icons/lib'
import { CgFileDocument } from 'react-icons/cg'
import { IoDocumentsSharp, IoPricetagsOutline } from 'react-icons/io5'
import { FaCashRegister, FaBoxes, FaUserPlus, FaTruck } from 'react-icons/fa'
import { RiBankLine } from 'react-icons/ri'

const Services2 = () => {
    return (
        <>
            <ServiceContainer id="services">
            <ServicesH1>Serviços</ServicesH1>
                <ServicesWrapper>
                <Styles>
                <CardGroup>
                    <Row>
                        <Col>
                            <Card>
                                <IconContext.Provider value={{ className: 'react-icons' }}>
                                    <div>
                                        <CgFileDocument />
                                    </div>
                                </IconContext.Provider>
                                <Card.Body>
                                    <Card.Title>NFe e NFCe</Card.Title>
                                    <Card.Text>
                                        Controle completo para entrada e emissão de notas fiscais
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <IconContext.Provider value={{ className: 'react-icons' }}>
                                    <div>
                                        <IoDocumentsSharp />
                                    </div>
                                </IconContext.Provider>
                                <Card.Body>
                                    <Card.Title>Relatórios</Card.Title>
                                    <Card.Text>
                                        Relatórios completos e personalizados
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <IconContext.Provider value={{ className: 'react-icons' }}>
                                    <div>
                                        <FaCashRegister />
                                    </div>
                                </IconContext.Provider>
                                <Card.Body>
                                    <Card.Title>Caixa</Card.Title>
                                    <Card.Text>
                                        Controle completo para que seu caixa se mantenha correto
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                            <IconContext.Provider value={{ className: 'react-icons' }}>
                                    <div>
                                        <IoPricetagsOutline />
                                    </div>
                                </IconContext.Provider>
                                <Card.Body>
                                    <Card.Title>Vendas</Card.Title>
                                    <Card.Text>
                                        Faça vendas de maneira rápida e ágil
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card>
                            <IconContext.Provider value={{ className: 'react-icons' }}>
                                    <div>
                                        <RiBankLine />
                                    </div>
                                </IconContext.Provider>
                                <Card.Body>
                                    <Card.Title>Financeiro</Card.Title>
                                    <Card.Text>
                                        Controle toda a parte financeira de sua empresa
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                            <IconContext.Provider value={{ className: 'react-icons' }}>
                                    <div>
                                        <FaBoxes />
                                    </div>
                                </IconContext.Provider>
                                <Card.Body>
                                    <Card.Title>Estoque</Card.Title>
                                    <Card.Text>
                                        Mantenha seu estoque sempre correto
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                            <IconContext.Provider value={{ className: 'react-icons' }}>
                                    <div>
                                        <FaTruck />
                                    </div>
                                </IconContext.Provider>
                                <Card.Body>
                                    <Card.Title>Entregas</Card.Title>
                                    <Card.Text>
                                        Sistema para controle de entregas
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                            <IconContext.Provider value={{ className: 'react-icons' }}>
                                    <div>
                                        <FaUserPlus />
                                    </div>
                                </IconContext.Provider>
                                <Card.Body>
                                    <Card.Title>E muito mais</Card.Title>
                                    <Card.Text>
                                        Entre em contato e conheça todas as nossas funcionalidades
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </CardGroup>
                </Styles>
                </ServicesWrapper>
            </ServiceContainer>
        </>
    )
}

export default Services2
