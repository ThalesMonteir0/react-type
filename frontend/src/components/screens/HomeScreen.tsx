import React, { useEffect, useState } from 'react';
import Board from '../products/card/board/Board';
import axios, { AxiosResponse } from 'axios';

interface Products {
    products:{
        nome: string;
        preco: string;
        imageUrl: string;
        id: string;
    }
}

export default function HomeScreen() {
    const [Products, setProducts] = useState<Products>();
    useEffect(() =>{
        axios.get('http://localhost:3001/')
            .then((response: AxiosResponse) =>{
                setProducts(response.data);
            }); 
    }, []);
    const stringProduct = Products as unknown
    const stringProduct2 = stringProduct as string
    
    return(
        <Board  Products={stringProduct2}/>
    )
}