import { ActionTypes } from '../types';

export const changeTitle = (title:string):ActionTypes => ({
    type: "CHANGE_TITLE",
    payload: title
});

export const parseArray = (jsonParsed:BinTreeNode):ActionTypes => ({
    type: "PARSE_ARRAY",
    payload: jsonParsed
});


export const parsingError = (error:string):ActionTypes => ({
    type: "ERROR_PARSING",
    payload: error
});