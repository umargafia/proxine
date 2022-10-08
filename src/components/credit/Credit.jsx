import "./credit.scss";
import "../../global/global.scss";
import { Card } from "../../global/global";

export const Credit = () => {
  return (
    <div className="credit">
      <div className="credit__body">
        <Card
          header="Very Affordable"
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas consequuntur, blanditiis ex maxime, quia ducimus assumenda eaque enim itaque atque quis doloremque voluptatum est dignissimos commodi molestias sed error maiores."
        />
        <Card
          header="Very reliable"
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas consequuntur, blanditiis ex maxime, quia ducimus assumenda eaque enim itaque atque quis doloremque voluptatum est dignissimos commodi molestias sed error maiores."
        />

        <Card
          header="we bring the best experience"
          body="Lorem ipsum dolor sit amet, consectetur . Quas consequuntur, blanditiis ex maxime, quia ducimus assumenda eaque enim itaque atque quis doloremque voluptatum est dignissimos commodi molestias sed error maiores."
        />
      </div>
    </div>
  );
};
