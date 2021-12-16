import React, { useEffect, useState } from 'react';
import Board from '../products/card/board/Board';
import axios from 'axios';

export default function HomeScreen() {
    const [Products, setProducts] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:3001/')
            .then((response) =>{
                setProducts(response.data);
            }); 
    }, []);
    return(
        <Board Products={{Products,setProducts}}/>
    )
}