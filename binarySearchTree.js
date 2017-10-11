function TreeNode(val){
    this.value = val;
    this.left = null;
    this.right = null;
};
function BinarySearchTree(){
    this.root = null;
};
BinarySearchTree.prototype.AddTreeNode = function(val){
    var root = this.root;

    if(!root){
        this.root = new TreeNode(val);
        return;
    }

    var currentTreeNode = root;
    var newTreeNode = new TreeNode(val);

    while(currentTreeNode){
        if(val<currentTreeNode.value){
            if(!currentTreeNode.left){
                currentTreeNode.left = newTreeNode;
                break;
            }
            else{
                currentTreeNode = currentTreeNode.left;
            }
        }
        else{
            if(!currentTreeNode.right){
                currentTreeNode.right = newTreeNode;
                break;
            }
            else{
                currentTreeNode = currentTreeNode.right;
            }
        }
    }
};

function dfs(root){
    if(root){
        console.log(root.value);
        dfs(root.left);
        dfs(root.right);
    }
}

 //Level order traversal
function bfs(root){  
    var heightOfTree = height(root);

    for(var i =1; i<=heightOfTree; i++){
        printCurrentLevel(root, i);
    }
}
function printCurrentLevel(root, level){
    if(!root){
        return;
    }
    if(level == 1){
        console.log(root.value);
    }
    else{
        printCurrentLevel(root.left, level-1);
        printCurrentLevel(root.right, level-1);
    }
}
//Bfs ends

function inorder(root){
   if(root){
      inorder(root.left);
      console.log(root.value);
      inorder(root.right);
   }
}
function preorder(root){
   if(root){
      console.log(root.value);
      preorder(root.left);
      preorder(root.right);
   }
}
function postorder(root){
   if(root){
      postorder(root.left);
      postorder(root.right);
      console.log(root.value);
   }
}

function minTreeNode(root){
    if(!root){
        return 0;
    }
    if(root.left){
        return minTreeNode(root.left);
    }
    return root.value;
}
function maxTreeNode(root){
    if(!root){
        return 0;
    }
    if(root.right){
        return maxTreeNode(root.right);
    }
    return root.value;
}

function height(root){
    if(!root){
        return 0;
    }
    else{
        var leftHeight = height(root.left);
        var rightHeight = height(root.right);

        if(leftHeight>rightHeight){
            return leftHeight+1;
        }
        else{
            return rightHeight+1;
        }
    }
}

function isBalanced(root){
    if(!root){
        return 1;
    }
    else{
        var leftHeight = height(root.left);
        var rightHeight = height(root.right);

        if(Math.abs(leftHeight-rightHeight)<=1 && isBalanced(root.left) && isBalanced(root.right)){
          return 1;  
        }

        return 0;
    }
}

function isBst(root){
    if(root){
        isBst(root.left);
        if((root.left && root.value < root.left.value) || (root.right && root.value > root.right.value)) {
            return false;
        }
        isBst(root.right);

        return true;
    }
}

function ancestor(root, target){
    if(!root){
        return false;
    }
    if(root.value == target){
        return true;
    }
    if(ancestor(root.left, target) || ancestor(root.right, target)){
        console.log(root.value)
    }
}

function commonAncestor(TreeNode, n1, n2){
   if(!TreeNode) return;
   var val = TreeNode.value;
   if(n1 < val && n2<val){
     return commonAncestor(TreeNode.left, n1, n2);
   }
   if(n1>val && n2>val){
     return commonAncestor(TreeNode.right, n1, n2);
   }
   console.log('lowest common ancestor value: ', val);
   return TreeNode;
}

var bst = new BinarySearchTree();