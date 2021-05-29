export interface TreeOutputProps {
    treeNode: BinTreeNode | null,
}

export const TreeOutput = ({treeNode}:TreeOutputProps) => {

    if (!treeNode || !treeNode.id) {
        return <div className="treeNode"></div>;
    }
    return (
        <div className="treeNode">
            <div className="nodeId">{treeNode.id}</div>
            {treeNode.left || treeNode.right ?
                <div className="nodeChildren">
                     <div className="nodeChildren-left">
                        <TreeOutput treeNode={treeNode.left ? treeNode.left : null}   />
                     </div>
                     <div className="nodeChildren-right">
                        <TreeOutput treeNode={treeNode.right ? treeNode.right : null} />
                     </div>
                </div> :
                null}
        </div>
    )
}
