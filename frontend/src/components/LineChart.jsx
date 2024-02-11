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
import axios from 'axios';


function Graph() {
    const predictiondata = async () => {
        try {
          const response = await axios.get('prediction_data.json');
          const data = response.data;
          // Process the data and proceed to the next steps
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    }

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