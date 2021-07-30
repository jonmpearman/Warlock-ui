import React from 'react';
import { render } from '../test-setup/test-utils';

import { Button } from './WarButton';

test('Button Renders', () => {
    const { container } = render(<Button onClick={() => 1}>Test Button</Button>);

    expect(container).toMatchSnapshot();
});