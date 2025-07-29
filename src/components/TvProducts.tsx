import { TvCard } from "./TvCards";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

function TvProducts() {
  return (
    <div className="p-10 max-w-[100vw] overflow-hidden">
      <h1 className="font-semibold">TvProducts</h1>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <TvCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default TvProducts;
