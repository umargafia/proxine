import "./comments.scss";
import "../../global/typography.scss";
import { Comment } from "../../global/global";

export const Comments = () => {
  return (
    <div className="comments ">
      <h3 className="heading--text">Comments</h3>

      <Comment />
      <Comment />
    </div>
  );
};
