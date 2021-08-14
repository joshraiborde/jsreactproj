import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    return (
        <ul>
            <li> <Link to='/'>Home</Link></li>
            <li> <Link to='/installed'>Installed</Link></li>
            <li> <Link to='/redundant'>Redundant</Link></li>
            <li> <Link to='/slowest'>Slowest</Link></li>
        </ul>
    );
}
export default NavBar