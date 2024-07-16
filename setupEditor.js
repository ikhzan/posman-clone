import { EditorState, basicSetup } from "@codemirror/basic-setup";
import { json } from "@codemirror/lang-json";
import { EditorView, keymap  } from "@codemirror/view";

export default function setupEditors(){
    const jsonRequestBody = document.querySelector('[data-json-request-body]')
    const jsonResponseBody = document.querySelector('[data-json-response-body]')
    
    const requestEditor = new EditorView({
        state: EditorState.create({
            doc: "{\n\t\n}"
        }),
        parent: jsonRequestBody
    })

    const responseEditor = new EditorView({
        state: EditorState.create({
            doc: "{}"
        }),
        parent: jsonResponseBody
    })

    function updateResponseEditor(value){
        responseEditor.dispatch({
            changes: {
                from: 0,
                to: responseEditor.state.doc.length, 
                insert: JSON.stringify(value,null,2),
            },
        })
    }

    return {requestEditor,  updateResponseEditor} 
}