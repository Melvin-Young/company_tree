export interface IStaff {
  id: number,
  name: string,
  team: string
}

export interface ITeam {
  name: string,
  getParent: () => ITeam,
  setParent: (parent: ITeam) => void,
  getChildren: () => Map<string, ITeam>,
  getChild: (child: string) => ITeam,
  addChild: (child: ITeam) => Map<string, ITeam>,
  hasChild: (child: string) => boolean,
  getStaff: () => Map<number, IStaff>,
  addStaff: (staff: IStaff) => Map<number, IStaff>,
  getNestedStaff: () => Map<number, IStaff>,
  addNestedStaff: (staff: IStaff) => Map<number, IStaff>
}

export default class Team implements ITeam {
  public name: string;
  private parent: ITeam;
  private children: Map<string, ITeam>;
  private staff: Map<number, IStaff>;
  private nestedStaff: Map<number, IStaff>;

  constructor(name: string) {
    if (!name) {
      throw new Error('Name is required');
    }
    this.name = name;
    this.parent = {} as ITeam;
    this.children = new Map();
    this.staff = new Map();
    this.nestedStaff = new Map();
  }

  public getParent(): ITeam {
    return this.parent;
  }

  public setParent(parent: ITeam): void {
    this.parent = parent;
  }

  public getChildren(): Map<string, ITeam> {
    return this.children;
  }

  public getChild(child: string): ITeam {
    return this.children.get(child) as ITeam;
  }

  public addChild(child: ITeam): Map<string, ITeam> {
    return this.children.set(child.name, child);
  }

  public hasChild(child: string): boolean {
    return this.children.has(child);
  }

  public getStaff(): Map<number, IStaff> {
    return this.staff;
  }

  public addStaff(staff: IStaff): Map<number, IStaff> {
    return this.staff.set(staff.id, staff);
  }

  public getNestedStaff(): Map<number, IStaff> {
    return this.nestedStaff;
  }

  public addNestedStaff(staff: IStaff): Map<number, IStaff> {
    return this.nestedStaff.set(staff.id, staff);
  }
}