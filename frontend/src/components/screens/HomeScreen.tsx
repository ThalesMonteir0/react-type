import React, { useEffect, useState } from 'react';
import Board from '../products/card/board/Board';
import axios, { AxiosResponse } from 'axios';



export interface productsInterface { 
    Products:{
        nome: string;
        preco: number;
        imageUrl: string;
        id: number;}
   
}

export default function HomeScreen() {
    const [Products, setProducts] = useState<productsInterface>();
    useEffect(() =>{
        axios.get('http://localhost:3001/')
            .then((response: AxiosResponse) =>{
                setProducts(response.data);
            }); 
    }, []);
   
 
    return(
        <Board  Products={Products!}/>
    )
}
