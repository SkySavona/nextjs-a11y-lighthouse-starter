# Next.js 15 Accessibility Testing Starter

A comprehensive starter template for Next.js 15 applications with built-in accessibility testing using Jest-axe and performance testing with Lighthouse CI.

## Features

- ✅ **Next.js 15**: Latest Next.js framework with App Router
- ♿ **Accessibility Testing**: Jest-axe for automated a11y checks
- 🚀 **Performance Testing**: Lighthouse CI integration
- 🔄 **CI/CD Ready**: GitHub Actions workflows included
- 🔧 **Modern JavaScript**: Babel configuration included
- 📱 **Responsive Design**: Tailwind CSS configured

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/nextjs-a11y-starter.git
   cd nextjs-a11y-starter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Testing

### Accessibility Testing

Run the accessibility tests with:

```bash
npm run test:a11y
```

This will run Jest with Jest-axe to check for accessibility violations in your components.

### Performance Testing

Run Lighthouse tests locally:

```bash
npm run build
npm run start
npm run lighthouse
```

## CI/CD Integration

This starter includes GitHub Actions workflows for:

- Running accessibility tests on every push and pull request
- Running Lighthouse performance tests
- Generating reports for both accessibility and performance

To set up GitHub Actions:

1. Push your code to GitHub
2. For Lighthouse CI GitHub integration (optional):
   - Go to your GitHub repository settings
   - Add a secret named `LHCI_GITHUB_APP_TOKEN` with your Lighthouse CI token

## Folder Structure

```
.
├── .github/
│   └── workflows/               # GitHub Actions workflows
│       ├── accessibility-performance.yml
│       └── lighthouserc.json
├── __tests__/
│   └── a11y/                    # Accessibility tests
│       └── homepage.test.tsx
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/              # React components
├── babel.config.js              # Babel configuration
├── jest.config.js               # Jest configuration
├── jest.setup.ts                # Jest setup file
└── package.json
```

## Customizing Tests

### Adding New Accessibility Tests

1. Create a new test file in `__tests__/a11y/`
2. Import the component you want to test
3. Use Jest-axe to check for accessibility violations:

```tsx
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Component from '@/components/Component';

expect.extend(toHaveNoViolations);

describe('Component Accessibility', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<Component />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

### Customizing Lighthouse Configuration

Edit `.github/workflows/lighthouserc.json` to modify performance thresholds and test URLs.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.