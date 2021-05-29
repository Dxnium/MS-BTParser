import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../../redux/store';
import { parseArray, parsingError } from '../../redux/actions/appState';

export const TreeInput = () => {

    const {bodyMessage , treeNode , error} = useSelector((state: RootState) => state.appState);

    const dispatch = useDispatch<Dispatch>()

    const [inputText, setInputText] = useState("['root']");
    const [text, setText] = useState(JSON.stringify(treeNode,null,2));


    const convert = () => {

        try {
            let parsedJson = JSON.parse(text);
            dispatch( parseArray(parsedJson) )
        } catch (error) {

            dispatch( parsingError('Parsing Error') )
        }finally{
            
        }
    }


    return  (
        <div className="tree__input-form">
            <input 
                className="tree__array-input" type="text" name="array" 
                placeholder={bodyMessage} 
                value={inputText}
                onChange={(e)=>setInputText(inputText)} 
                disabled
            />

            <button className="btn btn-primary tree__button" onClick={()=>{convert()}}> Fetch </button>

            <textarea 
                className="tree__textarea"
                value={text}
                onChange={(e)=>{setText(e.target.value)}}
            ></textarea> 

            {error && 
                <div className="error__parsing-error-alert">
                    { error } 
                </div>
            }
        </div>
    )
}
