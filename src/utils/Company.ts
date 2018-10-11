import Team from './Team';

export default class Company {
  private root: Team;

  constructor(companyRoot: Team) {
    this.root = new Team('root');
    this.root.addChild(companyRoot);
  }

  public getRoot() {
    // Returns iterator for the values of the base node. 
    // It only ever has one node, which is the top level of the company
    return this.root.getChildren().values().next().value;

  }
  public addTeam(team: Team, ancestors: string[]): Map<string, Team> {
    // Searches through list of ancestor teams back to root to make sure team is being added to connected tree
    const parent = this.search(ancestors);
    team.setParent(parent);
    return parent.addChild(team);
  }

  public search(ancestors: string[]): Team {
    let currentAncestor: Team = this.root;
    let nextAncestor = ancestors.shift();

    while(nextAncestor && currentAncestor.hasChild(nextAncestor)) {
      currentAncestor = currentAncestor.getChild(nextAncestor);
      if (!ancestors.length) {
        return currentAncestor;
      }
      nextAncestor = ancestors.shift();
    }

    throw new Error('Not found')
  }

  // bfsSearch(name, currentNode = this.root) {
  //   // Function takes ambiguous search string and returns all results it can find
  //   let result = [];
  //   let searchQueue = [];
  
  //   searchQueue.push(currentNode);
  
  //   while (searchQueue && searchQueue.length) {
  //     let nodeToCheck = searchQueue.shift();
  //     nodeToCheck.name === name && result.push(nodeToCheck);
  //     nodeToCheck.children.forEach(child => searchQueue.push(child));
  //   }  
  //   return result;
  // }
}
