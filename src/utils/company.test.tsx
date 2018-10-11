import Company from './Company';

import Team from './Team';

describe('A Company', () => {
  const ceo = new Team('CEO');
  const company = new Company(ceo);
  const engineering = new Team('Engineering');
  const product = new Team('Product');

  it('should initialize with a ceo', () => {
    expect(company.getRoot()).toBe(ceo);
  });

  it('should be able to add teams', () => {

    const children = company.getRoot().getChildren();

    expect(children.size).toBe(0);

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
});
