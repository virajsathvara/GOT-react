import React from 'react';
import './css/bootstrap.min.css';
import './css/bootstrap-grid.min.css';
import './css/bootstrap-reboot.min.css';
import './css/style.css';
import './css/style_1.css';
import './css/mbr-additional.css';

function Layout({ children }) {
  return (
    <div>
      <section className="menu menu1 cid-s8WMQIZfEW" id="menu1-1">
        <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg navbar-short">
          <div className="container-fluid">
            <div className="navbar-brand">

              <span className="navbar-caption-wrap"><a className="navbar-caption text-white display-5"
                href="/">Search Battle</a></span>
            </div>
          </div>
        </nav>
      </section>
      {children}
    </div>
  );
}
export default Layout;
