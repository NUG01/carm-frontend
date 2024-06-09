import { Breadcrumb, Layout, Menu, theme } from 'antd';
import checkAuth from '../../guards/checkAuth';
import BasicAxios from '../../services/axios/BasicAxios';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const { Header, Content, Footer } = Layout;

const MainLayout = ({ logoutEmit, logged }) => {
  const { t } = useTranslation();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { pathname } = useLocation();

  let pathItems = pathname.split('/').filter((item) => item !== '');

  async function logoutHandler() {
    await BasicAxios.post('logout');
    logoutEmit();
  }

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={menuItems(t)}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          {pathItems.map((item, index) => (
            <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
          ))}
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        {/* Ant Design ©{new Date().getFullYear()} Created by Ant UED */}
      </Footer>
    </Layout>
  );
};

export default checkAuth(MainLayout);

const menuItems =(t)=> { return [
  {
    key: '1',
    label: t('calculator'),
    path: '/dashboard/calculator',
  },
  // {
  //   key: '2',
  //   label: 'Item 2',
  //   path: '/dashboard/item2',
  // },
  // {
  //   key: '3',
  //   label: 'Item 3',
  //   path: '/dashboard/item3',
  // },
]};
