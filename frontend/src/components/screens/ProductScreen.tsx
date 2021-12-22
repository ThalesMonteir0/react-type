import React from 'react';
import { useParams } from 'react-router-dom';
import SpecificProduct from './SpecificProduct';

type idInterface = {
    id: string
}

export default function ProductScreen(){
    const { id } = useParams<idInterface>()
    const stringId = id as string

    return(
        <>
            <SpecificProduct stringId={stringId}/>
        </>
    )
   
    
}