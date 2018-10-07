import React from 'react';
import { shallow } from 'enzyme';
import App from './../../App';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
import { shallowToJson } from 'enzyme-to-json';
import Header from './../../components/home/Header';

it('should render two div', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('div')).to.have.lengthOf(2);
  expect(wrapper.find('div').length).to.equal(2);
});

it('should render one div with the correct class applied', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App')).to.have.lengthOf(1);
});

/*
it('renders correctly', () => {
  const wrapper = shallow(<App />);   
expect(shallowToJson(wrapper)).toMatchSnapshot();
});*/
