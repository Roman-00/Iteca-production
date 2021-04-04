import React from 'react';
import { useState, useEffect } from 'react';


const MaketItem = (props) => {

    const {id, maket} = props;

    return <>
        {maket}
    </>

};

export { MaketItem };