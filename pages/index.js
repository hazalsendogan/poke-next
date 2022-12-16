import Head from 'next/head'
import Image from 'next/image'

import {Roboto} from "@next/font/google";
import Pokemons from '../components/Pokemons';
const roboto = Roboto({ weight: ["400","500","700"], subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokemons</title>
      </Head>
      <main className={roboto.className}>
        <Pokemons/>
      </main>
    </>
  )
}
