import Header from '../components/Header'


export default props => (
    <div>
        <Header />
        {props.children}
        <style jsx>{`
            margin: -9px;
            padding: -10px;
            color: blue;
            width: 101.1%;
            text-align: center;
        `}</style>
    </div>
)
