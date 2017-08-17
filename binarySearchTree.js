/**
 * Created by YEFY on 2017/8/17.
 */
function Node(data, left, right){
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = function(){
        return this.data;
    }
}
function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.insert = function(data){
    // 创建一个节点保存数据
    var node = new Node(data,null,null);
    // 下面将节点node插入到树中
    // 如果树是空的，就将节点设为根节点
    if(!this.root){
        this.root = node;
    }else{  //树不为空
        // 判断插在父节点的左边还是右边
        // 所以先要保存一下父节点
        // var parent = this.root;
        var current = this.root;
        var parent;
        // 如果要插入的节点键值小于父节点键值，则插在父节点左边，
        // 前提是父节点的左边为空，否则要将父节点往下移一层，
        // 然后再做判断
        while(true){
            // data小于父节点的键值
            parent = current;
            if(data < parent.data){
                // 将父节点往左下移(插入左边)
                // parent = parent.left;
                current = current.left;
                // 如果节点为空，则直接插入
                if(!current){
                    // ！！！此处特别注意，如果就这样把parent赋值为node，也仅仅只是parent指向node，
                    // 而并没有加到父元素的左边！！！根本没有加到树中去。所以要先记住父元素，再把当前元素加入进去
                    parent.left = node;
                    break;
                }
            }else{  // 将父节点往右下移(插入右边)
                current = current.right;
                if(!current){
                    parent.right = node;
                    break;
                }
            }
        }
    }
};
BinarySearchTree.prototype.inOrder = function(node){ //左中右
    if(node){
        this.inOrder(node.left);
        console.log(node.show());
        this.inOrder(node.right);
    }
};
BinarySearchTree.prototype.preOrder = function(node){  //中左右
    if(node){
        console.log(node.show());
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
};
BinarySearchTree.prototype.postOrder = function(node){  //左右中
    if(node){
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.show());
    }
};
var tree = new BinarySearchTree();
// 添加节点
tree.insert(30);
tree.insert(14);
tree.insert(35);
tree.insert(12);
tree.insert(17);
// 中序遍历
tree.inOrder(tree.root);
tree.preOrder(tree.root);
tree.postOrder(tree.root);