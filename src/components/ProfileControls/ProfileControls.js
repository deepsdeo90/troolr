import React  from 'react';
import classes from './ProfileControls.css';
import SelectBox from '../../containers/SelectBox/SelectBox';

const ProfileControls = (props)=>(
    <div className={["container",classes.PrflCntrHeader].join(" ")}>
    <h2>Freelancer in California, USA <span>({props.profileCount} Results)</span></h2>
        <div className={classes.PrflCntrSortOpt}> 
            <SelectBox 
                sortByRating={props.sortByRating}
                sortByViewCount={props.sortByViewCount}
            />
    </div>
    </div>
)

export default ProfileControls;