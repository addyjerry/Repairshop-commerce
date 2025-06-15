import { CardDemo } from "./CardDemo";
import { Carousel } from "./ui/carousel";

function SpeakerProducts() {
  return (
    <div className="p-10">
      <h1 className="font-semibold">SpeakerProducts</h1>
      <Carousel>
        <CardDemo />
      </Carousel>
    </div>
  );
}

export default SpeakerProducts;
