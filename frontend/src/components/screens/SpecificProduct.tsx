import React, { useEffect,useState } from 'react';
import axios from 'axios';

interface propsIdInterface {
    stringId:string
}
interface productsInterfaceI{
    nome:string 
    preco:string 
    img:string 
    desc:string
}

export default function SpecificProduct (props:propsIdInterface) {
    const id = props.stringId
    const [Products, setProducts] = useState<productsInterfaceI>();
    useEffect(() =>{
        axios.get('http://localhost:3001/'+id)
            .then((response) =>{
                setProducts(response.data);
            }); 
    }, [id]);
    console.log(Products);
    
    return(
        <div>
            <div className='row top'>
                <div className='col-2'>
                    <img className='large' src={Products?.img}></img>
                </div>
                <div className='col-1'>
                    <ul>
                        <li>
                            <h1 className='large'>{Products?.nome}</h1>
                        </li>
                        <li>
                            <h1>preço: {Products?.preco}</h1>
                        </li>
                        <li>
                           <h1>Descrição:{Products?.desc}</h1> 
                        </li>
                    </ul>
                </div>
            </div>  
        </div>
    )

}