import React from "react";

const PokemonInfo = ({ name: { english }, base }) => {
  return (
    <table>
      <tbody>
        <h1>{english}</h1>
        {/* {Object.keys(base).map((key) => (
    <tr key={key}>
     <td className='margin'>{key}</td>
     <td className='margin'>{base[key]}</td>
    </tr>
))} */}
        {Object.entries(base).map(([key, value]) => (
          <tr key={key}>
            <td className="margin">{key}</td>
            <td className="margin">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PokemonInfo;
