import React, { useContext } from 'react';
import { Context } from '../../Grandpa/Grandpa';

const Myself = () => {


    const received = useContext(Context)
    return (
        <div>
            <h2>My self {received}</h2>
        </div>
    );
};

export default Myself;