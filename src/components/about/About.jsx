import "./about.scss";
import "../../global/typography.scss";
import about1 from "../../images/about-1.jpg";
import about2 from "../../images/about-2.jpg";
import about3 from "../../images/about-3.jpg";

export const About = () => {
  return (
    <div className="about">
      <div className="about__left about__side ">
        <h3 className="heading--text ">about</h3>
        <p className="paragraph--text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          architecto explicabo dolorum velit quas itaque harum? Nemo, enim, et
        </p>
        <p className="paragraph--text ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          architecto explicabo dolorum velit quas itaque harum? Nemo, enim, et
          tempora neque ipsum aspernatur in vitae, ullam corrupti aperiam fuga
          reprehenderit?
        </p>
      </div>
      <div className="about__right about__side">
        <img src={about1} alt="image 1" className="about__img about__img--1" />
        <img src={about2} alt="image 2" className="about__img about__img--2" />
        <img src={about3} alt="image 3" className="about__img about__img--3" />
      </div>
    </div>
  );
};
