import React, { useState } from 'react';
import data from './prediction_data';
import {
	LineChart,
	ResponsiveContainer,
	Legend,
	Tooltip,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
} from 'recharts';

function Graph() {
	//  const [predictiondata, setpredictiondata]=useState('')
	//  fetch('./prediction_data.json')
	//      .then(response => response.json())
	//      .then(data => {
	//          // 'data' now contains the parsed JSON from the file
	//          console.log({data});
	//          setpredictiondata(data);
	//      })
	//      .catch(error => {
	//          console.error('Error fetching JSON:', error);
	//      });

	return (
		<>
			<ResponsiveContainer width="100%" aspect={3}>
				<LineChart data={data}>
					<CartesianGrid />
					<XAxis dataKey="year" interval={'preserveStartEnd'} />
					<YAxis></YAxis>
					<Legend />
					<Tooltip />
					<Line
						dataKey="US prediction"
						stroke="white"
						fillOpacity={0.3}
						// activeDot={{ r: 8 }}
					/>
					<Line
						dataKey="UK prediction"
						stroke="yellow"
						fillOpacity={0.3}
						// activeDot={{ r: 8 }}
					/>
					<Line
						dataKey="Canada prediction"
						stroke="orange"
						fillOpacity={0.5}
						// activeDot={{ r: 8 }}
					/>
					<Line
						dataKey="Norway prediction"
						stroke="red"
						fillOpacity={0.2}
						// activeDot={{ r: 8 }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</>
	);
}

export default Graph;
