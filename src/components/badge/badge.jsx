import React from 'react';
import classNames from 'classnames';

import './badge.scss';

function Badge({ color }) {
    return (
        <>
            <i
                className={classNames('badge', { [`badge--${color}`]: color }, classNames)}
            ></i>
        </>
    );
}

export default Badge;
