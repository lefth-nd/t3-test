import { SP } from "next/dist/shared/lib/utils";

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

    public delete(value: number){

        // if node exists 

        const current = this.find(this.head, value) as TreeNode ;
        if (current === undefined){
            return console.log("cannot delete");
        }
        console.log(current)

        // if current has 2 child
        // get lowest successor
        // only need if has right child
        if (current.left?.left && current.left.right || current.right?.left && current.right.right){
            if (current.left?.data === value){
                console.log("deleting")
                const node = current.left;

                let sp = node;
                let s = node.right;
                console.log(s?.left)
                while(s?.left !== null){
                    sp = s;
                    s = s?.left;
                }

                if (sp !== node){
                    sp.left = s.right;
                }else {
                    sp.right = s.right;
                }

                node.data = s?.data;

            } // left child to delete

            else if (current.right?.data === value){
                const node = current.right;

                let sp = node as TreeNode | undefined ;
                let s = node.right as TreeNode | undefined;
                console.log(s?.left)
                while(s?.left !== null){
                    sp = s;
                    s = s?.left;
                }

                if (sp !== node){
                    sp.left = s.right;
                }else {
                    sp.right = s.right;
                }

                node.data = s?.data;

            } // right child to delete

        }

        // if current has no children
        if (current.left && current.left.data === value && current.left.left === null && current.left.right === null){
            current.left = null;
        }else if (current.right && current.right.data === value && current.right.left === null && current.right.right === null){
            current.right = null;
        }

        // if current has 1 child
        if (current.left && current.left.data === value){ // left child to delete
            if (current.left.left){
                current.left = current.left.left;
            } // left child exists

            else if (current.left.right){
                current.left = current.left.right;
            } // right child exists
        }

        else if (current.right && current.right.data === value){ // right child to delete
            if (current.right.left){
                current.right= current.right.left;
            } // left child exists

            else if (current.right.right){
                current.right= current.right.right;
            } // right child exists
        }

    }

    public find(node: TreeNode | null = this.head, value: number): TreeNode | undefined{
        let current = node;

        while (current){
            if (current.left && current.left.data === value || current.right && current.right.data === value){
                return current;
            } else if (value < current.data){
                current = current?.left;
            } else {
                current = current?.right;
            }
        }

        return undefined;
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
BSTree.insert(rootNode, 12);
BSTree.insert(rootNode, 6);
BSTree.insert(rootNode, 24);

export default function getTree(){
    return (BSTree);
}