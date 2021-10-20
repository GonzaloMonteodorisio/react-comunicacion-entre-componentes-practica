import React from 'react'
import Comentario from './components/Comentario'
import Saludo from './components/Saludo'

function App() {
  return (
    <div className="container mt-5">
        <h1>Proyecto desde cero</h1>
        <Saludo persona='Ignacio' edad={30} />
        <Saludo persona='Pedro' edad={28} />
        <Saludo persona='Juan' edad={33} />
        <hr />
        <h3>Cajita de comentarios</h3>
        <Comentario 
            urlImagen="https://picsum.photos/64"
            persona="Ignacio"
            texto="wwwwwwwwwwwwwwwwwwwwwww"
        />
        <Comentario 
            urlImagen="https://picsum.photos/64"
            persona="Pedro"
            texto="nnnnnnnnnnnnnnnnnnnnnnnnnn"       
        />
        <Comentario 
            urlImagen="https://picsum.photos/64"
            persona="Juan"
            texto="yyyyyyyyyyyyyyyyyyyyyyyyyyy"        
        />
    </div>
  );
}

export default App;
