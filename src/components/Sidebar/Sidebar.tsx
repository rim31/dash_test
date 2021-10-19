import React from "react";
import styles from "./Sidebar.module.scss";
import avatar from "../../assets/png/avatar.png";
import sidebarNavLinks from "./SidebarNavLinks";
import { Link, useLocation } from "react-router-dom";

function CapitlizeString(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export default function Sidebar() {
  const location = useLocation();
  return (
    <>
      <aside className={styles.Sidebar}>
        <div className={styles.SidebarContent}>
          <div className={styles.SidebarProfileDetails}>
            <div className={styles.SidebarProfileImageDiv}>
              <img src={avatar} alt="imageBob" />
              <p className={styles.SidebarNotification}>42</p>
            </div>
            <p className={styles.SidebarUserName}>Bob</p>
            <p className={styles.SidebarEmail}>bob@email.com</p>
          </div>
          <nav className={styles.SidebarNav}>
            <ul className={styles.SidebarNavItems}>
              {sidebarNavLinks.map((sidebarNavLink) => (
                <li className={styles.SidebarNavItem} key={sidebarNavLink}>
                  <Link
                    className={
                      location.pathname === `/${sidebarNavLink}`
                        ? styles.SidebarNavLinkActive
                        : styles.SidebarNavLink
                    }
                    to={`${sidebarNavLink}`}
                  >
                    {CapitlizeString(sidebarNavLink)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
