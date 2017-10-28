import React, { Component } from 'react';
import $ from 'jquery';

let projects;

export default class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: []
		};
	}

	componentDidMount() {
		$.ajax({
			url: "https://raw.githubusercontent.com/trangtmtran/portfolio-v2/master/public/projects.json",
			dataType: 'json',
			success: function(data) {
				this.setState({projects: data.projects});
			}.bind(this),
			error: function(xhr, status, err) {
				console.log("#GET ERROR", status, err.toString());
			}
		});
	}


	render() {
		
		projects = this.state.projects;
		console.log(projects);
		return (
			<div className="project-container">
				{projects.map(function(project, index) {
					return (
						<section key={index} id={project.id} className="card hoverable">
						<div className="card-image waves-effect waves-block waves-light">
				            <img className="activator image-custom" src={project.img} alt="project-thumbnail"/>
				          </div>
				          <div className="card-content">
				          <span className="card-title activator grey-text text-darken-4">{project.name}<i className="material-icons right">more_vert</i></span>
				            <div className="stack-icon">
				            	{project.usedSkills.map(function(skill, i) {
				            		return (
				            			<span key={i} className={skill.toLowerCase()}>{skill}</span>
				            		)
				            	})}
				            </div>
				            <p>
				              <a href={project.liveDemo} target="_blank" className="live">Live Demo</a>
				              <a href={project.github} target="_blank" className="github">Github Repo</a>
				            </p>
				          </div>
				          <div className="card-reveal">
				            <span className="card-title grey-text text-darken-4">{project.name}<i className="material-icons right">close</i></span>
				            <p>{project.description}</p>
				          </div>
						</section>
					)
				})}
			</div>
		)
	}
}
