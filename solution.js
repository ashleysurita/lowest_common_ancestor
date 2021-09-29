var lowestCommonAncestor = function(root, p, q) {
     if(!root) return false
    
    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)
        
    if( (left && right) || (root.val === p.val) || (root.val === q.val)) {
        return root
    } else if (left) {
        return left
    } else if (right) {
        return right
    }
    
    return null
};
