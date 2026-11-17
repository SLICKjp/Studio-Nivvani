import { Link } from "react-router-dom";
import "./button.css";

// variant: "solid" | "outline" | "light" (outline for dark backgrounds)
// Pass `to` for an internal page, or `href` for an external/mailto link.
const HnButton = ({ to, href, children, variant = "solid", ...rest }) => {
  const className = `hn-btn hn-btn--${variant}`;
  const inner = (
    <>
      <span>{children}</span>
      <svg className="hn-btn__arrow" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 12h15m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );

  return to ? (
    <Link className={className} to={to} {...rest}>
      {inner}
    </Link>
  ) : (
    <a className={className} href={href} {...rest}>
      {inner}
    </a>
  );
};

export default HnButton;
