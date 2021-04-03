import React from 'react';
import { useState, useEffect } from 'react';
import { getInfoManager } from '../api';

import { AsideList } from '../components/Aside/AsideList';

const Aside = () => {

    const [manager, setManager] = useState([]);

    useEffect(() => {
        getInfoManager().then(data => {
            setManager(data.ManagerData)
        })
    }, [])

    return <>
         <AsideList manager={manager}/>
    </>

};

export { Aside };