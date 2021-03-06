import React, { Component } from 'react';
import OverviewPage from './OverviewPage';
import FrontView from './FrontView';
import './Home.css';

class Home extends Component {
  render() {
  	const projects = this.props.data
  	const view = projects.map(project=>{
  		return( <FrontView {...project} /> )
  	});
    return (
      <div className="Home">
        <div className="profile">
        	<figure><img width = "150px" src = "me.jpg"/></figure>
        	<p className="About">I’m a programmer, game designer, and writer who likes to find creative ways to combine these three disciplines. Many of my projects explore themes of origin and movement, while others are simply experimental exercises in game design. I am also passionate about education and spent my entire senior year working as a peer tutor for underclassmen in my major.</p>
        </div>
        
        <div className="allProjects">
        
        	{view}
        </div>
      </div>
    );
  }
}

export default Home;
