import styles from '../styles.module.css'
import Link from 'next/link'

function Footer(props){
    return(
        <footer className={styles.footer}>
            <ul>
                {[1,2,3,4,5,6,7,8,9,10].map( (x) => {
                        return(<li>
                            <Link href="/comic/[num].js" as={`comic/${props.comics-x}`}>
                                <a>#{props.comics-x}</a>
                            </Link>
                        </li>)

                    })
                }
            </ul>
            <small>copyright </small>
        </footer>
    )
}


export default Footer;