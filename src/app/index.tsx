import React, { useState } from 'react';
import { trpc } from '../utils/trpc';
import { PokemonRow } from './components/PokemonRow';
import { TextField, Button, Box } from '@mui/material';

export default function Home() {
  const [pokemonName, setPokemonName] = useState('');
  const { data: pokemon, refetch } = trpc.pokemon.getPokemon.useQuery(pokemonName, {
    enabled: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    refetch();
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', pt: 4 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Pokemon Name"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Search
        </Button>
      </form>
      {pokemon && (
        <Box sx={{ mt: 4 }}>
          <PokemonRow {...pokemon} />
        </Box>
      )}
    </Box>
  );
}