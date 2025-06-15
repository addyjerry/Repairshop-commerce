import { CardDemo } from "./CardDemo";
import { Carousel } from "./ui/carousel";

function NewProducts() {
  return (
    <div className="p-10">
      <h1 className="font-semibold">NewProducts</h1>
      <Carousel>
        <CardDemo />
      </Carousel>
    </div>
  );
}

export default NewProducts;
