import { describe, expect, test } from '@jest/globals';
import executeInShell from './shellService';

describe(
  'Shell Service Endpoints',
  () => {
    test(
      ':shutdown [success]',
      async () => {
        const status = await executeInShell('shutdown');
        expect(status).toBe(true);
      },
    );

    test(
      ':shutdown [failure]',
      async () => {
        fetch.mockResponseOnce(
          '',
          { status: 500 },
        );

        const status = await executeInShell('shutdown');
        expect(status).toBeFalsy();
      },
    );
  },
);
