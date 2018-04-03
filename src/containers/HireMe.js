import React, { Component } from 'react';
import HireMePic from '../resources/HireMePic.jpg';
import home from "../resources/icons/home.svg";
import github from "../resources/icons/github-square.svg";
import mail from "../resources/icons/envelope-square.svg";

export default class HireMe extends Component {
	render() {
		return (
			<div className="moviePage">
				<div className="movieThumbnail">
					<img
						src={HireMePic}
					/>
				</div>

				<div className="moviePageContent">
					<h1>Trevor Seibel: Judgement Day</h1>
					<h3>"The Right Man for the Job"</h3>
					<h4>Hiring Date: Today</h4>
					<p className="moviePageOverview">
						On the mean streets of Ottawa, movie fan Trevor Seibel (as himself) takes the starring role in his journey to become a Web Developer. Watch as he defies both tradition and his sleep schedule in his journey to produce exceptional websites.
					</p>

					<h2>Skills</h2>
						<span className="genreTag">React</span>
						<span className="genreTag">RESTful API's</span>
						<span className="genreTag">JavaScript</span>
						<span className="genreTag">HTML</span>
						<span className="genreTag">CSS</span>
						<span className="genreTag">Woodworking</span>
						<span className="genreTag">And Much More...</span>
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