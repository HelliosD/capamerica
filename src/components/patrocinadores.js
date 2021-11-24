import React from "react";
import {useState,useEffect} from "react";

function Partner (){
    const h1 ={
        color: "#EAECEF"
    }
    
    const url = 'http://localhost:9000/api/patrocinadores';
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON)
    }
    useEffect(() => {
        fetchApi()
    }, [])
    return(

        <div className="Container">
             <div className="Container">
            <figure class="text-center">
                <blockquote class="blockquote">
                    <p style={h1}>Patrocinadores actuales</p>
                </blockquote>
            </figure>

            <div>


                <div class="row row-cols-1 row-cols-md-3 g-4 ">
                {!todos ? 'Cargando..' : todos.map((todo, index) => {
                                return (
                    <div class="col">
                    
                        <div class="card h-100">
                            <img src="https://1000marcas.net/wp-content/uploads/2020/03/CAT-Emblema.jpg" class="card-img-top" alt="asdas"></img>
                            
                                    <div class="card-body">
                                        <h5 class="card-tittle">{todo.name}</h5>


                                        <li class="list-group-item">Tipo de contrato: {todo.TypeOfContract}</li>
                                        <li class="list-group-item">Duracion: {todo.Duration} años</li>
                                        <li class="list-group-item">Valido hasta: {todo.finishDate} </li>
                                        <li class="list-group-item">Telefono: {todo.phone} </li>
                                        
                                        
                                    </div>
                                    
                        </div>


                    </div>
                    );
                
                })}
                </div>





            </div>




        </div>



        </div>

    );
}

export default Partner;