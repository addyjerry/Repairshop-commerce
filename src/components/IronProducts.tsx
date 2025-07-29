import { IronCard } from "./IronCards";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

function IronProducts() {
  return (
    <div className="p-10 max-w-[100vw] overflow-hidden">
      <h1 className="font-semibold">IronProducts</h1>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <IronCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default IronProducts;
