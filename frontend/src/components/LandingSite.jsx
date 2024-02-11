import React from 'react';
import sass from '../styles/LandingSite.sass';
import logo from '../assets/Conoco-logo.png'

function LandingSite() {
	return (
		<div className="LandingSite">
			<div className="logo">predictify</div>
			<div className="firstText">
				More than a <span className="dataSpan">data</span>{' '}
				<span className="visualizerSpan">visualizer</span>
			</div>
			<div className="secondText">
				<span className="subSecondText">Predict the </span>
				<span class="row">
					<span class="col-md-12 text-center">
						<span class="animate-charcter"> Future</span>
					</span>
				</span>
			</div>
			<div className="wrap">
				<button className="button" onClick={(()=>document.location = '/app')}>
					Try it out
				</button>
			</div>
			<div>
				<img width={230} height={110} src={logo}/>
			</div>
		</div>
	);
}

export default LandingSite;
