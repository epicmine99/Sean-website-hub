import { Container, Row } from "react-bootstrap"

export const Banner = () => {
    return (
        <section className ="banner" id="home">
            <Container>
                <Row className ="align-items-center">
                    <Col xs={12} md ={6} xl ={7}>
                        <span className="wrap">Portfolio</span>
                        <h1>{'hi I am Sean the Web dev!'} <span className="wrap">
                            Web Designer Sean!</span> </h1>
                        <p>This is where my awesome biography would go, IF I HAD ONE!</p>
                        <button onClick={() => console.log('connect')}> Check me out on other platforms!</button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}