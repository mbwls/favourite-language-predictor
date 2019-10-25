import React from 'react';
import { findByTestAttr } from '../utils';
import { shallow } from 'enzyme';
import LanguageFinder from '../components/LanguageFinder';

const setUp = (props = {}) => {
    const component = shallow(<LanguageFinder {...props} />);
    return component;
}

describe('LanguageFinder Component', () => {
    describe('Renders', () => {
        let component;
        beforeEach(() => {
            component = setUp();
        });
        it('Should render username input text box', () => {
            const input = findByTestAttr(component, 'username-input');
            expect(input.length).toBe(1);
        });

        it('Should render search button', () => {
            const button = findByTestAttr(component, 'search-button');
            expect(button.length).toBe(1);
        });

        it('Should render language display component', () => {
            const langDisp = findByTestAttr(component, 'language-display');
            expect(langDisp.length).toBe(1);
        });
    });
})
