import { Editor, EditorContent } from '@tiptap/react';
import React, { useRef } from 'react';
import { ContentItemMenu } from '@/components/menus/ContentItemMenu';

import '@/components/BlockEditor/styles/index.css';

interface BlockEditorProps {
  editor: Editor;
  editorRef: React.MutableRefObject<HTMLDivElement | null>;
}

const BlockEditor = ({ editorRef, editor }: BlockEditorProps) => {
  const menuContainerRef = useRef(null);

  if (!editor) {
    return null;
  }

  return (
    <>
      <EditorContent editor={editor} ref={editorRef} />
      <ContentItemMenu editor={editor} />
    </>
    // </div>
  );
};

export default BlockEditor;
