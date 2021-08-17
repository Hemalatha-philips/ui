import { EyeOutlined } from '@ant-design/icons';
import moment from 'moment';
export const tableColumns = (actionHandler?:any) => {
	return [
		{
			id:1,
			title: 'Language',
			dataIndex: 'language',
			width:'100px',
			key: 'language',
			
			render: text => <span>{text}</span>,
		},
		{
			id:2,
			title: 'Country',
			dataIndex: 'country',
			width:'100px',
			
			key: 'country',
		},
		{
			id:3,
			title: 'Version',
			dataIndex: 'version',
			width:'100px',
			
			key: 'version',
		},
		{
			id:4,
			title: 'User',
			width:'100px',
			key: 'user',
			
			dataIndex: 'user',

		},
		{
			id:5,
			title: 'Date',
			key: 'date',
			width:'120px',
			
			dataIndex: 'date',
			render:record => <span>{moment(record.date).format('Do, MMM YY')}</span>

		},
		{
			id:6,
			title: 'Rating',
			key: 'rating',
			
			dataIndex: 'rating',
			width:'80px'

		},
		{
			id:7,
			title: 'Review',
			key: 'review',
			width:'400px',
			
			dataIndex: 'review'

		},
		{
			id:8,
			title: 'English Translation',
			key: 'englishReview',
			
			dataIndex: 'englishReview',
			width:'400px'

		},
		{
			id:9,
			title: 'Action',
			width:'80px',
		
			key: 'action',
			render: (record) => (
				<EyeOutlined style={{cursor:'pointer'}} onClick={() => {
					if(actionHandler)actionHandler(record)
				}} />
			),
		},
	];
} 