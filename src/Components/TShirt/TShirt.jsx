import React from 'react';

const TShirt = ({tShirt}) => {
    // console.log(tShirt)

    const {picture, name, price}=tShirt;
    return (
        <div className='border border-blue-300 rounded-lg p-3'>
            <img className='h-60 p-2 rounded-lg' src={picture} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <button className='btn'>Buy Now</button>
        </div>
    );
};

export default TShirt;