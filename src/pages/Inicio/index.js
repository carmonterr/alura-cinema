import Banner from 'componentes/Banner';
import Titulo from 'componentes/Titulo';
import React, { useEffect, useState } from 'react'
import styles from "./index.module.css";
import Card from "componentes/Card/index";


function Inicio (){
  const [videos, setVideos] = useState([]);
  useEffect(()=>{
    fetch("https://my-json-server.typicode.com/carmonterr/alura-cinema-api/videos")
    .then(response=> response.json())
    .then(data=>{
      setVideos(data);
    })
 
  },[]);
  return (
    <>
    
    <Banner img="home" color="#154580"/>

    <Titulo>
      <h1>En lugar par guardar tus video favorito</h1>
    </Titulo>

    <section className = {styles.container} >

      {videos.map((video) => {
        return <Card {...video} key={video.id} />;
      })}

    </section>
    
    </>
  );
}

export default Inicio;