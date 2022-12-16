import { Card, CardBody, Grid, GridItem } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`
        );
        const data = await res.json();
        setPokemons(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [pokemons]);
  return (
    <div>
      <Grid gridTemplateColumns="repeat(4,1fr)" gap={15}>
        {pokemons.map((poke,key) => (
          <GridItem w="100%" key={key}>
            <Link href={`/pokemon/${key+1}`}>
              <Card>
                <CardBody>{poke.name}</CardBody>
              </Card>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}
// // This gets called on every request
// export async function getServerSideProps() {
//     // Fetch data from external API
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=0`)
//     const pokemons = await res.json()
//    console.log(pokemons)

//     // Pass data to the page via props
//     return { props: { pokemons } }
//   }
