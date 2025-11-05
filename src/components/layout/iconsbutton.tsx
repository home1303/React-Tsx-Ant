import React from "react";

type IconProps = {
  iconName?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

const getIconPath = (name: string) => `/icons/${name}.svg`;

const Icon: React.FC<IconProps> = ({ iconName, onClick, children }) => {
  return (
    <div className="btn-icon" onClick={onClick}>
      {iconName && <img src={getIconPath(iconName)} alt={iconName} />}
      {children && <span className="btn-text">{children}</span>}
    </div>
  );
};

export default Icon;
