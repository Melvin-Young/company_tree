/* tslint:disable no-unused-expression jsx-no-lambda */

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Company from '../utils/Company';
import Team from '../utils/Team';
import TeamCard from './TeamCard';

Enzyme.configure({ adapter: new Adapter()});

const dummyCompany = new Company('Dummy');
const dummyTeam = new Team('Dummy Team');
dummyCompany.addTeam(dummyTeam, ['Dummy']);

describe('TeamCard', () => {    
  it('should render', () => {
    const component = shallow(<TeamCard company={dummyCompany} setHeader={() => undefined} team={dummyTeam} />)
    expect(component).toMatchSnapshot();
  });
});