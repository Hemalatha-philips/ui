import { Line } from "react-chartjs-2";

export const QLineChart = ({data}) => {
	return (
		<div className="Q-line-chart-root" style={{height:'100%'}}>
			 <Line data={data} />
		</div>
	)
}


