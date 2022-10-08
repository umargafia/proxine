import "./global.scss";

export const Card = ({ header, body }) => {
  return (
    <div className="card">
      <h3 className="card__header">{header}</h3>
      <p className="card__paragraph paragraph--text">{body}</p>
    </div>
  );
};
