
import { Col, Row } from 'antd';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts, listReviews } from '../../actions/products.action';
import { QCard } from '../../components/Card/Card';
import { QTitle } from '../../components/Form/Form';
import { QSelect } from '../../components/Form/Select';
import QLoader from '../../components/Loader/Loader';
import { QTab } from '../../components/Tab/Tab';
import { Qtable } from '../../components/Table/Table';
import { QTableHeader } from '../../components/TableHeader/TableHeader';
import { ProductReviewsState, ProductsState } from '../../models/products.state.model';
import { deviceTabLabels } from '../../models/tab.model';
import { RootState } from '../../store';
import { tableColumns } from '../../utils/columns/table.columns';
import { RECORD_SIZES } from '../../utils/record-sizes';








const DEFAULT_LIMIT = 1;
enum DEVICE {ANDROID = 'Android', IOS = 'iOS'}
// import "./Admin.scss"
export const Admin = () => {

	//state variables for the reviews grid
 const [offset,setOffset] = useState(1)
 const [limit,setLimit] = useState(() => DEFAULT_LIMIT)
 const [selectedDevice,setSelectedDevice] = useState(() => DEVICE.ANDROID)

 const [selectedProduct , setSelectedProduct] =useState<any>(undefined)
 const [selectedColumns ,setSelectedColumns] = useState(() => tableColumns())


	const dispatch = useDispatch()
	const productsState:ProductsState = useSelector((state:RootState) => state.products)
	const reviewsState:ProductReviewsState = useSelector((state:RootState) => state.productReviews)
	const {   products } = productsState
	const { product } = reviewsState


	

	const getTablabels  = useMemo(deviceTabLabels, [])

	const getColumns = useMemo(() => tableColumns(),[])
	const getData = useMemo(() =>{
		const start = (offset-1) * limit
		const end = start + limit
	
		return product ? product.reviews.slice(start,end):[]
	}  , [product , product.id,limit,offset])


	const getTotal = useMemo(() => product && product.reviews && product.reviews.length ? product.reviews.length: 0,[product,product.id])
	useEffect(() => {
		dispatch(listProducts())
	},[])

	useEffect(() => {
		if(selectedProduct){
			const name = getSelectedProduct().name
			const getSelectedDeviceId = () => {
				let devices:string[] = []
				if(selectedDevice === 'Android'){
					devices = ['android','google-play']
				}else{
					devices = ['ios' , 'ios-all']
				}
				const selectedDeviceId = getSelectedProduct().product_ids.find(item => {
						return devices.indexOf(item.device) !== -1
				})
				
				return selectedDeviceId ? selectedDeviceId.product_id:undefined
			}
			const deviceId = getSelectedDeviceId()
			console.log(" deviceId " , deviceId)
		 if(deviceId){
			dispatch(listReviews(selectedProduct!,name, deviceId,offset,limit))
		 }
			
		}
			
	},[selectedProduct,selectedDevice,offset,limit])

	/**
	 * @function onSelect
	 * parent handler when user selects an item from dropdown
	 * @param id id of item selected
	 * @author Deepak_T
	 */
	const onSelect = useCallback(id => {
	
		setSelectedProduct(id)
	},[])

	const onClickTab = selectedTab => {
		
		if(selectedTab == 1)setSelectedDevice(DEVICE.ANDROID)
		 
		else if(selectedTab == 2) setSelectedDevice(DEVICE.IOS)
		
		else console.log("Wrong tab")
	}

	const onAction = (record) => {
		console.log("action " , record)
	}

	const getSelectedProduct =() => {
		return products.find(p => p.id === selectedProduct)
	}

const onPageChange = p => {
	setOffset(p)
}

	const onRecordSizeSelect = size => {
	
		setLimit(size)
		
	}

	const onColumnsSelect = value => {
		const columns = getColumns.filter(c => value.indexOf(c.id) !== -1)
	
		setSelectedColumns(columns)
	}

	const getCsvData = () => {
		let csvData:any[] = []
		const columns = getColumns.map(c => c.title).filter(c => c !== 'Action')
		let rows:any[] = []

		const reviewData = product ? product.reviews:[]
		reviewData.forEach(p => {
			let row:any[] = []
			getColumns.map(c => c.key).forEach(k => {
				
				row.push(p[k])
			})

		
			rows.push(row)
		})

	
		csvData = [...rows]
		csvData.unshift(columns)

		return csvData
		
		
	}

	



	return (
		<div className="Q-admin-root">
{/* 		
			<Row>
      <Col span={12}>	<QLineChart data={lineChartData} /></Col>
      <Col span={12}><QStackedBarChart data={stackedBarChartData} /></Col>
		</Row> */}
		
		<Row>
			<Col span={24}>
				<QCard width={`100%`}>
					<QSelect width={400} placeholder="Select product" items={!productsState.loading && products && products.length >= 0? products: []} onSelect={onSelect} />
				</QCard>

				{!productsState.loading && selectedProduct && <QCard width={`100%`}>
				
						<div className="Q-Admin-root__tabs Q-tabs-root">
							<QTab   
							 activeTabIndex={selectedDevice === DEVICE.ANDROID ? 1 : 2}  
							typeCard={"line"} 
							onClickTab={onClickTab}
							tabList={getTablabels} />
						</div>
					<div className="Q-Admin-root__grid">
						<QTitle>{getSelectedProduct().name}</QTitle>
				
						<QTableHeader 
						csvData={getCsvData()}
						columns={getColumns.map(c => {
							return {id:c.id, name:c.title}
						})}
						selectedColumns={selectedColumns.map(c => {
							return {id:c.id, name:c.title}
						})}
						selectedRecordSize={RECORD_SIZES.find(item => item.name === limit)!}
						onColumnsSelect={onColumnsSelect}
						onRecordSizeSelect={onRecordSizeSelect} title="Review Details View" />
				 <Qtable
				 total={getTotal}
				 pageSize={limit}
				 currentPage={offset}
				 onPageChange={onPageChange}
				  loading={
					 {
						 spinning:reviewsState ? reviewsState.loading:false,
						 indicator:<QLoader />
						 }} data={getData} columns={selectedColumns} />
					</div>
					
				
				</QCard>}
			</Col>
		</Row>
		</div>
	)
}


