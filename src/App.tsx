/*
 * @FilePath: \src\App.tsx
 * @Author: huangjitao
 * @Date: 2024-03-19
 * @Description: description of this file
 */
import { Button, Layout } from '@douyinfe/semi-ui';
import React from 'react';
import { initialContent } from '@/lib/data/initialContent.ts';
import { useBlockEditor } from '@/lib/hooks/useBlockEditor.ts';
import BlockEditor from '@/components/BlockEditor';

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

  const editorRef = React.useRef<HTMLDivElement | null>(null);
  const { editor, characterCount } = useBlockEditor(initialContent);

  return (
    <Layout className='w-full h-full overflow-hidden'>
      <Sider>侧边导航栏</Sider>
      <Layout>
        <Header>头部</Header>
        <Content>
          <BlockEditor editor={editor} editorRef={editorRef} />
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
