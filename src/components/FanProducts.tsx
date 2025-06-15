import { CardDemo } from "./CardDemo";
import { Carousel } from "./ui/carousel";

function FanProducts() {
  return (
    <div className="p-10">
      <h1 className="font-semibold">FanProducts</h1>
      <Carousel>
        <CardDemo />
      </Carousel>
    </div>
  );
}

export default FanProducts;
