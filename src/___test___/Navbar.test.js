import React from 'react';
import { shallow, configure } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import Navbar from '../components/layout/Navbar';
import "../setupTests";

const mockStore = configureMockStore();
const store = mockStore({});

configure({adapter: new Adapter()});

describe('Navbar Component', () => {
  it('should render without throwing an error', () => {
    expect(
      shallow(
        <Provider store={store}>
          <Navbar />
        </Provider>
      ).exists()
    ).toBe(true);
  });
});
