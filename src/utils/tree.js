export default class Tree {
  constructor(rootNode) {
    this.root = rootNode;
  }

  addTeam(newNode, parentNodes) {
    if(!newNode || Object.getOwnPropertyNames(newNode).length === 0) {
      throw new Error('Team node is invalid')
    }

    let parent = this.search(parentNodes);
    if (parent) {
      newNode.parent = parent;
      parent.children.set(newNode.name, newNode);
    } else {
      return {
        message: 'The parent team specified does not exist',
        node: newNode
      }
    }
  }

  search(parentNodes = [], currentNode = this.root) {
    let rootName = parentNodes.shift();
    if (!parentNodes.length && rootName === this.root.name) {
      return this.root;
    } 

    let currentSearch = parentNodes.shift();
   
    while (currentSearch && currentNode.children.has(currentSearch)) {
      currentNode = currentNode.children.get(currentSearch);
      if (!parentNodes.length) {
        return currentNode;
      }
      currentSearch = parentNodes.shift();
    }

    return false;
  }

  bfsSearch(name, currentNode = this.root) {
    //Function takes ambiguous search string and returns all results it can find
    let result = [];
    let searchQueue = [];
  
    searchQueue.push(currentNode);
  
    while (searchQueue && searchQueue.length) {
      let nodeToCheck = searchQueue.shift();
      nodeToCheck.name === name && result.push(nodeToCheck);
      nodeToCheck.children.forEach(child => searchQueue.push(child));
    }  
    return result;
  }
}
