import { FanCard } from "./FanCards";
import { Carousel } from "./ui/carousel";

function FanProducts() {
  return (
    <div className="p-10">
      <h1 className="font-semibold">FanProducts</h1>
      <Carousel>
        <FanCard />
      </Carousel>
    </div>
  );
}

export default FanProducts;
