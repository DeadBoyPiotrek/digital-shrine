import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { Providers } from './app/components/providers/providers';

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };
