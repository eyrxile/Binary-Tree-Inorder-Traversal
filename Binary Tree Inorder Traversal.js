class TreeNode{
    constructor(val = 0, left = null, right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var inorderTraversal = function(root) {
    const result = [];
    const stack = [];
    let current = root;

    while(current !== null || stack.length > 0){
        while(current !== null){
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();
        result.push(current.val);
        current = current.right;
    }

    return result;
};

//Example usage:
let root1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
console.log(inorderTraversal(root1));

let root2 = null;
console.log(inorderTraversal(root2));

let root3 = new TreeNode(1);
console.log(inorderTraversal(root3));