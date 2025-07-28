import { IronCard } from "./IronCards";
import { Carousel } from "./ui/carousel";

function IronProducts() {
  return (
    <div className="p-10">
      <h1 className="font-semibold">IronProducts</h1>
      <Carousel>
        <IronCard />
      </Carousel>
    </div>
  );
}

export default IronProducts;
