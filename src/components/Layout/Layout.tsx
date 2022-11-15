import { Fragment, ReactNode } from "react";

import styles from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <aside className={styles.header}>
        <h1>Sidebar</h1>
      </aside>
      <main className={styles.main}> {children} </main>
      <footer className={styles.footer}> footer </footer>
    </Fragment>
  );
};
