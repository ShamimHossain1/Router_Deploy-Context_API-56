import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';

const Home = () => {
    const tShirts = useLoaderData()
    // console.log(tShirt)
    return (
        <div className='grid grid-cols-4 gap-3 mt-8 px-52'>

           <div className='grid grid-cols-3 col-span-3 gap-4'>

           {
                tShirts.map(tShirt=><TShirt
                key={tShirt._id}
                tShirt={tShirt}
                ></TShirt>)
            }
           </div>
           <div className=''>
            <Cart></Cart>
           </div>
        </div>
    );
};

export default Home;