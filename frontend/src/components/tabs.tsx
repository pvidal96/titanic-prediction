import React, { Children, PropsWithChildren, useState } from 'react';
import { PanelProps } from './panel';

type TabsProps = {
  initialSelection?: number;
};

/**
 * Represents the header tabs
 */
const Tabs: React.FC<PropsWithChildren<TabsProps>> = ({
  initialSelection,
  children,
}) => {
  const [selected, setSelected] = useState(initialSelection || 0);

  const handleChange = (index: number) => {
    setSelected(index);
  };

  const childElements = children as React.ReactElement<PanelProps>[];

  return (
    <>
      <ul>
        {Children.map(
          childElements,
          (elem: React.ReactElement<PanelProps>, index: number) => {
            let style = index === selected ? 'selected' : '';
            return (
              <li
                key={index}
                className={style}
                onClick={() => handleChange(index)}
              >
                {elem.props.title}
              </li>
            );
          },
        )}
      </ul>
      <div className="tab">{childElements[selected]}</div>
    </>
  );
};

export default Tabs;
