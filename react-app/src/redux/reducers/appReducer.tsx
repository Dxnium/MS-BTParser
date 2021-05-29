import { createBinTreeNode } from '../../helpers/BTreeNodes';
import { ActionTypes } from '../types';

export interface IAppState {
    title: string;
    bodyMessage: string;
    treeNode: BinTreeNode;
    error: string
}


const initialState:IAppState = {
    title: 'Binary Tree Parser',
    bodyMessage: 'Process the input text to a BinTreeNode',
    treeNode: createBinTreeNode('root'),
    error: ''
}

export const appReducer = (state:IAppState = initialState, action:ActionTypes) => {
    switch (action.type) {
        case "CHANGE_TITLE":
            return {
                ...state,
                title: action.payload
            }
        case "PARSE_ARRAY":
            return {
                ...state,
                treeNode: action.payload,
                error: ''
            }
        case "ERROR_PARSING":
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
