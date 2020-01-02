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
  });
  describe('user interaction', () => {
    it('should update the state property `item`', () => {
      expect(wrapper.state().item).toEqual(item);
    });
  });
});