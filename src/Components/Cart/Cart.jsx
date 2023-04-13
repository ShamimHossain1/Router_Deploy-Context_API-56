import { Button } from 'flowbite-react';
import React from 'react';

const Cart = ({ cart, handleRemove }) => {

    // if else condition
    let message;
    if (cart.length === 0) {
        message = <p>Please add some products</p>
    }
    else {
        message = <p>Thank your for wasting your money</p>
    }
    return (
        <div>
            {/* Conditional css  */}
            <h2 className={`${cart.length === 0 ? 'bg-red-500' : 'bg-green-500'} text-white text-center rounded-xl py-2 mb-10 text-xl font-bold`}>Order Summary {cart.length}</h2>
            {message}

            {/*  ternary operator : condition ? 'for true : false */}
            {cart.length > 2 ? <span>Please Buy more</span> : <span>You Poor</span>}
            {
                cart.map(tShirt => <p className='mb-5 mt-5 text-lg' key={tShirt._id}>{tShirt.name} <button onClick={() => handleRemove(tShirt._id)} className='ml-4 px-2 font-bold  text-red-700 border-2 rounded'>X</button></p>)
            }

            {/*  logical && : if the condition is true this will appear */}
            {
                cart.length == 3 && <p>You Boroloxx</p>

            }

            {/* logical || if the condition is false thn this will appears */}


            {
                cart.length !== 3 || <h3>4 ta to hoilo nah</h3>
            }



        </div>

    );
};

export default Cart;