import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextPageWithLayout } from "~/types/common.types";
import PlayerProvider from "~/context/player/player.context";

type Props = AppProps & { Component: NextPageWithLayout };

function MyApp({ Component, pageProps }: Props) {
  const withLayout = Component.getLayout ?? ((page) => page);

  return (
    <PlayerProvider>{withLayout(<Component {...pageProps} />)}</PlayerProvider>
  );
}

export default MyApp;
