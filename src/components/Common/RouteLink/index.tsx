import React from "react";
import { Link } from "react-router-dom";
import MuiLink from "@mui/material/Link";

type RouteLinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.KeyboardEvent<HTMLAnchorElement>
  ) => void;
  color?: string;
};

function RouteLink({
  to,
  children,
  className,
  onClick,
  color,
}: RouteLinkProps) {
  const handleClick = React.useCallback(
    (
      e:
        | React.MouseEvent<HTMLAnchorElement>
        | React.KeyboardEvent<HTMLAnchorElement>
    ) => {
      e.stopPropagation?.();
      onClick?.(e);
    },
    [onClick]
  );

  let style;
  if (color) style = { color };

  return (
    <MuiLink
      component={Link}
      to={to || "#"}
      className={className}
      onClick={handleClick}
      style={style}
    >
      {children}
    </MuiLink>
  );
}

export default RouteLink;
