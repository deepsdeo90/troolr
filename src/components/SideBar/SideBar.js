import React from 'react';
import classes from './SideBar.css';
const SideBar = (props)=>(
    <aside className={classes.SideBar}>
            <ul>
            <li>Home</li>
            <li>Wellness</li>
            <li>Consulting</li>
            <li>Automotive</li>
            <li>Events</li>
            <li>Tech</li>
            <li>Pets</li>
            <li>Education</li>
            </ul>
    </aside>
);
export default SideBar;