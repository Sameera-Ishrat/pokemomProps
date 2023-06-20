const PokemonRow = ({ pokemon, onSelect }) => {
  const selectHandler = () => {
    console.log(onSelect(pokemon));
    onSelect(pokemon);
  };
  return (
    <tr key={pokemon.id}>
      <td className="margin">{pokemon.name.english}</td>
      <td className="margin">{pokemon.type.join(", ")}</td>
      <td>
        <button onClick={selectHandler}>Select</button>
      </td>
    </tr>
  );
};

export default PokemonRow;
