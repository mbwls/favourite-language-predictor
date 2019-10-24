import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';


describe('Header Component', () => {
    it('Should render without errors', () => {
        const component = shallow(<Header />);
    });

    it('Should render a detective', () => {
        const component = shallow(<Header />);
        const detective = component.find('span[aria-label="detective"]');
        expect(detective.length).toBe(1);
    });

    it('Should render a title', () => {
        const component = shallow(<Header />);
        const title = component.find('.title-header');
        expect(title.length).toBe(1);
    });

    it('Should render a description', () => {
        const component = shallow(<Header />);
        const description = component.find('h4');
        expect(description.length).toBe(1);
    });

})
