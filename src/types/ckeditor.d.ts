declare module '@ckeditor/ckeditor5-dev-webpack-plugin'

declare module '@ckeditor/ckeditor5-dev-utils'


declare module '@ckeditor/ckeditor5-editor-classic/src/classiceditor' {
    import { Editor } from '@ckeditor/ckeditor5-core';
    export default Editor
}

declare module '@ckeditor/ckeditor5-essentials/src/essentials';
declare module '@ckeditor/ckeditor5-basic-styles/src/bold';
declare module '@ckeditor/ckeditor5-basic-styles/src/italic';
declare module '@ckeditor/ckeditor5-link/src/link';
declare module '@ckeditor/ckeditor5-list/src/list';
declare module '@ckeditor/ckeditor5-paragraph/src/paragraph';

declare module '@ckeditor/ckeditor5-basic-styles/src/subscript';
declare module '@ckeditor/ckeditor5-basic-styles/src/superscript';