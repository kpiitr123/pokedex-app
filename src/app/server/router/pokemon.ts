import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import { prisma } from '../prisma';

export const pokemonRouter = router({
  getPokemon: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      const pokemon = await prisma.pokemon.findUnique({
        where: { name: input },
      });
      return pokemon ? {
        ...pokemon,
        types: pokemon.types.split(','),
      } : null;
    }),

  getPokemonArray: publicProcedure
    .input(z.array(z.string()))
    .query(async ({ input }) => {
      const pokemons = await prisma.pokemon.findMany({
        where: { name: { in: input } },
      });
      return pokemons.map(pokemon => ({
        ...pokemon,
        types: pokemon.types.split(','),
      }));
    }),

  getPokemonByType: publicProcedure
    .input(z.string().optional())
    .query(async ({ input }) => {
      const pokemons = await prisma.pokemon.findMany({
        where: input ? {
          types: { contains: input },
        } : undefined,
      });
      return pokemons.map(pokemon => ({
        ...pokemon,
        types: pokemon.types.split(','),
      }));
    }),
});
