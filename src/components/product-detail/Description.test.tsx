import { render } from '../../utils/test-helpers';

import Description from './Description';

const context = describe;

describe('', () => {
  context('', () => {
    it('renders nothing', () => {
      const text = '';

      const { container } = render(<Description value={text} />);

      expect(container).toBeEmptyDOMElement();
    });
  });
});
