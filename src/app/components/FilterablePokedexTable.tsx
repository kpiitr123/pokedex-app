import React, { useState } from 'react';
import { PokemonTypeSelection } from './PokemonTypeSelection';
import { PokedexTable } from './PokedexTable';
import { trpc } from '@/utils/trpc';


export const FilterablePokedexTable: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined);

  const { data: pokemons, isLoading } = trpc.pokemon.getPokemonByType.useQuery(selectedType);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <PokemonTypeSelection selectedType={selectedType} selectType={setSelectedType} />
      {pokemons && <PokedexTable pokemons={pokemons} />}
    </div>
  );
};