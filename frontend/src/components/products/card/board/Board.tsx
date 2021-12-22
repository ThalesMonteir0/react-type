import React from 'react';
import ProductsCard from '../Card';
import { productsInterface } from '../../../screens/HomeScreen'

interface propsInterface{
    Products: productsInterface
}

interface obInterface {
    Products:{ 
        nome: string
        preco: number
        id: number
        imageUrl: string}
    }
    



const Board = (props:propsInterface) => {
    
    const renderCards = (produtos:obInterface) =>{

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