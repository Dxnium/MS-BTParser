import { createBinTreeNode } from "../helpers/BTreeNodes";

export const useParser = () => {

    /**
     * Main funtion to parse the array
     * Converts array format binary tree notation to BinTreeNode data structure
     * @param arr  [id, leftChild, rightChild] for example [1, [2], [3, null, [5]]]
     * @returns TreeNode parsed Json
     */
    const parseArrayToTree = ( arr:any ) => {

        let root = arr[0];
        return parseArrayRecursive(arr,root);

    }
    
    /**
     * Recursive funtion create a BinTreeNode root and concatenate all of them into the root
     * @param arr [id, leftChild, rightChild] for example [1, [2], [3, null, [5]]]
     * @param current the id of the current parsing array
     * @returns newNode that contains all the Tree
     */
    const parseArrayRecursive = ( arr:any , current:string | number | null) => {
        
        if(!current) return createBinTreeNode();

        const newNode = createBinTreeNode(current);

        if(Array.isArray(arr[1])){
            newNode.left = parseArrayRecursive( arr[1], arr[1][0] )
        } 
        if( arr[1] === null){
            newNode.left = parseArrayRecursive( null, null )
        }
        if(Array.isArray(arr[2])){        
            newNode.right = parseArrayRecursive( arr[2], arr[2][0] )
        }
        if( arr[2] === null){
            newNode.right = parseArrayRecursive( null, null )
        }

        return newNode;

    }



    return {
        parseArrayToTree,
        createBinTreeNode
    }
}
