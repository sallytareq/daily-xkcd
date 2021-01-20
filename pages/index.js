import styles from '../styles.module.css'
import Footer from '../components/Footer'
import MyLayout from '../components/MyLayout'
export default function Home(props) {
  return (
        <MyLayout>
            <h2>XKCD API Comics</h2>
            <img src={props.comics.img} width="100%"/>
            <p>Comic: {props.comics.safe_title}</p>
            <Footer comics={props.comics}/>
        </MyLayout>
  )
}

export async function getServerSideProps(){
    const response = await fetch('https://xkcd.com/info.0.json');
    // console.log(response);
    const jsonData  = await response.json();
    // console.log(jsonData);
    return {props: {comics: jsonData}}
}