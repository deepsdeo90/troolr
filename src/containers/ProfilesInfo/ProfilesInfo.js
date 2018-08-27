import React,{Component} from 'react';
import classes from './ProfilesInfo.css';
import Auxi  from '../../HOC/Auxi';
import ProfileControls from '../../components/ProfileControls/ProfileControls';
import SideBar from '../../components/SideBar/SideBar';
import Profiles from '../../components/Profiles/Profiles';
import "whatwg-fetch";
class ProfilesInfo extends Component{

  constructor(props){
    super(props);
    this.state={
      profilesData:[]
    }
    
  }
  sortByRating=()=>{
    //get current state
    const currentState = [...this.state.profilesData];
    //apply sort by Rating
    currentState.sort((a,b)=>(b.averageRating-a.averageRating));

    this.setState({
      profilesData:currentState
    });
 }
 sortByViewCount=()=>{
   //get current state
   const currentState = [...this.state.profilesData];
   //apply sort by Rating
   currentState.sort((a,b)=>(b.views.length-a.views.length));

   this.setState({
     profilesData:currentState
   }); 
 }
 componentDidMount(){
  /*profiles.json located at /public/ folder */ 
  try{
    fetch("/profiles.json")
      .then(response =>  response.json())
      .then(userProfile => {
        //console.log(userProfile)
        this.setState({
          profilesData: userProfile
          //   isLoaded: true,
        });
      }
        
      );
  }catch(e){
    console.log(e);
  }
 }
 render(){
  return (
  <Auxi>
  <ProfileControls 
    sortByRating={this.sortByRating}
    sortByViewCount={this.sortByViewCount}
    profileCount={this.state.profilesData.length}
  ></ProfileControls>
  <main className={classes.MainContainer}>
              <div className={["container",classes.ResultGrid].join(" ")}>
                <Profiles 
                  profiles={this.state.profilesData}
                />
                <SideBar/>
              </div>
  </main>
  </Auxi>
  
  )
}
}
export default ProfilesInfo;