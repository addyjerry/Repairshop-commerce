import { TvCard } from "./TvCards";
import { Carousel } from "./ui/carousel";

function TvProducts() {
  return (
    <div className="p-10">
      <h1 className="font-semibold">TvProducts</h1>
      <Carousel>
        <TvCard />
      </Carousel>
    </div>
  );
}

export default TvProducts;
