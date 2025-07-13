import Image from "next/image";
import repair from "../assets/images/speaker9.jpg";
import tv from "../assets/images/ts1.jpeg";
export default function About() {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row justify-between text-xl p-5">
        <div>
          {" "}
          <Image
            src={repair}
            alt="repair-image"
            width={600}
            height={700}
            className="rounded-2xl"
          />
        </div>
        <div className="max-w-150 md:pl-5">
          <h1 className="text-3xl text-center font-bold">About Us</h1>
          <p className="text-xl p-5">
            At Adom Repairshop, we take into consideration your needs. We repair
            all sorts of electrical gadgets. TVs,radios,Electric fans,electric
            irons,etc. Bring all your faulty gadgets and we will repair to it to
            be as good as new. We also move to homes for home servicing. You can
            call or contact us on 0505009586 and we will be at your door step
          </p>
        </div>
      </div>
      <div className="flex md:flex-row-reverse flex-col-reverse justify-between text-xl p-5">
        <div>
          {" "}
          <Image
            src={tv}
            alt="repair-image"
            width={600}
            height={700}
            className="rounded-2xl"
          />
        </div>
        <div className="max-w-150 md:pl-5 mt-30">
          <h1 className="text-3xl text-center font-bold">Our products</h1>
          <p className="text-xl p-5">
            At Adom Repairshop,we also sell electrical products. We don't only
            repair, we sell products too. If you need to buy a TV,electric
            fan,electric iron, music box,etc , you can buy from us. We deal in
            all brands of products, Samsung,LG, Skyworth,Philips,etc.You can
            move to our shop to make your purchase. We also do door to door
            delivery. Visit our products page to choose and purchase the
            products we have in stock.
          </p>
        </div>
      </div>
    </div>
  );
}
