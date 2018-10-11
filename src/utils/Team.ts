 export default class Team {
  public name: string;
  private parent: Team;
  private children: Map<string, Team>;

  constructor(name: string) {
    if (!name) {
      throw new Error('Name is required');
    }
    this.name = name;
    this.parent = {} as Team;
    this.children = new Map();
  }

  public getParent(): Team {
    return this.parent;
  }

  public setParent(parent: Team): void {
    this.parent = parent;
  }

  public getChildren(): Map<string, Team> {
    return this.children;
  }

  public getChild(child: string): Team {
    return this.children.get(child) as Team;
  }

  public addChild(child: Team): Map<string, Team> {
    return this.children.set(child.name, child);
  }

  public hasChild(child: string): boolean {
    return this.children.has(child);
  }
}