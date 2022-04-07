import React from "react";

export const Link = ({ className, href, children }) => {
    const onClick = (event) => {
      if (event.metaKey || event.ctrlKey) {
          return;
      }

      event.preventDefault();
      window.history.pushState({}, "", href);

      const navEvent = new PopStateEvent("popstate");
      window.dispatchEvent(navEvent);  // this is going to tell the Route components that the URL has just changed.
    };

    return (
        <a onClick={onClick} className={className} href={href}>
         {children}
        </a>
    );
};

export default Link;