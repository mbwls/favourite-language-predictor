import React from 'react';
import { findByTestAttr } from '../utils';
import { shallow } from 'enzyme';
import Header from '../components/Header';

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
}

describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render a detective', () => {
        const detective = findByTestAttr(component, 'detective');
        expect(detective.length).toBe(1);
    });
    
    it('Should render a title', () => {
        const title = findByTestAttr(component, 'title');
        expect(title.length).toBe(1);
    });

    it('Should render a description', () => {
        const description = findByTestAttr(component, 'description');
        expect(description.length).toBe(1);
    });

})
