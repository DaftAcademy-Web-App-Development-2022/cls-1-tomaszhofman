import { NextPage } from "next";
import { ReactElement } from "react";

export type NextPageWithLayout<PageProps = {}> = NextPage<PageProps> & {
  getLayout?: (page: ReactElement) => ReactElement;
};
