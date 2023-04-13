import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import { Toaster, toast } from 'react-hot-toast';

const Home = () => {
    const tShirts = useLoaderData()
    const [cart, setCart] = useState([])
    // console.log(tShirt)
    const handleClick = (tShirt) =>{
        // console.log(tShirt);
        const exists = cart.find(ts=> ts._id ===tShirt._id  ); 
        if(exists){
            toast.error('Already added',{duration: 600})
            return;
        }
        else{
            toast.success('Added to the cart',{duration: 600})

            const newCart = [...cart, tShirt];
            setCart(newCart);
        }

    }

    const handleRemove = (id) =>{
        // console.log(id)
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining)
    }

    return (
        <div className='grid grid-cols-4 gap-14 mt-8 px-52'>

           <div className='grid grid-cols-3 col-span-3 gap-4'>

           {
                tShirts.map(tShirt=><TShirt
                key={tShirt._id}
                tShirt={tShirt}
                handleClick={handleClick}

                ></TShirt>)
            }
           </div>
           <div className=''>
            <Cart  
            cart={cart}
            handleRemove={handleRemove}
            ></Cart>
           </div>
           <Toaster
          

           
           ></Toaster>
        </div>
    );
};

export default Home;