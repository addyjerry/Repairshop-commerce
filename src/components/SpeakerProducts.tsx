import { SpeakerCard } from "./SpeakerCards";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

function SpeakerProducts() {
  return (
    <div className="p-10 max-w-[100vw] overflow-hidden">
      <h1 className="font-semibold">SpeakerProducts</h1>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <SpeakerCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default SpeakerProducts;
