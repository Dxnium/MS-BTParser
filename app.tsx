interface BinTreeNode { 
    id: string | number,
    left?: BinTreeNode,
    right?: BinTreeNode
}

//             root  left  right
const array = ["a", ["b", ["b1"], ["b2", ["b21"], ["b22"]]], ["c", ["c1", ["c11", ["c111"]], ["c12", null, ["c121"]]], ["c2", null, ["c21"]]]]

const createBinTreeNode = ( id:string | number ):BinTreeNode =>{
    return {
        id,
    }
}

const parseArray = ( arr:any ) => {
    let root = arr[0];
    return parseArrayAux(arr,root);
    
}
const parseArrayAux = ( arr:any , current:string | number | null) => {
    
    if(!current) return createBinTreeNode(null);

    const newNode = createBinTreeNode(current);

    if(Array.isArray(arr[1])){
        newNode.left = parseArrayAux( arr[1], arr[1][0] )
    } 
    if( arr[1] === null){
        newNode.left = parseArrayAux( null, null )
    }
    if(Array.isArray(arr[2])){        
        newNode.right = parseArrayAux( arr[2], arr[2][0] )
    }
    if( arr[2] === null){
        newNode.right = parseArrayAux( null, null )
    }

    return newNode;

}

let parsing = parseArray(array);


console.log( JSON.stringify( parsing, null, 2) );




