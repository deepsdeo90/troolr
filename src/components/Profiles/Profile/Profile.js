import React from 'react';
import classes from './Profile.css';

const  getRatingStars = (avgrating)=>{
           //round to nearest half
           avgrating = Math.round(avgrating*2)/2;
           let rating = [];
             // Append all the filled whole stars
           for (var i = avgrating; i >= 1; i--)
              rating.push(<span key={i} className={[classes.RatingStar,classes.FullStar].join(' ')}></span>);
         
           // If there is a half a star, append it
           if (i === .5) rating.push(<span  key={i} className={[classes.RatingStar,classes.HalfStar].join(' ')}></span>);
         
           // Fill the empty stars
           for (let i = (5 - avgrating); i >= 1; i--)
             rating.push(<span  key={5+i} className={[classes.RatingStar,classes.EmptyStar].join(' ')}></span>);
     return rating;      
}
const Profile = (props)=>{
     const avgrating = props.profile.averageRating;
     const rating = getRatingStars(avgrating); 
     
    return (<article>
    <img src={props.profile.profile_picture} alt="ULTIMATE CHEESY CRUST PIZZA" />
    <div className={classes.Profile}>
            <h3>{props.profile.name}</h3>
            <div className={classes.Author}>{props.profile.title}</div>
            <div className={classes.Location}>{props.profile.address.city}, {props.profile.address.state}</div>
            <div className={classes.ProfileBottom}>
                    <div className={classes.RatingBox}>
                    {rating}   
                            
                    </div>       
                <button>view profile</button>
            </div>
    </div>
        
        </article>)
 }
    

export default Profile;
