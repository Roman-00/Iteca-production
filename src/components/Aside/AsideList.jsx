import React from 'react';

import { AsideItem } from './AsideItem';

const AsideList = ({manager = []}) => {

    return <div className="sidebar__manager">
        {manager && [manager].map(el => (
            <AsideItem key={'00012'} {...el} />
        ))}
    </div>

};

export { AsideList };