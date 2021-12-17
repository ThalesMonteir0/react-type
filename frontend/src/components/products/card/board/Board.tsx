import React from 'react';
import ProductsCard from '../Card';

interface props {
    Products:{}
}

const Board = (props:props) => {

    const renderCards = (produtos) =>{
        
        return(produtos.map(produto=> {
            return(<ProductsCard Products={produto}></ProductsCard>)   
        }
        ))
    }
    return (  
        <div className="row center"> 
            {renderCards(props.Products)}
        </div>
        

    );
}
 
export default Board;