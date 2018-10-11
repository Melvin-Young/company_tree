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
  })

  it('find children by name', () => {
    expect(team.getChild('Dummy Child 2')).toBe(child2);
  })
});
