import React, { Component } from "react";
import SimpleSlider from "../components/SimpleSlider";

export default class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="Slider">
					<SimpleSlider category="New Releases" apiUrl={this.props.defaultApiPaths.newReleasesUri} />
					<SimpleSlider category="Top Rated" apiUrl={this.props.defaultApiPaths.topRatedUri} />
					<SimpleSlider category="Coming Soon" apiUrl={this.props.defaultApiPaths.comingSoonUri} />
				</div>
			</div>
		);
	}
}
