import { SpeakerCard } from "./SpeakerCards";
import { Carousel } from "./ui/carousel";

function SpeakerProducts() {
  return (
    <div className="p-10">
      <h1 className="font-semibold">SpeakerProducts</h1>
      <Carousel>
        <SpeakerCard />
      </Carousel>
    </div>
  );
}

export default SpeakerProducts;
