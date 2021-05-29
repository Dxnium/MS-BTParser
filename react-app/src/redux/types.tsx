export type ActionTypes = 
    | { type:"CHANGE_TITLE" , payload: string }
    | { type:"PARSE_ARRAY" , payload: BinTreeNode }
    | { type:"ERROR_PARSING" , payload: string }
    // | { type:"CHANGE_TITLE" , payload: string }
    // | { type:"CHANGE_TITLE" , payload: string }