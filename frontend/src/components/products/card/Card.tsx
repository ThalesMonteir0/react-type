import React from 'react';


interface propsI{
 Products:{
    nome:string;
    imageUrl:string;
    id: number;
    preco:number
 }  
    
}

const ProductsCard = (props:propsI) => {
    const {Products} = props
    return(
        <div className="card">
            <a href= {`product/${Products?.id}`}>
                <img className="medium" src={Products.imageUrl} alt="b"/>
            </a>
            <div className="card-body">
                <a href= {`product/${Products.id}`}>
                    <h2>{Products.nome}</h2>
                </a>
            </div>
            <div className="price">
               R$ {Products.preco}
            </div>    
         </div>
      )  

}

export default ProductsCard;