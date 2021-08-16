import { Col, Collapse, Row } from 'antd';
import { RECORD_SIZES } from '../../utils/record-sizes';
import { QSelect } from '../Form/Select';

import "./TableHeader.scss"

const { Panel } = Collapse;



interface QTableHeaderProps {
	title:string;
	selectedRecordSize: {id:number, name:number};
	selectedColumns:any[];
	columns:any[];
	onRecordSizeSelect:(value) => void
}

export const QTableHeader:React.FC<QTableHeaderProps> = ({title,onRecordSizeSelect, selectedRecordSize,selectedColumns,columns}) => {

	

	const callback = (key) => {
		console.log(key);
	}

	const onSelectSize = value => {
		const size = RECORD_SIZES.find(item => item.id === value)
		if(size)
			onRecordSizeSelect(size.name)
	}

	const onSelectColumns = value => {
		console.log("columns " , value)
	}
	return (
		<Collapse className="Q-table-header-root"  defaultActiveKey={['1']} onChange={callback}>
    <Panel showArrow={false} header={title} key="1">
      <Row>
				<Col span={3}><span className="Q-table-header-root__panel__label">Show:</span></Col>
				<Col span={4}><QSelect width={200} selected={selectedRecordSize} placeholder={"No:of rows"} items={RECORD_SIZES} onSelect={onSelectSize}/></Col>
				<Col span={3}><span className="Q-table-header-root__panel__label">Entries:</span></Col>
				<Col span={4}><QSelect width={300} selected={selectedColumns} placeholder={"Select columns"} items={columns} onSelect={onSelectColumns}/></Col>
			</Row>
    </Panel>

  </Collapse>
	)
}


