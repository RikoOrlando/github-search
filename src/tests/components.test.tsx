/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Navbar from 'components/Navbar';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/theme';
import Pagination from 'components/Pagination';
import LimitedRequest from 'components/LimitedRequest';
import NoData from 'components/NoData';
import LoadingPage from 'components/LoadingPage';
import Skeleton from 'components/Skeleton';

test('Render Navbar', () => {
  render(<ThemeProvider theme={theme}><Navbar /></ThemeProvider>);
  const title = screen.getByTitle('Header');
  expect(title).toBeInTheDocument();
});

test('Render limited request', async () => {
  const handleTryAgainMock = () => {};
  render(<ThemeProvider theme={theme}><LimitedRequest handleTryAgain={handleTryAgainMock} /></ThemeProvider>);
  const title = screen.getByRole('contentinfo');
  expect(title).toBeInTheDocument();
});

test('Render no Data', async () => {
  render(<ThemeProvider theme={theme}><NoData /></ThemeProvider>);
  const title = screen.getByRole('contentinfo');
  expect(title).toBeInTheDocument();
});

test('Render pagination', async () => {
  const totalPageMock = 10;
  const activePageMock = '1';
  const onChangeMock = () => {};
  render(<ThemeProvider theme={theme}><Pagination totalPage={totalPageMock} activePage={activePageMock} onChange={onChangeMock} /></ThemeProvider>);
  const previous = screen.getByTitle('previous');
  const next = screen.getByTitle('next');
  expect(previous).toBeInTheDocument();
  expect(next).toBeInTheDocument();
});

test('Render Skeleton', async () => {
  render(<ThemeProvider theme={theme}><Skeleton /></ThemeProvider>);
  const staticData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  staticData.forEach((el) => {
    const title = screen.getByTitle(`animation-${el}`);
    expect(title).toBeInTheDocument();
  });
});

test('Render Loading Page', async () => {
  render(<ThemeProvider theme={theme}><LoadingPage /></ThemeProvider>);
  const title = screen.getByTitle('spinner');
  expect(title).toBeInTheDocument();
});
