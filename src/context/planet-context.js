import React, { useState } from 'react';
import agent from '../api/agents';

export const PlanetContext = React.createContext({
  planet: {},
  handleSetPlanet: (id) => {},
  handleClearPlanet: () => {},
});

const PlanetContextProvider = (props) => {
  const [planet, setPlanet] = useState(null);

  const handleSetPlanet = (id) => {
    if (!!id) {
      console.log(id);
      agent.Planet.details(id).then((res) => {
        if (!!res) {
          setPlanet(res);
          console.log(res);
        }
      });
    }
  };

  const handleClearPlanet = () => {
    setPlanet(null);
  };

  return (
    <PlanetContext.Provider
      value={{
        planet,
        handleSetPlanet,
        handleClearPlanet,
      }}
    >
      {props.children}
    </PlanetContext.Provider>
  );
};

export default PlanetContextProvider;
