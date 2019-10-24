import React from 'react';
import { shallow } from 'enzyme';
import LanguageDisplay from '../components/LanguageDisplay';


describe('LanguageDisplay Component', () => {
    it('should render without errors', () => {
        const component = shallow(<LanguageDisplay />);
    });
})
