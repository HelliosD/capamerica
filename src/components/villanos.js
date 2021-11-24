import React from "react";
import {useState,useEffect} from "react";





function Villian (){
    
    const h1 ={
        color: "#EAECEF"
    }
    
    const url = 'http://localhost:9000/api/villano';
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
            <figure class="text-center">
                <blockquote class="blockquote">
                    <p style={h1}>Villanos registrados</p>
                </blockquote>
            </figure>

            <div>


                <div class="row row-cols-1 row-cols-md-3 g-4 ">
                {!todos ? 'Cargando..' : todos.map((todo, index) => {
                                return (
                    <div class="col">
                        
                    
                        <div class="card h-100">
                        <img src="https://www.slashfilm.com/img/gallery/george-r-r-martins-marvel-villains/intro-import.jpg" alt="asdas" ></img>
                            
                                    
                            
                                    <div class="card-body">
                                        <h5 class="card-tittle">{todo.name}</h5>


                                        <li class="list-group-item">Super Poder: {todo.superPower}</li>
                                        <li class="list-group-item">Edad: {todo.age} años</li>
                                        
                                        
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

export default Villian;