import "./nav.scss";

export const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__intro">
        <div className="nav__intro--img">Logo</div>
        <div className="nav__intro--header">
          <h1 className="heading--primary">Proxine</h1>
          <span className="subHeader--text">We bring the best experience</span>
        </div>
      </div>
      <div className="nav__navigation">
        <div className="nav__navigation--header">
          <ul className="list">
            <li className="list--item">
              <a href="#" className="link">
                Login
              </a>
            </li>
            <li className="list--item">
              <a href="#" className="link">
                Flight
              </a>
            </li>
            <li className="list--item">
              <a href="#" className="link">
                {" "}
                contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
