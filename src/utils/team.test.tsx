import Team from './Team';

describe('A Team should initialize', () => {
  const team = new Team('Melvin');

  it('with a name', () => {
    expect(team.name).toBe('Melvin');
  });

  it('without a parent', () => {
    expect(team.getParent()).toEqual({});
  });

  it('without children', () => {
    const emptyMap = new Map();
    expect(team.getChildren()).toEqual(emptyMap);
  });
});

describe('A Team should', () => {
  const team = new Team('Dummy Team');
  const parent = new Team('Dummy Parent');
  const child = new Team('Dummy Child');
  const child2 = new Team('Dummy Child 2');
  
  team.setParent(parent);
  team.addChild(child);
  team.addChild(child2);

  it('have a parent', () => {
    expect(team.getParent()).toBe(parent);
  });

  it('have children', () => {
    expect(team.getChildren().size).toBe(2);
  });

  it('return true if has child and false if not', () => {
    expect(team.hasChild('Dummy Child')).toBe(true);
    expect(team.hasChild('Dummy Child 3')).toBe(false);
  });

  it('find children by name', () => {
    expect(team.getChild('Dummy Child 2')).toBe(child2);
  });

  it('be a able to add staff', () => {
    const staffMember = {name: 'Melvin Young', id: 6, branch: 'Product'};

    expect(team.getStaff().size).toBe(0);
    team.addStaff(staffMember);
    expect(team.getStaff().size).toBe(1);
    expect(team.getStaff().values().next().value).toBe(staffMember);
  });

  it('be a able to add nested staff', () => {
    const staffMember = {name: 'Chuck Stevenson', id: 7, branch: 'Product'};

    expect(team.getNestedStaff().size).toBe(0);
    team.addNestedStaff(staffMember);
    expect(team.getNestedStaff().size).toBe(1);
    expect(team.getNestedStaff().values().next().value).toBe(staffMember);
  });
});
