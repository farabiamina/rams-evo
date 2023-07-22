import React from 'react';
import useNavigation from './useNavigation';

const Navigation = (props) => {
    const {handleAnchorLinkClick} = useNavigation();

    return (
        <nav {...props}>
            <a className='link' onClick={(e) => handleAnchorLinkClick(e, "#about")}>О проекте</a>
            <a className='link' onClick={(e) => handleAnchorLinkClick(e, "#advantages")}>Преимущества</a>
            <a className='link' onClick={(e) => handleAnchorLinkClick(e, "#location")}>Расположение</a>
            {/* <a className='link' href="#">Чистовая отделка</a> */}
            <a className='link' onClick={(e) => handleAnchorLinkClick(e, "#all-in-one")}>All-in-One</a>
        </nav>
    )
}

export default Navigation