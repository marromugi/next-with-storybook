import { initialize, mswDecorator } from 'msw-storybook-addon';
import '../src/styles/globals.css';

// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator]
  