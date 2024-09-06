

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { PokemonRow } from './PokemonRow';

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

interface PokedexTableProps {
  pokemons: Pokemon[];
}

export const PokedexTable: React.FC<PokedexTableProps> = ({ pokemons }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Types</TableCell>
            <TableCell>Sprite</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemons.map((pokemon) => (
            <PokemonRow key={pokemon.id} {...pokemon} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};