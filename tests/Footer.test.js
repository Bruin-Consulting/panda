import React from 'react';
import renderer from 'react-test-renderer';

import Footer from '../client/src/components/Footer.jsx';

describe('footer component', () => {
  test('it should create a section with id=footer', () => {
      const footer = renderer.create(<Footer/>);
      let footerJson = footer.toJSON();
      expect(footerJson.props.id).toEqual('footer');
  });
});