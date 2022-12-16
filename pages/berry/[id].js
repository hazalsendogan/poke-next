import React, { useState, useEffect } from "react";
import { Card, CardBody, Grid, GridItem,Heading } from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";
import { Roboto } from "@next/font/google";
const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function Berry({berry}) {
  return (
    <>
    <Head>
      <title>Berry</title>
    </Head>
    <main className={roboto.className}>
    <Heading as="h2">Berry Detail</Heading>
        <Grid templateColumns="repeat(3,1fr)" gap={15}>
          <GridItem w="100%" colSpan={1} rowSpan={1}>
            <strong>Name:</strong>
            <span>{berry.name}</span>
          </GridItem>
          <GridItem w="100%" colSpan={1} rowSpan={1}>
            <strong>Growth Time:</strong>
            <span>{berry.growth_time}</span>
          </GridItem>
          <GridItem w="100%" colSpan={1} rowSpan={1}>
            <strong>Max Harvest:</strong>
            <span>{berry.max_harvest}</span>
          </GridItem>
          <GridItem w="100%" colSpan={1} rowSpan={1}>
            <strong>Natural Gift Power:</strong>
            <span>{berry.natural_gift_power}</span>
          </GridItem>
          <GridItem w="100%" colSpan={1} rowSpan={1}>
            <strong>Size</strong>
            <span>{berry.size}</span>
          </GridItem>
          <GridItem w="100%" colSpan={1} rowSpan={1}>
            <strong>Firmness</strong>
            <span>{berry.firmness.name}</span>
          </GridItem>
          <GridItem w="100%" colSpan={1} rowSpan={1}>
            <strong>Item</strong>
            <span>{berry.item.name}</span>
          </GridItem>
          <GridItem w="100%" colSpan={1} rowSpan={1}>
            <strong>Natural Gift Type</strong>
            <span>{berry.natural_gift_type.name}</span>
          </GridItem>
          <GridItem w="100%" colSpan={1} rowSpan={1}>
            <strong>Soil Dryness</strong>
            <span>{berry.soil_dryness}</span>
          </GridItem>
          <GridItem w="100%" colSpan={3} rowSpan={1}>
            <strong>Flavors:</strong>
          </GridItem>
          {berry.flavors.map((item, key) => (
            <GridItem w="100%" key={key}>
              <Card>
                <CardBody>{item.flavor.name}</CardBody>
              </Card>
            </GridItem>
          ))}
          
        </Grid>
    </main>
  </>
  )
}
export const getServerSideProps = async (context) => {
    const { id } = context.query;
    const res = await fetch(`https://pokeapi.co/api/v2/berry/${id}`);
    const berry = await res.json();
    return {
      props: { berry },
    };
  };
