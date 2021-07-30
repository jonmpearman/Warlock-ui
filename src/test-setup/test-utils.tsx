import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { BaseTheme } from '../theme/default';

const BaseProvider: FC = ({ children }) => {
    return (
    <ThemeProvider theme={BaseTheme}>
      {children}
    </ThemeProvider>
  )
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: BaseProvider, ...options });

export * from '@testing-library/react';
export { customRender as render };