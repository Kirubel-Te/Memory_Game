import '../styles/header.css'

export default function Header(props){
    return(
        <>
            <header>
                <div className='description'>
                    <h1>Image Memorization</h1><br/>
                    <h4>Get ponits by clicking on images, but don't click on any more than one time</h4>
                </div>
                <div className='score'>
                    <h3>Score Board</h3>
                    <p>score: {props.score}</p>
                    <p>Best sore: {props.bscore}</p>
                </div>
            </header>
        </>
    )
}