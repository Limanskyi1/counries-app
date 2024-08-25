import { FC } from "react";

type Props = {
  children: React.ReactNode;
  styles?: {
    [key:string]:string
  }
};

export const Container: FC<Props> = ({ children , styles = {}}) => {
  return <div className="main-container" style={styles}>{children}</div>;
};
