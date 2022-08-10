// src/server/router/index.ts
import superjson from 'superjson';
import { createRouter } from './context';

export const appRouter = createRouter()
  .transformer(superjson)
  .query('dashboard', {
    async resolve({ ctx }) {
      if (!ctx.session) {
        return {};
      }

      try {
        return {
          hello: 'whats upppppppp',
        };
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;
