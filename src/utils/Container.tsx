import { ReactNode } from "react";
import Styles from "../styles/Container.module.css";

export type TContainerProps = {
  children: ReactNode;
};
const Container = ({ children }: TContainerProps) => {
  return <div className={Styles.MainContainer}>{children}</div>;
};

export default Container;
