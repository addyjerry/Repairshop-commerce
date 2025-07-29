import { FanCard } from "./FanCards";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

function FanProducts() {
  return (
    <div className="p-10 max-w-[100vw] overflow-hidden">
      <h1 className="font-semibold">FanProducts</h1>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <FanCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default FanProducts;
