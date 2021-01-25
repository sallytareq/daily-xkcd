import styles from '../styles.module.css'
import Footer from '../components/Footer'
import MyLayout from '../components/MyLayout'

export default function Home(props) {
  return (
    <MyLayout>
      <h2>XKCD API Comics</h2>
      <br></br>
      <p>Comic Name: {props.comics.safe_title}</p>
      <img src={props.comics.img} width="50%" />
      <Footer comics={props.comics.num} />
    </MyLayout>
  )
}

export async function getServerSideProps() {
  const response = await fetch('https://xkcd.com/info.0.json');
  const jsonData = await response.json();
  return { props: { comics: jsonData } }
}


