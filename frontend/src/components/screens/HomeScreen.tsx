import React, { useEffect, useState } from 'react';
import Board from '../products/card/board/Board';
import axios from 'axios'

type produto = {
    nome: string
    preco: number
    id: number
    imageUrl: string
    
}

export default function HomeScreen() {
    const [Products, setProducts] = useState<produto[]>([]);
    useEffect(() =>{
        axios.get('http://localhost:3001/')
            .then((response) =>{
                setProducts(response.data);
            }); 
    }, []);
    console.log(Products);
    
    
    return(
        <Board  Products={Products}/>
    )
}
