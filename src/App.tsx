/*
 * @FilePath: \src\App.tsx
 * @Author: huangjitao
 * @Date: 2024-03-19
 * @Description: description of this file
 */
import { Button, Layout, Spin } from '@douyinfe/semi-ui';
import { Suspense } from 'react';

const { Sider, Header, Content, Footer } = Layout;

function App() {
  const changeTheme = () => {
    const body = document.body;
    const html = document.documentElement;
    if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode');
      html.classList.remove('dark');
    } else {
      body.setAttribute('theme-mode', 'dark');
      html.classList.add('dark');
    }
  };

  return (
    <Layout className='w-full h-full overflow-hidden'>
      <Sider>侧边导航栏</Sider>
      <Layout>
        <Header>头部</Header>
        <Content>
          <Suspense fallback={<Spin />}>内容部分</Suspense>
        </Content>
        <Footer>
          <Button type='primary' onClick={changeTheme}>
            切换主题
          </Button>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
