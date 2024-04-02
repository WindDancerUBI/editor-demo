import { Editor, EditorContent } from '@tiptap/react';

interface BlockEditorProps {
  editor: Editor | null;
}

const BlockEditor = ({ editor }: BlockEditorProps) => {
  if (!editor) {
    return null;
  }

  return (
    <div className='max-w-3xl mx-auto'>
      <EditorContent editor={editor} />
    </div>
  );
};

export default BlockEditor;
