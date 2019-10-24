import React from 'react';
import { shallow } from 'enzyme';
import LanguageDisplay from '../components/LanguageDisplay';
import { italic } from 'ansi-colors';

const setUp = (props = {}) => {
    const component = shallow(<LanguageDisplay {...props} />);
    return component;
}

describe('Language Display Component', () => {

    describe('Is invalid', () => {
        it('Should return "invalid username"', () => {
            const wrapper = setUp({
                language: '',
                valid: false
            });
            expect(wrapper.find('h3').length).toBe(1);
            expect(wrapper.find('h3').text()).toBe('Invalid username!');
        })
    });

    describe('Is valid with no language', () => {
        it('Should be hidden', () => {
            const wrapper = setUp({
                language: '',
                valid: true
            });
            expect(wrapper.find('h3').length).toBe(0);
        })
    });

    describe('Is invalid', () => {
        it('Should return "no valid repositories"', () => {
            const wrapper = setUp({
                language: 'NO REPOS',
                valid: true
            });
            expect(wrapper.find('h3').length).toBe(1);
            expect(wrapper.find('h3').text()).toBe('User has no valid respositories!');
        })
    });

    describe('Is valid with language', () => {
        it('Should return results', () => {
            const wrapper = setUp({
                language: 'JavaScript',
                valid: true
            });
            expect(wrapper.find('h3').length).toBe(1);
            expect(wrapper.find('h3').text()).toBe('Favourite language: JavaScript');
        })
    });

})
