
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

interface PokemonTypeSelectionProps {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
}

export const PokemonTypeSelection: React.FC<PokemonTypeSelectionProps> = ({ selectedType, selectType }) => {
  const types = ['grass', 'fire', 'water', 'electric', 'psychic', 'normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'ice', 'dragon', 'dark', 'fairy'];

  return (
    <FormControl fullWidth>
      <InputLabel>Pokemon Type</InputLabel>
      <Select
        value={selectedType || ''}
        onChange={(e) => selectType(e.target.value as string)}
      >
        <MenuItem value="">All Types</MenuItem>
        {types.map((type) => (
          <MenuItem key={type} value={type}>{type}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};