class TreeNode {
    public data: number;
    public left: TreeNode | null;
    public right: TreeNode | null;

    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    public head: TreeNode | null;
    constructor(head?: TreeNode){
        this.head = head || null;
    }


    public insert(node: TreeNode | null = this.head, value: number): TreeNode {
        if (node === null){
            const root = new TreeNode(value);
            return root;
        }

        else {
            if (value < node.data){
                node.left = this.insert(node.left, value);
            }
            else {
                node.right = this.insert(node.right, value);
            }
            return node;
        }
    }

    public find(node: TreeNode | null = this.head, value: number): boolean{
        let current = node;

        while (current){
            if (current.data === value){
                return true;
            } else if (value < current.data){
                current = current?.left;
            } else {
                current = current?.right;
            }
        }

        return false;
    }

    public traverse(node: TreeNode | null = this.head, order: string){ 

        let val = node;
        if (node){
            if (order == "inorder"){
            this.traverse(node.left, order);
            val = (node);
            this.traverse(node.right, order);
            }
            if (order == "postorder"){
            this.traverse(node.left, order);
            this.traverse(node.right, order);
            val = (node);
            }
            if (order == "preorder"){
            val = (node);
            this.traverse(node.left, order);
            this.traverse(node.right, order);
            }
        }
        if (val !== null){
            return val;
        }
    }
}

const rootNode = new TreeNode(50);

const BSTree = new BinarySearchTree(rootNode);

export default function getTree(){
    return (BSTree);
}