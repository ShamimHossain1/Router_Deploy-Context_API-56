import React, { createContext } from 'react';
import Father from '../Components/Father/Father';
import Uncle from '../Components/Uncle/Uncle';
import Aunty from '../Components/Aunty/Aunty';
import './Grandpa.css'

export const Context = createContext()
const Grandpa = () => {
    return (
        <div className='grandpa mx-auto w-1/3 text-xl'>
            <h2 className='text-center'>Grandpa</h2>
            <Context.Provider value = {'pass data'}>
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