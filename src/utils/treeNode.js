 export default class {
  constructor(name) {
    if (!name || typeof name !== 'string') {
      throw new Error('Name is required and must be a string');
    }
    this.name = name;
    this.parent = null;
    this.children = new Map();
    this.isMarked = false;
  }
}