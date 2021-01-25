import styles from '../styles.module.css'
import Link from 'next/link'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
function Footer(props) {
    return (
        <footer className={styles.footer}>
            <Accordion defaultActiveKey="0">
                <Card bg="dark">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            The last <b><big>10</big></b> comics:
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <ul>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => {
                                    return (<li key={props.comics - x}>
                                        <Link href="/comic/[num].js" as={`comic/${props.comics - x}`}>
                                            <a>#{props.comics - x}</a>
                                        </Link>
                                    </li>)

                                })
                                }
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card bg='dark'>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Click me!
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>I don't know what you were expecting, really.</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <small>copyrights reserved</small>
        </footer>
    )
}


export default Footer;