import React, { useContext } from 'react';
import { Context } from '../../Grandpa/Grandpa';

const Myself = () => {


    const received = useContext(Context)
    return (
        <div>
            <h2>My self</h2>
            <small>Got salami {received}</small>
        </div>
    );
};

export default Myself;