import React, { useState } from 'react';
import './list.scss';
import removeSvg from '../../assets/img/remove.svg';
import classNames from 'classnames';

function List({ items, isRemovable, handleOpenPopup }) {

    return (
        <ul className="list">
            {items.map((item) => (
                <li
                    key={item.name}
                    className={classNames(item.className, { 'active': item.active })}
                    onClick={handleOpenPopup}
                >
                    <i>{item.icon ? item.icon : <i className={`badge badge--${item.color}`}></i>}</i>
                    <span>{item.name}</span>
                    <img
                        className="list__remove-icon"
                        src={removeSvg}
                        alt="Remove icon"
                    />
                </li>
            ))}
        </ul>
    );
}


export default List;