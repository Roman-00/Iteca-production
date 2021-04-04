import React from 'react';
import { useState, useEffect } from 'react';
import { getObjectData } from '../../api';

import { ServicesCalcList } from './ServicesCalcList';

const ServicesCalc = () => {

    const [object, setObject] = useState([]);

    useEffect(() => {
        getObjectData().then(data => {
            setObject(data.ObjectData)
        })
    }, [])

    return <>
        <ServicesCalcList object={object} />
    </>

};

export { ServicesCalc };