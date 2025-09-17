import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumbs.module.css";

export default function Breadcrumbs() {
    const location = useLocation();

    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <nav className={styles.breadcrumbs}>
            <Link to="/">Home</Link>
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;

                const displayName = name
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase());

                return isLast ? (
                    <span key={routeTo}> / {displayName}</span>
                ) : (
                    <span key={routeTo}>
            {" "} / <Link to={routeTo}>{displayName}</Link>
          </span>
                );
            })}
        </nav>
    );
}
