import { EditorState } from 'draft-js';
import Toolbar from './Toolbar';
export declare function createToolbar(config?: {}): {
    name: string;
    decorators: any[];
    callbacks: {
        onChange: (editorState: any) => void;
        onUpArrow: (args: any) => any;
        onDownArrow: (args: any) => any;
        getEditorState: (args: any) => any;
        setEditorState: (args: any) => any;
        handleReturn: (args: any) => any;
    };
    onChange(editorState: EditorState): any;
    component: typeof Toolbar;
};