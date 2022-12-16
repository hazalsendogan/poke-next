import React, { useState, useEffect } from "react";
import { Card, CardBody, Grid, GridItem } from "@chakra-ui/react";
import Link from "next/link";

export default function BerryList() {
  const [berries, setBerries] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/berry");
        const data = await res.json();
        setBerries(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [berries]);
  return (
    <div>
      <Grid gridTemplateColumns="repeat(4,1fr)" gap={15}>
        {berries.map((berry, key) => (
          <GridItem w="100%" key={key}>
            <Link href={`/berry/${key + 1}`}>
              <Card>
                <CardBody>{berry.name}</CardBody>
              </Card>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}
