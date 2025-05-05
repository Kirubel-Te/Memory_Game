import Header from './components/header'
import './index.css'

import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';


import Card from './components/Card'
import { useEffect, useState } from 'react'


export default function App(){

  const[Images,SetAllImg] = useState([])
  const[gameWon, setGameWon] = useState(false)

  const [Score,SetScore] = useState([])
  const [BScore,setBScore] = useState(0)
  let scoreLength
  function CardClick(id){
    SetScore(prev => {
      const isDuplicate = prev.includes(id);
      const newScore = isDuplicate ? [] : [...prev, id];
  
      if (isDuplicate && BScore < prev.length) {
        setBScore(prev.length);
      }
      
  
      return newScore;
    })
    SetAllImg(prev => prev.sort(() => 0.5 - Math.random()))
  }

  useEffect(() => {
    if (Score.length === 10) {
      setGameWon(true);
    }
  }, [Score]);
  

  function handleNew(){
    setGameWon(false)
    SetScore([])

  }

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => SetAllImg(data.data.memes.slice(0,10)))
  },[])
  
  const imgLink = Images.map(img => <Card image={img.url} key={img.id} imgName={img.name} id={img.id} click={()=>CardClick(img.id)}/>)
  const { width, height } = useWindowSize();

  return(
    <>
      {gameWon && <Confetti
        width={width}
        height={height}
        numberOfPieces={500}
        gravity={0.3}
        recycle={false}
      />}
      <Header score={Score.length} bscore={BScore}/>
      <section className='img-sec'>
        {!gameWon ? imgLink : 
          <div className='Won'>
            <h1>You Have Won The Game</h1>
            <button onClick={handleNew}>New Game</button>
          </div>}
      </section>
    </>
  )
}