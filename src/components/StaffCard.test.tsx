/* tslint:disable no-unused-expression jsx-no-lambda */

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { IStaff } from '../utils/Team';
import StaffCard from './StaffCard';

Enzyme.configure({ adapter: new Adapter()});

describe('StaffCard', () => {
    it('should render', () => {
        const component = shallow(<StaffCard staff={{} as IStaff}/>)
        expect(component).toMatchSnapshot();
    });
});