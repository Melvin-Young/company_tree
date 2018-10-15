/* tslint:disable no-unused-expression jsx-no-lambda */

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Team from '../utils/Team';
import HeaderCard from './HeaderCard';

Enzyme.configure({ adapter: new Adapter()});

const dummyFunc = jest.fn();
const dummyTeam = new Team('Dummy Team');

describe('TeamCard', () => {
  it('should render', () => {
    const component = shallow(<HeaderCard team={dummyTeam} setHeader={() => undefined} triggerShowStaff={dummyFunc} triggerShowTeams={dummyFunc} />)
    expect(component).toMatchSnapshot();
  });
});