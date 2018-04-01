import React, { Component } from 'react';
import tightRope from './tightRope.jpg';
import home from "./icons/home.svg";
import github from "./icons/github-square.svg";
import mail from "./icons/envelope-square.svg";

export default class HireMe extends Component {
	render() {
		return (
			<div className="moviePage">
				<div className="movieThumbnail">
					<img
						src={tightRope}
					/>
				</div>

				<div className="moviePageContent">
					<h1>Trevor Seibel: Man on Wire</h1>
					<h3>"The Right Man for the Job"</h3>
					<h4>Hiring Date: Today</h4>
					<p className="moviePageOverview">
						Movie Fan Trevor Seibel (as himself) takes the starring role in his journey to become a Web Developer. Watch as he defies both tradition and his sleep schedule in his journey to produce exceptional websites.
					</p>

					<h2>Genres</h2>
						<span className="genreTag">Motivated</span>
						<span className="genreTag">Self-taught</span>
						<span className="genreTag">Fast Learner</span>
					<div>	
					<a href="https://teebl.github.io" title="Portfolio" class="moviePageIconLink"><img src={home} class="moviePageIcon" /></a>
					<a href="https://www.github.com/teebl/" title="Github Page" class="moviePageIconLink"><img src={github} class="moviePageIcon" /></a>
					<a href="#" class="moviePageIconLink"><img src={mail} class="moviePageIcon" /></a>
					</div>
				</div>
			</div>
			)
	}
}