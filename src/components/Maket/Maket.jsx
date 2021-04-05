import React from 'react';
import { useState, useEffect } from 'react';
import { getObjectData } from '../../api';

import { MaketList } from './MaketList';

const Maket = () => {

    const [object, setObject] = useState([]);

    useEffect(() => {
        getObjectData().then(data => {
            setObject(data.ObjectData)
        })
    }, [])

    return <>
        <MaketList key={'0'} object={object} />
    </>

};

export { Maket };