import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";
import Footer from "@/components/Footer";

export default function App({
  Component,
  pageProps,
}: AppProps): React.JSX.Element {
  return (
    <>
      <Head>
        <title>GitSerach</title>
        <meta
          key="desc"
          name="description"
          content="Search the github with advance filters"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextNProgress color="#0070f3" />
      <Navbar />
      <ToastContainer />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
