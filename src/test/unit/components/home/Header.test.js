import React from 'react';
import { shallow } from 'enzyme';
import App from './../../App';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
import { shallowToJson } from 'enzyme-to-json';
import Header from './../../../components/home/Header';
