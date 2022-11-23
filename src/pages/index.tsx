import Head from "next/head";
import { Fragment } from "react";

import { NextPageWithLayout } from "~/types/common.types";
import { Layout } from "~/components/Layout";
import Container from "~/components/Container/Container.component";
import { PlaylistModelWithId } from "~/models/playlist.model";
import playlistData from "~/data/playlistData.json";
import Main from "~/views/Main/Main.view";

const Home: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>DaftAcademy - WebApp 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Main items={playlistData as Array<PlaylistModelWithId>} />
      </Container>
    </Fragment>
  );
};

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Home;
