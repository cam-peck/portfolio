import { rest } from 'msw';
export const handlers = [
  rest.post('/api/firebase', async (req, res, ctx) => {
    const { name, email, message } = await req.json();
    if (name === 'Cameroonie') {
      return res(
        ctx.status(200),
        ctx.json([
          {
            name,
            email,
            message,
          },
        ]),
      );
    } else
      return res(
        ctx.status(500),
        ctx.json({
          result: 'mocking server error',
        }),
      );
  }),
];
