
import React from "react"
import { Layout, Menu } from 'antd';
// import Login from '../../components/Login/Login';
import { BUTTONTEXT } from '../../content/en/buttons';
import { HEADINGS } from '../../content/en/headings';

import { useHistory } from "react-router-dom"
import "./Layout.scss"
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/user.action';
import { getCookie } from '../../utils/cookies';
import { showToast } from '../../utils/toast';
import { UserOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;



const QLayout:React.FC<any> = ({children}) => {
	const auth = getCookie('user')
	const history = useHistory()
	const dispatch = useDispatch()

	const handleLogout = () => {
		if(auth){
		
			dispatch(logoutUser({userId:auth} , showToast , () => {
				history.push('/login')
			}))
		
		}
		
	}

	return (
		<div className="Q-layout-root">
			  <Layout className="layout">
    <Header >
      <div className="logo">{HEADINGS.siteTitle}</div>
			{ auth && <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
				<Menu.Item key="1" onClick={handleLogout}>{BUTTONTEXT.logout}</Menu.Item>
			</Menu>}
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
				<Menu.Item key="2"><UserOutlined /> {BUTTONTEXT.admin}</Menu.Item>
			</Menu>
      {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        {new Array(5).fill(null).map((_, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
        })}
      </Menu> */}
    </Header>
    <Content style={{ padding: '0 50px' }}>
 
      <div className="site-layout-content">
				{children}

				
			</div>
    </Content>
    {/* <Footer style={{ textAlign: 'center' }}>{HEADINGS.siteTitle} &copy; 2021 </Footer> */}
  </Layout>
		</div>
	)
}

export default QLayout
