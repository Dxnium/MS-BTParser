import { ActionTypes } from '../../redux/types';
import { IAppState, appReducer } from '../../redux/reducers/appReducer';
import { createBinTreeNode } from '../../helpers/BTreeNodes';
import { useParser } from '../../hooks/useParser';



it('Test authReducer parsing', () => {
    
    
    const initialState:IAppState = {
        title: 'Binary Tree Parser',
        bodyMessage: 'Process the input text to a BinTreeNode',
        treeNode: createBinTreeNode('root'),
        error: ''
    }

    const {parseArrayToTree} = useParser();

    const parseJson = parseArrayToTree(['a',['b'],['c']]);

    const action:ActionTypes = {
        type: "PARSE_ARRAY",
        payload: parseJson
    }

    const state = appReducer( initialState, action);

    expect( state ).toEqual( {
        title: 'Binary Tree Parser',
        bodyMessage: 'Process the input text to a BinTreeNode',
        treeNode: {
            "id": "a",
            "left": {
              "id": "b"
            },
            "right": {
              "id": "c"
            }
          },
        error: ''
    } )
    

});
it('Test authReducer error', () => {
    
    
    const initialState:IAppState = {
        title: 'Binary Tree Parser',
        bodyMessage: 'Process the input text to a BinTreeNode',
        treeNode: createBinTreeNode('root'),
        error: ''
    }

    const action:ActionTypes = {
        type: "ERROR_PARSING",
        payload: 'Parsing Error'
    }

    const state = appReducer( initialState, action);

    expect( state ).toEqual( {
        title: 'Binary Tree Parser',
        bodyMessage: 'Process the input text to a BinTreeNode',
        treeNode: {
            "id": "root",
          },
        error: expect.any(String)
    } )
    

});

