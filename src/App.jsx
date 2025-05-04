import Header from './components/header'
import './index.css'

import Card from './components/Card'
import { useEffect, useState } from 'react'


export default function App(){

  const[Images,SetAllImg] = useState([])

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => SetAllImg(data.data.memes.slice(0,10)))
  })
  
  const imgLink = Images.map(img => <Card image={img.url} key={img.id} imgName={img.name}/>)

  return(
    <>
      <Header/>
      <section className='img-sec'>
        {imgLink}
      </section>
    </>
  )
}