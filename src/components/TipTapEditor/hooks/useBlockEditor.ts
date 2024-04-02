import { Content, Editor, useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';

declare global {
  interface Window {
    editor: Editor | null;
  }
}

export const useBlockEditor = (initialContent: Content) => {
  const editor = useEditor(
    {
      extensions: [StarterKit],
      autofocus: true,
      editorProps: {
        attributes: {
          class: 'min-h-full overflow-y-auto',
          autocomplete: 'off',
          autocorrect: 'off',
          autocapitalize: 'off'
        }
      },
      onCreate: ({ editor }) => {
        if (editor.isEmpty) {
          editor.commands?.setContent(initialContent);
        }
      }
    },
    [initialContent]
  );

  const characterCount = editor?.storage.characterCount || { characters: () => 0, words: () => 0 };

  window.editor = editor;

  return { editor, characterCount };
};
