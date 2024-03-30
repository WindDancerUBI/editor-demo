import { Editor } from '@tiptap/react';
import { useEffect, useState } from 'react';
import DragHandle from '@tiptap-pro/extension-drag-handle-react';
import { useEditorData } from '@/lib/hooks/useEditorData.ts';
import { Button } from '@douyinfe/semi-ui';
import { IconHandle, IconPlus } from '@douyinfe/semi-icons';

export const ContentItemMenu = ({ editor }: { editor: Editor }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const data = useEditorData();

  useEffect(() => {
    if (menuOpen) {
      editor.commands.setMeta('lockDragHandle', true);
    } else {
      editor.commands.setMeta('lockDragHandle', false);
    }
  }, [editor, menuOpen]);

  return (
    <DragHandle
      pluginKey='ContentItemMenu'
      editor={editor}
      onNodeChange={data.handleNodeChange}
      tippyOptions={{
        offset: [-2, 8],
        zIndex: 99
      }}
    >
      <div className='flex items-center'>
        <Button theme='borderless' type='tertiary' onClick={() => setMenuOpen(!menuOpen)}>
          <IconPlus />
        </Button>
        <Button theme='borderless' type='tertiary' onClick={() => setMenuOpen(!menuOpen)}>
          <IconHandle />
        </Button>
      </div>
    </DragHandle>
  );
};
