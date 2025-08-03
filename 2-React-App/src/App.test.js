import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
  it('renders the header and initial content', () => {
    render(<App />);
    expect(screen.getByText('React.js')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /why react/i })).toBeInTheDocument();
    expect(screen.getByText('React is extremely popular')).toBeInTheDocument();
  });

  it('shows core features when Core Features tab is clicked', () => {
    render(<App />);
    const coreBtn = screen.getByRole('button', { name: /core features/i });
    fireEvent.click(coreBtn);
    expect(screen.getByText('Components, JSX & Props')).toBeInTheDocument();
    expect(screen.getByText('Dynamic rendering')).toBeInTheDocument();
    expect(coreBtn).toHaveClass('active');
  });

  it('shows related resources when Related Resources tab is clicked', () => {
    render(<App />);
    const resBtn = screen.getByRole('button', { name: /related resources/i });
    fireEvent.click(resBtn);
    expect(screen.getByText('Official web page (react.dev)')).toBeInTheDocument();
    expect(screen.getByText('React Native (build native mobile apps with React)')).toBeInTheDocument();
    expect(resBtn).toHaveClass('active');
  });

  it('highlights only the active tab', () => {
    render(<App />);
    const whyBtn = screen.getByRole('button', { name: /why react/i });
    const coreBtn = screen.getByRole('button', { name: /core features/i });
    const resBtn = screen.getByRole('button', { name: /related resources/i });
    // Initial
    expect(whyBtn).toHaveClass('active');
    expect(coreBtn).not.toHaveClass('active');
    expect(resBtn).not.toHaveClass('active');
    // Click Core Features
    fireEvent.click(coreBtn);
    expect(coreBtn).toHaveClass('active');
    expect(whyBtn).not.toHaveClass('active');
    expect(resBtn).not.toHaveClass('active');
    // Click Related Resources
    fireEvent.click(resBtn);
    expect(resBtn).toHaveClass('active');
    expect(coreBtn).not.toHaveClass('active');
    expect(whyBtn).not.toHaveClass('active');
  });
});
