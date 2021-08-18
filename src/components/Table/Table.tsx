import React from "react"
import { Table } from 'antd';

import "./Table.scss";

interface QTableProps {
	columns:any[];
	data:any[];
	loading:any;
	total:number;
	pageSize:number;
	currentPage:number;
	onPageChange:(p:number) => void

}

export class Qtable extends React.Component<QTableProps> {

	render(){
	
		const { columns , data,loading,total,pageSize,currentPage,onPageChange } = this.props
		return(
			<Table 
			pagination = {{total,pageSize,onChange:onPageChange,current:currentPage}}
			loading={loading}
			className="Q-table-root"
			bordered
			style={{width:'100%'}} 
			scroll={{ x: 1400 ,y:300}}
			columns={columns} dataSource={data} />
		)
	}
}