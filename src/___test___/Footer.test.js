import React from 'react';
import { shallow, configure } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import Footer from '../components/layout/Footer';
import "../setupTests";

const mockStore = configureMockStore();
const store = mockStore({});

configure({adapter: new Adapter()});

describe('Footer Component', () => {
  it('should render without throwing an error', () => {
    expect(
      shallow(
        <Provider store={store}>
          <Footer />
        </Provider>
      ).exists()
    ).toBe(true);
  });
});
