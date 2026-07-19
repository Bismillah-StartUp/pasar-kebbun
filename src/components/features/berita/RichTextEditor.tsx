'use client';

import { useRef } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import ImageExtension from '@tiptap/extension-image';
import LinkExtension from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import { toast } from 'sonner';
import { FiBold, FiItalic, FiList, FiLink, FiImage, FiRotateCcw } from 'react-icons/fi';
import { MdFormatListNumbered, MdFormatQuote } from 'react-icons/md';
import { cn, isImageTooLarge } from '@/lib/utils';
import { uploadBeritaContentImage } from '@/services/berita.service';

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

interface ToolbarButtonProps {
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}

function ToolbarButton({ active, disabled, onClick, label, children }: ToolbarButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={label}
      aria-label={label}
      className={cn(
        'w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed',
        active ? 'bg-primary text-white' : 'hover:bg-slate-100 hover:text-slate-700'
      )}
    >
      {children}
    </button>
  );
}

export function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({ link: false }),
      LinkExtension.configure({ openOnClick: false, autolink: true }),
      ImageExtension.configure({ HTMLAttributes: { class: 'rounded-xl' } }),
      Placeholder.configure({ placeholder: placeholder ?? 'Tulis isi berita di sini...' }),
    ],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class: 'prose prose-sm max-w-none focus:outline-none min-h-48 px-4 py-3 text-slate-700',
      },
    },
  });

  const handleImageFile = async (file: File) => {
    if (!editor) return;

    if (isImageTooLarge(file)) {
      toast.warning('Ukuran gambar maksimal 5MB.');
      return;
    }

    const loadingToast = toast.loading('Mengunggah gambar...');
    try {
      const url = await uploadBeritaContentImage(file);
      editor.chain().focus().setImage({ src: url }).run();
    } catch {
      toast.error('Gagal mengunggah gambar.');
    } finally {
      toast.dismiss(loadingToast);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleImageFile(file);
    e.target.value = '';
  };

  const handleSetLink = () => {
    if (!editor) return;

    const previousUrl = editor.getAttributes('link').href as string | undefined;
    const url = window.prompt('Masukkan URL tautan', previousUrl ?? 'https://');

    if (url === null) return;

    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  if (!editor) return null;

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
      <div className="flex items-center gap-1 px-2 py-1.5 border-b border-slate-200 bg-white flex-wrap">
        <ToolbarButton
          label="Tebal"
          active={editor.isActive('bold')}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <FiBold className="w-4 h-4" />
        </ToolbarButton>
        <ToolbarButton
          label="Miring"
          active={editor.isActive('italic')}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <FiItalic className="w-4 h-4" />
        </ToolbarButton>
        <ToolbarButton
          label="Kutipan"
          active={editor.isActive('blockquote')}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          <MdFormatQuote className="w-4 h-4" />
        </ToolbarButton>

        <span className="w-px h-5 bg-slate-200 mx-1" />

        <ToolbarButton
          label="Daftar Poin"
          active={editor.isActive('bulletList')}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <FiList className="w-4 h-4" />
        </ToolbarButton>
        <ToolbarButton
          label="Daftar Bernomor"
          active={editor.isActive('orderedList')}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <MdFormatListNumbered className="w-4 h-4" />
        </ToolbarButton>

        <span className="w-px h-5 bg-slate-200 mx-1" />

        <ToolbarButton label="Tautan" active={editor.isActive('link')} onClick={handleSetLink}>
          <FiLink className="w-4 h-4" />
        </ToolbarButton>
        <ToolbarButton label="Sisipkan Gambar" onClick={() => fileInputRef.current?.click()}>
          <FiImage className="w-4 h-4" />
        </ToolbarButton>

        <span className="w-px h-5 bg-slate-200 mx-1" />

        <ToolbarButton
          label="Urungkan"
          disabled={!editor.can().undo()}
          onClick={() => editor.chain().focus().undo().run()}
        >
          <FiRotateCcw className="w-4 h-4" />
        </ToolbarButton>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/webp"
          hidden
          onChange={handleFileChange}
        />
      </div>

      <EditorContent editor={editor} className="bg-white" />
    </div>
  );
}
