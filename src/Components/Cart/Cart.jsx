import { Button } from 'flowbite-react';
import React from 'react';

const Cart = ({cart, handleRemove}) => {

    let message;
    if (cart.length===0){
         message = <p>Please add some products</p>
    }
    return (
        <div>
            <h2 className='mb-10 text-xl font-bold'>Order Summary {cart.length}</h2>
            {message}
            {
                cart.map(tShirt => <p className='mb-5 text-lg' key={tShirt._id}>{tShirt.name} <button onClick={()=>handleRemove(tShirt._id)} className='ml-4 px-2  text-red-700 border rounded'>X</button></p>)
            }
        </div>
    );
};

export default Cart;