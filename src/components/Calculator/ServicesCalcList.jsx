import React from 'react';

import { ServicesCalcItem } from './ServicesCalcItem';


const ServicesCalcList = ({object = []}) => {

    return <>
        {object && [object].map((el) => (
            <ServicesCalcItem key={'001'} {...el} />
        ))}

    </>

};

export { ServicesCalcList };