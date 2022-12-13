import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import config from "./ckeditor"

ClassicEditor
    .create(document.querySelector('#the-editor') as HTMLElement, config)
    .then(editor => {
        console.log( editor );
    } )
    .catch(error => {
        console.error( error );
    } );