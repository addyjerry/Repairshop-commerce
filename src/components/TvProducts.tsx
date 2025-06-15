import { CardDemo } from "./CardDemo";
import { Carousel } from "./ui/carousel";

function TvProducts() {
  return (
    <div className="p-10">
      <h1 className="font-semibold">TvProducts</h1>
      <Carousel>
        <CardDemo />
      </Carousel>
    </div>
  );
}

export default TvProducts;
