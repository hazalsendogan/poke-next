import React from "react";
import Head from "next/head";
import { Roboto } from "@next/font/google";
import { Card, Grid, GridItem, Heading, CardBody } from "@chakra-ui/react";
const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

const Pokemon = ({ pokemon }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={roboto.className}>
        <Heading as="h2">Pokemon Detail</Heading>
        <Grid templateColumns="repeat(3,1fr)" gap={15}>
          <GridItem w="100%" colSpan={1} rowSpan={1}>
            <strong>Name:</strong>
            <span>{pokemon.name}</span>
          </GridItem>
          <GridItem w="100%" colSpan={1} rowSpan={1}>
            <strong>Weight</strong>
            <span>{pokemon.weight}</span>
          </GridItem>
          <GridItem w="100%" colSpan={1} rowSpan={1}>
            <strong>Height</strong>
            <span>{pokemon.height}</span>
          </GridItem>
          <GridItem w="100%" colSpan={3} rowSpan={1}>
            <strong>Abilities:</strong>
          </GridItem>
          {pokemon.abilities.map((item, key) => (
            <GridItem w="100%" key={key}>
              <Card>
                <CardBody>{item.ability.name}</CardBody>
              </Card>
            </GridItem>
          ))}
          <GridItem w="100%" colSpan={3} rowSpan={1}>
            <strong>Types:</strong>
          </GridItem>
          {pokemon.types.map((item, key) => (
            <GridItem w="100%" key={key}>
              <Card>
                <CardBody>{item.type.name}</CardBody>
              </Card>
            </GridItem>
          ))}
          <GridItem w="100%" colSpan={3} rowSpan={1}>
            <strong>Game Indices:</strong>
          </GridItem>
          {pokemon.game_indices.map((item, key) => (
            <GridItem w="100%" key={key}>
              <Card>
                <CardBody>{item.version.name}</CardBody>
              </Card>
            </GridItem>
          ))}
          <GridItem w="100%" colSpan={3} rowSpan={1}>
            <strong>Moves:</strong>
          </GridItem>
          {pokemon.moves.map((item, key) => (
            <GridItem w="100%" key={key}>
              <Card>
                <CardBody>{item.move.name}</CardBody>
              </Card>
            </GridItem>
          ))}
          
        </Grid>
      </main>
    </div>
  );
};
export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await res.json();
  return {
    props: { pokemon },
  };
};

export default Pokemon;
