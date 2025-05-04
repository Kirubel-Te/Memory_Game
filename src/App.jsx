import Header from './components/header'
import './index.css'

import Card from './components/Card'
import { useEffect, useState } from 'react'


export default function App(){

  const[Images,SetAllImg] = useState([])

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
    });
    SetAllImg(prev => prev.sort(() => 0.5 - Math.random()))
  }
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => SetAllImg(data.data.memes.slice(0,10)))
  },[])
  
  const imgLink = Images.map(img => <Card image={img.url} key={img.id} imgName={img.name} id={img.id} click={()=>CardClick(img.id)}/>)

  return(
    <>
      <Header score={Score.length} bscore={BScore}/>
      <section className='img-sec'>
        {imgLink}
      </section>
    </>
  )
}