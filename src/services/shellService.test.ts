import { describe, expect, test } from '@jest/globals';
import fetch from 'jest-fetch-mock';
import executeInShell from './shellService';

describe('Shell Service Endpoints', () => {
  test(':shutdown [success]', () => {
    fetch.mockResponseOnce('', { status: 200 });
    executeInShell('shutdown').then((status) => { expect(status).toBe(true); });
  });

  test(':shutdown [failure]', () => {
    fetch.mockResponseOnce('', { status: 500 });
    executeInShell('shutdown').then((status) => { expect(status).toBeFalsy(); });
  });
});
