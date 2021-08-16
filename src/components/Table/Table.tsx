import React from "react"
import { Table } from 'antd';

interface QTableProps {
	columns:any[];
	data:any[]
}

export class Qtable extends React.Component<QTableProps> {
	render(){
		const { columns , data } = this.props
		return(
			<Table style={{width:'100%'}} 
			scroll={{ x: 600 ,y:300}}
			columns={columns} dataSource={data} />
		)
	}
}