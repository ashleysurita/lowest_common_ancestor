class Tree {
  constructor(value = 0, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

/*

check if current node is one of the values we're looking for
  check left 
    if we find it, return the value
    
    if we get values from both sides, return self
    if not, we pass the single value back up
  
  check same on right side as left side
    
    
  if we only get value from 1 side, must be that value
  if we get 2, we return self

*/



function lca (root, v1, v2) {
  if(!root) return null
  // if the current node is one of the values we're looking for, return the current value and stop searching
  if(root.value === v1 || root.value === v2) return root.value
  
  // recurse left and right to try to find the values of v1 and v2
  const left = lca(root.left, v1, v2)
  const right = lca(root.right, v1, v2)
  
  // if we find a value on both sides, that means current node is lowest ancestor
  if( left && right ) return root.value
  // if neither has a value, it's not in this sub-tree
  if( !left && !right ) return null
  
  // if only one of them returns, then we return that
  return left || right
}


const node = new Tree(3, 
                     new Tree(6,
                             new Tree(2),
                             new Tree(11,
                                     new Tree(9),
                                     new Tree(5)
                                     )
                             ),
                     new Tree(8,
                              null,
                             new Tree(13,
                                     new Tree(7))
                             )
                     )

console.log('6', lca(node, 2, 5))
console.log('6', lca(node, 2, 11))
console.log('3', lca(node, 2, 8))
console.log('11', lca(node, 9, 5))
