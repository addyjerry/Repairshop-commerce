import { CardDemo } from "./CardDemo";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

function NewProducts() {
  return (
    <div className="p-10 max-w-[100vw] overflow-hidden">
      <h1 className="font-semibold">NewProducts</h1>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <CardDemo />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default NewProducts;
