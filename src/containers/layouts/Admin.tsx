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
import { getTestGridData } from '../../mocks/data/testgrid.data';
import { ProductReviewsState, ProductsState } from '../../models/products.state.model';
import { deviceTabLabels } from '../../models/tab.model';
import { RootState } from '../../store';
import { tableColumns } from '../../utils/columns/table.columns';
import { RECORD_SIZES } from '../../utils/record-sizes';






const DEFAULT_LIMIT = 25;
enum DEVICE {ANDROID = 'Android', IOS = 'iOS'}
// import "./Admin.scss"
export const Admin = () => {

	//state variables for the reviews grid
 const [offset,setOffset] = useState(0)
 const [limit,setLimit] = useState(() => DEFAULT_LIMIT)
 const [selectedDevice,setSelectedDevice] = useState(() => DEVICE.ANDROID)

 const [selectedProduct , setSelectedProduct] =useState(null)


	const dispatch = useDispatch()
	const productsState:ProductsState = useSelector((state:RootState) => state.products)
	const reviewsState:ProductReviewsState = useSelector((state:RootState) => state.productReviews)
	const {   products } = productsState
	const { product } = reviewsState

	console.log("Product in component is " , product)

	useEffect(() => {
		dispatch(listProducts())
	},[])

	useEffect(() => {
		if(selectedProduct)
			dispatch(listReviews(selectedProduct!,selectedDevice,offset,limit))
	},[selectedProduct,selectedDevice,offset,limit])

	/**
	 * @function onSelect
	 * parent handler when user selects an item from dropdown
	 * @param id id of item selected
	 * @author Deepak_T
	 */
	const onSelect = useCallback(id => {
		console.log("admin product " , id)
		setSelectedProduct(id)
	},[])

	const onClickTab = selectedTab => {
		console.log("selected tab " , selectedTab)
		if(selectedTab == 1)setSelectedDevice(DEVICE.ANDROID)
		 
		else if(selectedTab == 2) setSelectedDevice(DEVICE.IOS)
		
		else console.log("Wrong tab")
	}

	const onAction = (record) => {
		console.log("action " , record)
	}

	const onRecordSizeSelect = size => {
		console.log("size selected " , size)
		setLimit(size)
		
	}

	const getTablabels  = useMemo(deviceTabLabels, [])
	const getColumns = useMemo(() => tableColumns(onAction),[])
	const getData = useMemo(getTestGridData , [])

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
					{reviewsState.loading ? <QLoader />: <> 
						<div className="Q-Admin-root__tabs Q-tabs-root">
							<QTab   
							 activeTabIndex={selectedDevice === DEVICE.ANDROID ? 1 : 2}  
							typeCard={"line"} 
							onClickTab={onClickTab}
							tabList={getTablabels} />
						</div>
					<div className="Q-Admin-root__grid">
						<QTitle>{product.name}</QTitle>
						<QTableHeader 
						columns={getColumns.map(c => {
							return {id:c.id, name:c.title}
						})}
						selectedColumns={getColumns.map(c => {
							return {id:c.id, name:c.title}
						})}
						selectedRecordSize={RECORD_SIZES.find(item => item.name === limit)!}
						onRecordSizeSelect={onRecordSizeSelect} title="Review Details View" />
				 <Qtable data={getData} columns={getColumns} />
					</div>
					</>}
				
				</QCard>}
			</Col>
		</Row>
		</div>
	)
}


