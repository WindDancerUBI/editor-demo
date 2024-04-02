/*
 * @FilePath: \src\App.tsx
 * @Author: huangjitao
 * @Date: 2024-03-19
 * @Description: description of this file
 */
import { Button, Layout, Spin } from '@douyinfe/semi-ui';
import { Suspense } from 'react';
import { useBlockEditor } from '@/components/TipTapEditor/hooks/useBlockEditor.ts';
import { initialContent } from '@/lib/data/initialContent.ts';
import BlockEditor from '@/components/TipTapEditor/BlockEditor.tsx';

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

  const { editor, characterCount } = useBlockEditor(initialContent);

  return (
    <Layout className='w-full h-full overflow-hidden'>
      <Header>
        <Button type='primary' onClick={changeTheme}>
          切换主题
        </Button>
      </Header>
      <Layout>
        <Sider>侧边导航栏</Sider>
        <Content>
          <Suspense fallback={<Spin />}>
            <BlockEditor editor={editor} />
          </Suspense>
        </Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  );
}

export default App;
