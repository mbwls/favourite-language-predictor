import React from 'react';
import { shallow } from 'enzyme';
import LanguageFinder from '../components/LanguageFinder';


describe('LanguageFinder Component', () => {
    it('should render without errors', () => {
        const component = shallow(<LanguageFinder />);
    });
})
