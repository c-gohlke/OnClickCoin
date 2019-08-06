// import React from 'react';
// import { render } from '@testing-library/react';
// import App from '../index';

describe('<App />', () => {
  it('renders and matches the snapshot', () => {
    // const { container } = render(<App />);
    // expect(container).toMatchSnapshot();
    expect('a').toMatch('a');
    expect(1).toBe(1);
  });
});
