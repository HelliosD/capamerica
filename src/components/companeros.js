import React from "react";
import { useEffect, useState } from "react";

function Teammates() {
    const h1 ={
        color: "#EAECEF"
    }
    const url = 'http://localhost:9000/api/companeros';
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON)
    }
    useEffect(() => {
        fetchApi()
    }, [])
    return (

        <div className="Container">
            <figure class="text-center">
                <blockquote class="blockquote">
                    <p style={h1}>Compañeros registrados</p>
                </blockquote>
            </figure>

            <div>


                <div class="row row-cols-1 row-cols-md-3 g-4 ">
                {!todos ? 'Cargando..' : todos.map((todo, index) => {
                                return (
                    <div class="col">
                    
                        <div class="card h-100">
                            <img src="https://imagenes.20minutos.es/files/article_amp/uploads/imagenes/2021/01/12/vengadores-marvel.jpeg" class="card-img-top" alt="asdas"></img>
                            
                                    <div class="card-body">
                                        <h5 class="card-tittle">{todo.name}</h5>


                                        <li class="list-group-item">Super Poder: {todo.superpower}</li>
                                        <li class="list-group-item">Aliado desde: {todo.mateSince}</li>
                                        <li class="list-group-item">Telefono: +1 {todo.phone}</li>
                                        
                                    </div>
                                    
                        </div>


                    </div>
                    );
                
                })}
                </div>





            </div>


        </div>

    );
}

export default Teammates;