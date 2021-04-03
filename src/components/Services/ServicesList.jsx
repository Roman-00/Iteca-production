import React from 'react';

import { ServicesItem } from './ServicesItem';


const ServicesList = ({list = []}) => {

    return <>
        <ol className="services__list">
            {list.map((el) => (
                <ServicesItem key={el.id} {...el} />
            ))}
        </ol>
    </>

};

export { ServicesList };