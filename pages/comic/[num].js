import MyLayout from '../../components/MyLayout'
export default function Details(props) {
    return (
        <MyLayout>
            <img src={props.comics.img} width="100%" />
            <p>Comic: {props.comics.safe_title}</p>
        </MyLayout>
    )
}

export async function getServerSideProps(context) {
    const num = context.query.num
    const response = await fetch(`https://xkcd.com/${num}/info.0.json`);
    const jsonData = await response.json();
    return { props: { comics: jsonData } }
  }