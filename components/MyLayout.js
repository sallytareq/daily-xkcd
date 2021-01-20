import Header from '../components/Header'


export default props => (
    <div>
        <Header />
        {props.children}
        <style jsx>{`
            color: blue;
            padding: 100px;
            text-align: center;
        `}</style>
    </div>
)
