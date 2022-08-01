/* eslint-disable no-undef */
import { transformQuerytoObj, transformObjtoQuery } from 'utils/helpers/general';

it('Test helper transform query to object - case empty string', () => {
  const queryParsed = JSON.stringify(transformQuerytoObj(''));
  const expectQueryParsed = JSON.stringify({});
  expect(queryParsed).toEqual(expectQueryParsed);
});

it('Test helper transform query to object - case 1 key', () => {
  const queryParsed = JSON.stringify(transformQuerytoObj('?keyword=test'));
  const expectQueryParsed = JSON.stringify({ keyword: 'test' });
  expect(queryParsed).toEqual(expectQueryParsed);
});

it('Test helper transform query to object - case empty value', () => {
  const queryParsed = JSON.stringify(transformQuerytoObj('?keyword='));
  const expectQueryParsed = JSON.stringify({ });
  expect(queryParsed).toEqual(expectQueryParsed);
});

it('Test helper transform query to object - case more than 1 key', () => {
  const queryParsed = JSON.stringify(transformQuerytoObj('?keyword=test&type=user'));
  const expectQueryParsed = JSON.stringify({ keyword: 'test', type: 'user' });
  expect(queryParsed).toEqual(expectQueryParsed);
});

it('Test helper transform object to query - case empty object', () => {
  const query = transformObjtoQuery({});
  const queryExpect = '?';
  expect(query).toEqual(queryExpect);
});

it('Test helper transform object to query - case 1 key', () => {
  const query = transformObjtoQuery({ keyword: 'test' });
  const queryExpect = '?keyword=test&';
  expect(query).toEqual(queryExpect);
});

it('Test helper transform object to query - case empty key', () => {
  const query = transformObjtoQuery({ keyword: '' });
  const queryExpect = '?keyword=&';
  expect(query).toEqual(queryExpect);
});

it('Test helper transform object to query - case more than 1 key', () => {
  const query = transformObjtoQuery({ keyword: 'test', page: '1' });
  const queryExpect = '?keyword=test&page=1&';
  expect(query).toEqual(queryExpect);
});
