import React from 'react';
import classes from './Header.css';

const  Header = (props)=>(
    <header>
            <div className={['container', classes.HeaderTop].join(' ')}>
            <img src={require('../../assets/img/logo-small.png')} alt="Troolr" className={classes.Logo} />
            </div>
            <div className={classes.HeaderStrip}>
                <div className="container">
                    <ul>
                        <li><i className="fas fa-globe-americas"></i>Locations</li>
                        <li><i className="fas fa-list-ul"></i>Categories</li>
                    </ul>
                </div>
            </div>
    </header>
);
export default Header;