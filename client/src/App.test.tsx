import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { updateFilePath } from './utils/updateFilePath';
import { getFileName } from './utils/getFileName';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
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

  describe('API Call', () => {
    it('should fetch data from API', async () => {
      const mock = new MockAdapter(axios);
      const responseData = ['testFile1', 'testFile2', 'testFile3'];

      mock.onGet('http://localhost:3000/').reply(200, responseData);
      const response = await axios
        .get('http://localhost:3000/')
        .then(res => res.data);
      expect(response).toEqual(responseData);
      mock.restore();
    });
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
