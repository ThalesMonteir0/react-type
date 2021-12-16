import React from 'react';
import ProductsCard from '../Card';


const Board = (props) => {
    const {Products} = props.Products

    const renderCards = (produtos) =>{
        
        return(produtos.map(produto=> {
            return(<ProductsCard Products={produto}></ProductsCard>)   
        }
        ))
    }
    return (  
        <div className="row center"> 
            {renderCards(Products)}
        </div>
        

    );
}
 
export default Board;