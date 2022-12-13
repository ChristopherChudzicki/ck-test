import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import HeadingPlugin from '@ckeditor/ckeditor5-heading/src/heading';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import ListPlugin from '@ckeditor/ckeditor5-list/src/list';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';

const config = {
  plugins: [
    EssentialsPlugin,
    HeadingPlugin,
    BoldPlugin,
    ItalicPlugin,
    LinkPlugin,
    ListPlugin,
    Subscript,
    Superscript,
    ParagraphPlugin
  ],
  toolbar: {
    items: [
      'heading',
      '|',
      'subscript',
      'superscript',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      'undo',
      'redo'
    ]
  },
  language: 'en'
}

export default config
