import Counter from "@/components/animation/numcounter";
import Reviews from "@/components/animation/reviews";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
interface Mission {
  id: number;
  picture: string;
  head: string;
  description: string;
}

const missions: Mission[] = [
  {
    id: 1,
    picture: "/about/we-are.jpg",
    head: "Who are we",
    description:
      "Adom repairshop  offers repair and sale services for all electronics",
  },
  {
    id: 2,
    picture: "/about/mission.png",
    head: "Our mission",
    description:
      "  Our mission is to become a leading tech selling and empower businesses and individuals in Africa through cutting-edge technology and creative solutions",
  },
  {
    id: 3,
    picture: "/about/vision.jpg",
    head: " Our Vision",
    description:
      "Our vision is to revolutionalize technology in Africa and globally through cutting-edge tech solutions that meet everyday needs",
  },
  {
    id: 4,
    picture: "/about/impact.jpg",
    head: " Our Impact",
    description:
      "Potential to uplift businesses and individuals in Africa through cutting-edge technology",
  },
];

export default function page() {
  return (
    <div>
      <div className="text-center py-30 max-w-150 place-self-center ">
        <h2 className=" text-blue-500 text-3xl font-bold md:pt-10">About Us</h2>
        <p className="py-5">
          Adom repairshop is an electrical products sale and repairshop. We sell
          all kinds of electrical gadets like radio,
          television,speaker,iron,etc. We also repair all electrical gadets
          including the ones listed above.We are here to make your faulty
          gadgets as good as new
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
          Learn More
        </button>
      </div>
      <section className="mt-20 mb-5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:bg-black/90 rounded-lg p-4 dark:border-[1px] dark:border-stone-900">
        {/*Central image */}
        <Image
          src="/about/label.jpeg"
          width={800}
          height={300}
          alt="image"
          className="place-self-center -mt-40 rounded-xl"
        />
        <div className="text-xl py-20 ">
          <h1 className="text-blue-500 font-bold text-2xl text-center py-5">
            Our Exceptional Metrics
          </h1>
          <div className="flex justify-between flex-wrap ">
            {missions.map((Mission: Mission) => (
              <Card key={Mission.id} className="max-w-80 m-3">
                <CardContent>
                  <Image
                    src={Mission.picture}
                    alt={Mission.head}
                    width={300}
                    height={300}
                    className="rounded-lg "
                  />
                </CardContent>
                <CardHeader>
                  <h2 className="text-center font-bold">{Mission.head}</h2>
                </CardHeader>

                <CardFooter>
                  <p className="text-center">{Mission.description}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-20 items-center ">
          {/* Image Section */}
          <div className="md:col-span-3 flex justify-center">
            <div className="w-full max-w-full">
              <Image
                src="/about/about-us-pic2.jpg"
                alt="Homepage Image"
                width={900}
                height={900}
                className="w-full h-auto rounded-lg"
                unoptimized
                quality={100}
                priority
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="md:col-span-2 flex flex-col justify-center items-start">
            <div className="bg-white/0.5 backdrop-blur-xs rounded-xl dark:bg-white/0.5 p-4">
              <h1 className="text-md text-gray-600 dark:text-gray-400 font-medium mb-4">
                ABOUT US
              </h1>
              <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 dark:text-white mb-4">
                Who We Are
              </h2>
              <p className="text-md text-gray-700 dark:text-gray-300 mb-8">
                At Adom Repairshop,our mission is to engineer Africa’s future by
                creating groundbreaking digital solutions that empower people,
                transform systems, and bridge the gap between innovation and
                impact.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-10 w-full mx-auto">
          <div className="bg-gray-50 dark:bg-stone-900 rounded-lg p-4 w-full text-center">
            <h3 className="text-2xl font-bold dark:text-white">3.5</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Years Experience
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-stone-900 rounded-lg p-4 w-full text-center">
            <h3 className="text-2xl font-bold dark:text-white">23</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Project Challenge
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-stone-900 rounded-lg p-4 w-full text-center">
            <Reviews />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Positive Reviews
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-stone-900 rounded-lg p-4 w-full text-center">
            <Counter />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Trusted Students
            </p>
          </div>
        </div>
      </section>
      <section className="text-left py-20 px-5 max-w-170">
        <div className="py-6 ">
          <h2 className=" text-3xl text-blue-400 font-extrabold">
            WHY CHOOSE US
          </h2>
          <h2 className="text-xl font-bold ">
            WE ARE HERE TO GROW YOUR BUSINESS EXPONENTIALLY
          </h2>
          <p>
            Our company has quickly established itself as a leader in the
            industry, thanks to our innovative approach and commitment to
            excellence. Our team of expert engineers and developers work
            tirelessly to create groundbreaking products that are
            revolutionalizing the way we interact with technology.
          </p>
        </div>
      </section>
    </div>
  );
}
