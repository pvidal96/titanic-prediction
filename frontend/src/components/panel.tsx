import { PropsWithChildren } from 'react';

export type PanelProps = {
  title: string;
};

const Panel: React.FC<PropsWithChildren<PanelProps>> = (props) => {
  return <>{props.children}</>;
};

export default Panel;
