import React from 'react';
import ProductsCard from '../Card';

type produto = {
    nome: string
    preco: number
    id: number
    imageUrl: string
    
}

interface obInterface {
     Products: produto[]
    }
    
const Board = (props:obInterface) => {
    console.log(props);
    
    
    const renderCards = (data:obInterface) =>{
        const produtos = data.Products

        return(produtos.map(produto=> {
            return(<ProductsCard Products={produto}></ProductsCard>)
        }
        ))
    }
    return (  
        <div className="row center"> 
            {renderCards(props)}
        </div>
        

    );
}
 
export default Board;