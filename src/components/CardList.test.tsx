/* tslint:disable no-unused-expression jsx-no-lambda */

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Company from '../utils/Company';
import Team from '../utils/Team';
import CardList from './CardList';

Enzyme.configure({ adapter: new Adapter()});

const dummyCompany = new Company('Dummy');
const dummyTeam = new Team('Dummy Team');
dummyCompany.addTeam(dummyTeam, ['Dummy']);

describe('TeamCard', () => {
    it('should render', () => {
        const component = shallow(<CardList renderTarget={dummyTeam} company={dummyCompany} setHeader={jest.fn()} />)
        expect(component).toMatchSnapshot();
    });
});
