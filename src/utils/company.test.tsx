import Company from './Company';

import Team from './Team';

describe('A Company', () => {
  const company = new Company('Dummy Company');

  const ceo = new Team('CEO');
  const engineering = new Team('Engineering');
  const product = new Team('Product');

  it('should initialize with a name', () => {
    expect(company.getRoot().name).toBe('Dummy Company');
  });

  it('should add the first team to the company root node', () => {
    company.addTeam(ceo, []);
    // Gets node, gets Map() of children and calls the iterator that accesses their values
    expect(company.getRoot().getChildren().values().next().value).toBe(ceo); 
  })

  it('should be able to add teams', () => {

    const children = company.search(['CEO']).getChildren();

    company.addTeam(engineering, ['CEO']);
    company.addTeam(product, ['CEO']);

    expect(children.size).toBe(2);
  });

  it('should be able to find teams', () => {
    const searchResult = company.search(['CEO', 'Engineering']);
    expect(searchResult).toBe(engineering);
  })

  it('should be able to add nested teams', () => {
    const juniorEngineers = new Team('Junior Engineering');
    company.addTeam(juniorEngineers, ['CEO', 'Engineering']);

    expect(company.search(['CEO', 'Engineering', 'Junior Engineering'])).toBe(juniorEngineers);
  });

  it('should add staff members to each level of Team leading to immediate team', () => {
    company.addMemberToTeam(['CEO'], {name: 'Mr. CEO', id: 2, team: 'CEO'});
    company.addMemberToTeam(['CEO', 'Engineering'], {name: 'Dummy', id: 5, team: 'Engineering'});

    expect(ceo.getStaff().size).toBe(1);
    expect(ceo.getNestedStaff().size).toBe(2);
    expect(engineering.getNestedStaff().size).toBe(1);
  })
});
