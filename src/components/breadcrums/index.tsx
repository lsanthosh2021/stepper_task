import React from "react";
import { NavLink } from "react-router-dom";
type props = {
  links: { link: string; title: string }[];
};

export default function BreadCrums({ links = [] }: props) {
  return (
    <div className="d-flex">
      {links.map((e, i) => (
        <>
          {!!i && <span className="px-2">{">"}</span>}
          <NavLink
            key={`LINK_${i}`}
            to={e.link}
            className={
              "text-decoration-none " +
              (i === links.length - 1 ? "text-muted" : "")
            }
          >
            {e.title}
          </NavLink>
        </>
      ))}
    </div>
  );
}
