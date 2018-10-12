import Team, {IStaff, ITeam} from './Team';

export interface ICompany {
  companyName: string,
  getRoot: () => ITeam,
  addTeam: (team: ITeam, ancestors: string[]) => Map<string, ITeam>,
  search: (ancestors: string[]) => ITeam,
  addMemberToTeam: (pathToTeam: string[], staff: IStaff) => Map<number, IStaff>,
  getStaff: (pathToTeam: string[]) => Map<number, IStaff>,
}

export default class Company implements ICompany {
  public companyName: string;

  private root: ITeam;

  constructor(name: string) {
    this.companyName = name;
    this.root = new Team(name);
  }

  public getRoot(): ITeam {
    // Returns iterator for the values of the base node. 
    // It only ever has one node, which is the top level of the company
    return this.root;

  }

  public addTeam(team: ITeam, ancestors: string[]): Map<string, ITeam> {
    // Searches through list of ancestor teams back to root to make sure team is being added to connected tree
    // If is the first child then appends directly to root company node
    if(!this.root.getChildren().size) {
      return this.root.addChild(team);
    }

    const parent = this.search(ancestors);
    team.setParent(parent);
    return parent.addChild(team);
  }

  public search(pathToTeam: string[]): ITeam {
    // Searches for nodes by checking each nodes Map() of its children for the next value in the list
    // If found it returns the object and then checks that object children for the next node in the path
    let currentAncestor: ITeam = this.root;
    let nextAncestor = pathToTeam.shift();

    while(nextAncestor && currentAncestor.hasChild(nextAncestor)) {
      currentAncestor = currentAncestor.getChild(nextAncestor);
      if (!pathToTeam.length) {
        return currentAncestor;
      }
      nextAncestor = pathToTeam.shift();
    }
    throw new Error('Not found');
  }

  public addMemberToTeam(pathToTeam: string[], staff: IStaff): Map<number, IStaff> {
    // Rehashed search function adds staff member to each node enroute to finding the node representing the team the staff member belongs to
    // Can help avoid expense of having to visit each nested node later
    let currentAncestor: ITeam = this.root;
    let nextAncestor = pathToTeam.shift();

    while(nextAncestor && currentAncestor.hasChild(nextAncestor)) {
      currentAncestor = currentAncestor.getChild(nextAncestor);
      // Had trouble merging maps so adding immediate and nested staff to nested staff Map() until time for a fix
      currentAncestor.addNestedStaff(staff);

      if (!pathToTeam.length) {
        currentAncestor.addStaff(staff);
        return currentAncestor.getStaff();
      }

      nextAncestor = pathToTeam.shift();
    }
    throw new Error('Not found');
  }

  public getStaff(pathToTeam: string[]): Map<number, IStaff> {
    return this.search(pathToTeam).getNestedStaff();
    
  }
}
