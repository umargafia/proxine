import "./footer.scss";
import "../../global/typography.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <h3 className="copyright-text">
        &#169;copyright {new Date().getFullYear()}
        <span>umar gafia</span>
      </h3>
    </div>
  );
};
