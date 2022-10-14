import "./nav.scss";
import background from "../../images/video-background.mp4";

export const Nav = () => {
  return (
    <div className="navigation">
      <div className="bg-video">
        <video
          src={background}
          autoPlay
          muted
          loop
          className="bg-video__content"
        />
      </div>
      <div className="nav">
        <div className="nav__intro">
          {/* <div className="nav__intro--img">Logo</div> */}
          <div className="nav__intro--header">
            <h1 className="heading--primary">Proxine</h1>
            <span className="subHeader--text">
              We bring the best experience
            </span>
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
                <a href="#flight" className="link">
                  Flight
                </a>
              </li>
              <li className="list--item">
                <a href="#" className="link">
                  contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
