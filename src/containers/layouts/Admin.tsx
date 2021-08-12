import { Row, Col } from 'antd';
import { QLineChart } from '../../components/Charts/LineChart/LineChart'
import { QStackedBarChart } from '../../components/Charts/StackedBarChart/StackedBarChart';

import { data as lineChartData } from "../../mocks/data/linechart.data"
import { data as stackedBarChartData } from "../../mocks/data/stackedbarchart.data"

// import "./Admin.scss"
export const Admin = () => {
	return (
		<div className="Q-admin-root">
		
			<Row>
      <Col span={12}>	<QLineChart data={lineChartData} /></Col>
      <Col span={12}><QStackedBarChart data={stackedBarChartData} /></Col>
    </Row>
		</div>
	)
}


