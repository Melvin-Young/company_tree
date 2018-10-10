 export default class {
  constructor(name) {
    this.name = name;
    this.parent = null;
    this.children = new Map();
    this.isMarked = false;
  }
}