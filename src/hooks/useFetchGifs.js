import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs'


//en este archivo hicimos un custom hook que hace el trabajo pesado, primero recibe la category como parametro(que fue lo que desestructuramos en GifGrid.js) 
//usamos el useState para decirle cuando queremos que renderize el componente
//usamos el data que serian los gifs y el loading mientras cargan
//usamos el useEffect para decirle que solo haga esto cada vez que la categoria cambie

export const useFetchGifs = ( category ) => {
  
    const [state, setState] = useState({
        data: [],
        loading: true
    });

  
    useEffect( () => {

        getGifs( category ) //hace la peticion http
        .then( imgs => {
        
                
                setState({
                    data: imgs,
                    loading: false
                });


        })


    }, [ category ]) //con esto solo se dispara cuando cambiamos la categoria


  

    return state; // { data[], loading: true }

}


