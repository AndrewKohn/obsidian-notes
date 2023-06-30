import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { updateFilePath } from './utils/updateFilePath';
import { getFileName } from './utils/getFileName';
import App from './App';

describe('<App />', () => {
  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const primaryHeading = screen.getByRole('heading', { level: 1 });

    expect(primaryHeading).toBeInTheDocument();
    expect(primaryHeading).toHaveTextContent('O(n)otes');
  });

  describe('updateFilePath function', () => {
    it('should correctly update the file path', () => {
      const filePath = '..\\obsidian\\Test\\Test.md';
      const expectedUpdatedPath = '../obsidian/Test/Test.md';
      const updatedFilePath = updateFilePath(filePath);

      expect(updatedFilePath).toBe(expectedUpdatedPath);
    });
  });

  describe('getFileName function', () => {
    it('should correctly return the file name', () => {
      const filePath = '../obsidian/Test/TestFile.md';
      const expectedFilePath = 'TestFile';
      const getTestFileName = getFileName(filePath);

      expect(getTestFileName).toBe(expectedFilePath);
    });
  });
});
