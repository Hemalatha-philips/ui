
import { Layout, Menu } from 'antd';
import Login from '../../components/Login/Login';
import { HEADINGS } from '../../content/en/headings';
import { Admin } from './Admin';
import "./Layout.scss"

const { Header, Content, Footer } = Layout;



const QLayout = ({auth}) => {
	return (
		<div className="Q-layout-root">
			  <Layout className="layout">
    <Header>
      <div className="logo">{HEADINGS.siteTitle}</div>
      {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        {new Array(5).fill(null).map((_, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
        })}
      </Menu> */}
    </Header>
    <Content style={{ padding: '0 50px' }}>
 
      <div className="site-layout-content">
				{!auth ? <Login />:<Admin />}

				
			</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>{HEADINGS.siteTitle} &copy; 2021 </Footer>
  </Layout>
		</div>
	)
}

export default QLayout
