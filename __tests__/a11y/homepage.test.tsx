import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import Home from '@/app/page';

describe('Home Page Accessibility', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<Home />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});