import { TreeInput } from './tree/TreeInput'
import { TreeOutput } from './tree/TreeOutput'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';



export const Body = () => {
    
    const {treeNode} = useSelector((state:RootState) => state.appState)
    return (
        <main className="tree__main">
            <TreeInput/>
            <TreeOutput treeNode={treeNode}/>
        </main>
    )

}
