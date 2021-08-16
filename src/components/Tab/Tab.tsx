import { Tabs } from "antd";
import { TabInfo } from "../../models/tab.model";


import "./Tab.scss"

const { TabPane } = Tabs;

interface TabProps {
  tabList: TabInfo[];
  activeTabIndex: number;
  typeCard?: any;
  count? : number;
  countIndex?: number;
  onClickTab: (clickedTab: string) => void;
}

export const QTab:React.FC<TabProps> = ({
	onClickTab, 
	typeCard , 
	activeTabIndex,
	tabList,
	count,
	countIndex} ) => {

		console.log(" acive tab " , activeTabIndex)
	return (
		
		<Tabs
		onChange={onClickTab}
		type={
			typeCard !== undefined ? typeCard : "card"
		}
		defaultActiveKey={activeTabIndex+''}
		defaultValue={activeTabIndex+''}
		className={
			typeCard !== undefined
				? "Q-tabs-root-line"
				: "QQ-tabs-root-card"
		}
		aria-label="tabs"
	>
		{tabList.map((tab: TabInfo, index: number) => (
			<TabPane key={tab.id+''} tab={countIndex === index && count? <span className="tabs-with-count">{tab.text} <em>{count}</em></span> : tab.text} />
		))}
	</Tabs>
	)
}


