import React from "react"
import { Table } from 'antd';

import "./Table.scss";

interface QTableProps {
	columns:any[];
	data:any[];
	loading:any;
}

export class Qtable extends React.Component<QTableProps> {
	render(){
		const { columns , data,loading } = this.props
		return(
			<Table 
			loading={loading}
			className="Q-table-root"
			bordered
			style={{width:'100%'}} 
			scroll={{ x: 1400 ,y:300}}
			columns={columns} dataSource={data} />
		)
	}
}