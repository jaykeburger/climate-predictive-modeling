import React, {useState} from 'react';
import {
    LineChart,
    ResponsiveContainer,
    Legend,
    Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
} from 'recharts'


function Graph() {
    const [predictiondata, setpredictiondata]=useState('')
    fetch('prediction_data.json')
        .then(response => response.json())
        .then(data => {
            // 'data' now contains the parsed JSON from the file
            console.log({data});
            setpredictiondata(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });

    return (
        <>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={predictiondata}>
                    <CartesianGrid />
                    <XAxis dataKey="year" interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="United States" stroke="purple" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}

export default Graph