import React from 'react';
import { useParams } from 'react-router-dom';
import SpecificProduct from './SpecificProduct';


export default function ProductScreen(){
    const {id} = useParams()

    return(
        <>
            <SpecificProduct id={id}/>
        </>
    )
   
    
}