import React from 'react';

interface Products{
    nome:string 
    preco:string 
    imageUrl:string 
    id:string 
}

const ProductsCard = (props:Products) => {
    return(
        <div className="card">
            <a href= {`product/${props?.id}`}>
                <img className="medium" src={props?.imageUrl} alt="b"/>
            </a>
            <div className="card-body">
                <a href= {`product/${props?.id}`}>
                    <h2>{props?.nome}</h2>
                </a>
            </div>
            <div className="price">
                {props?.preco}
            </div>    
         </div>
      )  

}

export default ProductsCard;