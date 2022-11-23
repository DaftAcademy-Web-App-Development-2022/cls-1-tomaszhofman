import { Fragment, ReactNode } from "react";

import styles from "./Layout.module.css";
import Sidebar from "~/components/Sidebar/Sidebar.component";
import Player from "~/components/Player/Player.component";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <aside className={styles.header}>
        <Sidebar />
      </aside>
      <main className={styles.main}> {children} </main>
      <footer className={styles.footer}>
        <Player />
      </footer>
    </Fragment>
  );
};
