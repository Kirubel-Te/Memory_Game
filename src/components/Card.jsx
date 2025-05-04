import '../styles/Card.css'

export default function Card(props){

    return(
        <>
            <div className="card">
                <div className='img'>
                    <img src={props.image}/>
                </div>
                <div className='Name'>
                    <h1>{props.imgName}</h1>
                </div>
            </div>
        
        </>
    )
}