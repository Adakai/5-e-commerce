import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  describe('initial state', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
    });
    it('should have the `th` "Items"', () => {
      expect(wrapper.contains(<th>Items</th>)).toBe(true);
    });
    it('should have a `button` element', () => {
      expect(wrapper.containsMatchingElement(<button>Add item</button>)).toBe(
        true
      );
    });
    it('should have a `input` element', () => {
      expect(wrapper.containsMatchingElement(<input />)).toBe(true);
    });
    it('`button` should be disabled', () => {
      const button = wrapper.find('button').first();
      const actual = button.props().disabled;
      expect(actual).toBe(true);
    });
  });
  describe('user interaction', () => {
    const item = 'qwerty'
    beforeEach(() => {
      const input = wrapper.find('input').first();
      input.simulate('change', {
        target: { value: item }
      });
    });
    it('should update the state property `item`', () => {
      expect(wrapper.state().item).toEqual(item);
    });
    it('should enable `button`', () => {
      const button = wrapper.find('button').first();
      const actual = button.props().disabled;
      expect(actual).toBe(false);
    });
  });
});