import Banner from "componentes/Banner";
import styles from "./Player.module.css"
import Titulo from "componentes/Titulo";
import { useParams } from "react-router-dom";
// import videos from "data/db.json";
import NotFound from "pages/NotFound";
import { useEffect, useState } from "react";

function Player(){
const [video,setVideo]= useState([])
    
    const parametros = useParams()
    useEffect(()=>{
        fetch(`https://my-json-server.typicode.com/carmonterr/alura-cinema-api/videos?id=${parametros.id}`)
            .then(response=>response.json())
            .then(data => {
                setVideo(...data); 

              // Actualiza el estado con la información del video
              })
             
    },[parametros.id]);

//    const video = videos.find(video => video.id === Number(parametros.id))
    console.log(video);
    if (!video)return <NotFound/>

    return(
        <>
    <Banner img="player" color="#58B9AE"/>
     <Titulo>
        <h1>P  L  A  Y  E  R</h1>
     </Titulo>
     <section className={styles.container}> 
     <iframe width="80%" height="80%"
      src={video.link}
       title={video.Titulo}
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     referrerpolicy="strict-origin-when-cross-origin" 
     allowfullscreen></iframe>
     </section>
        </>

    )
}
export default Player;