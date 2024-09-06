
import React, { useState } from 'react';
import { trpc } from '../utils/trpc';
import { PokedexTable } from './components/PokedexTable';
import { TextField, Button, Box } from '@mui/material';

export default function Pokedex() {
  const [pokemonNames, setPokemonNames] = useState('');
  const { data: pokemons, refetch } = trpc.pokemon.getPokemonArray.useQuery(pokemonNames.split(','), {
    enabled: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    refetch();
  };

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', pt: 4 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Pokemon Names (comma-separated)"
          value={pokemonNames}
          onChange={(e) => setPokemonNames(e.target.value)}
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Search
        </Button>
      </form>
      {pokemons && (
        <Box sx={{ mt: 4 }}>
          <PokedexTable pokemons={pokemons} />
        </Box>)}
        </Box>)}