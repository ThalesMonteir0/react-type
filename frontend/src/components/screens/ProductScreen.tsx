import React from 'react';
import { useParams } from 'react-router-dom';
import SpecificProduct from './SpecificProduct';

type blaID = {
    id: string
}

export default function ProductScreen(){
    const { id } = useParams<blaID>()
    const stringId = id as string

    return(
        <>
            <SpecificProduct stringId={stringId}/>
        </>
    )
   
    
}