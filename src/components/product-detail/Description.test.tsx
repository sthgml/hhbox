import { screen } from '@testing-library/react';
import { render } from '../../utils/test-helpers';

import Description from './Description';

const context = describe;

describe('Description', () => {
  context('when text is empty', () => { // 비어있다면 어떻게 될까?
    it('renders nothing', () => { // 아무것도 안그려줘야돼
      const text = '';

      const { container } = render(<Description value={text} />);

      expect(container).toBeEmptyDOMElement();
    });
  });

  context('when text is not empty', () => { // 비어있다면 어떻게 될까?
    it('renders multi-line text', () => { // 여러 줄의 글을 그려줘야돼
      const lines = ['1st line', '2nd line', '3rd line'];
      const text = lines.join('\n');

      render(<Description value={text} />);

      lines.forEach((line) => {
        screen.getByText(line);
      });
    });
  });
});
