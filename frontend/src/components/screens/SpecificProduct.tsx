import React, { useEffect,useState } from 'react';
import axios from 'axios';
interface Props {
    id:string
}
interface Products {
    nome:string 
    preco: string 
    desc: string 
    img: string
}

export default function SpecificProduct (props:Props) {
    const id = props.id
    const [Products, setProducts] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:3001/'+id)
            .then((response) =>{
                setProducts(response.data);
            }); 
    }, [id]);
    return(
        <div>
            <div className='row top'>
                <div className='col-2'>
                    <img className='large' src={Products.img}></img>
                </div>
                <div className='col-1'>
                    <ul>
                        <li>
                            <h1 className='large'>{Products.nome}</h1>
                        </li>
                        <li>
                            <h1>preço: ${Products.preco}</h1>
                        </li>
                        <li>
                           <h1>Descrição:{Products.desc}</h1> 
                        </li>
                    </ul>
                </div>
            </div>  
        </div>
    )

}