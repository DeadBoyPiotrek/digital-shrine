import { graphql } from 'msw';

export const handlers = [
  graphql.query('AllPostsPreviews', (req, res, ctx) => {
    return res(
      ctx.data({
        login: 'login',
      })
    );
  }),
];
