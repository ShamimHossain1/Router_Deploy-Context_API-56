import { Button } from 'flowbite-react';
import React from 'react';

const TShirt = ({tShirt, handleClick}) => {
    // console.log(tShirt)

    const {picture, name, price}=tShirt;
    return (
        <div className='border border-blue-300 rounded-lg p-3 flex flex-col gap-3'>
            <img className=' w-2/3 h-60 p-2 rounded-lg' src={picture} alt="" />
            <h2>{name}</h2>
            <p>${price}</p>
           <Button onClick={()=>handleClick(tShirt)} className='mt-auto'>Buy Now</Button>
        </div>
    );
};

export default TShirt;