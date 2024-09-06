import React from 'react';
import { TableRow, TableCell, Avatar } from '@mui/material';

interface PokemonRowProps {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

export const PokemonRow: React.FC<PokemonRowProps> = ({ id, name, types, sprite }) => {
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{types.join(', ')}</TableCell>
      <TableCell>
        <Avatar src={sprite} alt={name} />
      </TableCell>
    </TableRow>
  );
};