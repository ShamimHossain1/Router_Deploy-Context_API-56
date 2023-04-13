import React, { createContext, useState } from 'react';
import Father from '../Components/Father/Father';
import Uncle from '../Components/Uncle/Uncle';
import Aunty from '../Components/Aunty/Aunty';
import './Grandpa.css'
import { Button } from 'flowbite-react';

export const Context = createContext()
const Grandpa = () => {
    const [money, setMoney] = useState(0)
    const sentMoney = (salami) => {
        setMoney(money+salami);
    }
    return (
        <div className='grandpa mx-auto w-2/3 text-center text-xl'>
            <h2 className='text-center'>Grandpa</h2>
            <Button onClick={()=>sentMoney(1000)} className='mx-auto mt-5'>Send Eid 1000 Salami</Button>
            <Button onClick={()=>sentMoney(2000)} className='mx-auto mt-5'>Send Eid 2000 Salami</Button>
            <Context.Provider value={[money]}>
                <section className='flex justify-center'>
                    <Father></Father>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </section>
            </Context.Provider>
        </div>
    );
};

export default Grandpa;