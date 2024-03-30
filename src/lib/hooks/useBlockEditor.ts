import { Content, Editor, useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { useEffect } from 'react';
import Selection from '@/components/extensions/Selection';

declare global {
  interface Window {
    editor: Editor | null;
  }
}

export const useBlockEditor = (initialContent: Content) => {
  const editor = useEditor({
    autofocus: true,
    extensions: [StarterKit, Selection],
    editorProps: {
      attributes: {
        class: 'min-h-full',
        autocomplete: 'off',
        autocorrect: 'off',
        autocapitalize: 'off'
      }
    }
  });

  useEffect(() => {
    if (editor && editor.isEmpty) {
      editor.commands?.setContent(initialContent);
    }
  }, [editor, initialContent]);

  const characterCount = editor?.storage.characterCount || { characters: () => 0, words: () => 0 };

  window.editor = editor;

  return { editor, characterCount };
};
