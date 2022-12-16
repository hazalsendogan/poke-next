import React from "react";
import Head from "next/head";
import Image from "next/image";

import { Roboto } from "@next/font/google";
import BerryList from "../../components/BerryList";
const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function Berries() {
  return (
    <>
      <Head>
        <title>Berries</title>
      </Head>
      <main className={roboto.className}>
        <BerryList/>
      </main>
    </>
  );
}
