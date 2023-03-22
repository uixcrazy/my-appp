// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import clsx from "clsx";
// import { isEmpty } from "lodash";
// import Image from "next/image";

// import Footer from "./Footer";
import Header from "./Header";

// hook

// import styles from "./Layout.module.scss";

type Props = {
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
