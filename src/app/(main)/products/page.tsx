import FanProducts from "@/components/FanProducts";
import IronProducts from "@/components/IronProducts";
import NewProducts from "@/components/NewProducts";
import Searchbar from "@/components/Searchbar";
import SpeakerProducts from "@/components/SpeakerProducts";
import TvProducts from "@/components/TvProducts";

export default function page() {
  return (
    <div className="py-50">
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="text-3xl font-bold text-center w-3/4">Our products</h1>
        <Searchbar />
      </div>
      <div className="flex-row">
        <NewProducts />
        <TvProducts />
        <IronProducts />
        <FanProducts />
        <SpeakerProducts />
      </div>
    </div>
  );
}
