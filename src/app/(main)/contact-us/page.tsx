import Map from "@/components/Map";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import call from "../../../assets/images/call-us.png";
function page() {
  return (
    <div className="px-5">
      <h1 className="pt-50 text-2xl font-bold text-center">Contact us</h1>

      <div className="flex-col md:flex-row justify-center gap-20">
        <div className="py-10">
          <p>Send us an e-mail</p>
          <div>
            <form>
              <div>
                <label>First name</label>
                <Input />
                <label>Last name</label>
                <Input />
              </div>
              <div>
                <label>Email</label>
                <Input />
                <label>Phone Number</label>
                <Input />
                <label>Message</label>
                <Textarea />
                <Checkbox />
                <p>
                  By reaching out to us, you agree with our privacy policies
                </p>
                <Button>Send Message</Button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <Image src={call} alt="call us" width={500} height={500} />
        </div>
      </div>
      <p className="justify-center text-xl">
        Contact on any of our socials or call our numbers for assistance or
        purchase
        <h2>Our numbers:</h2>
        <ul>
          <li>0505009586</li>
          <li>0592883842</li>
        </ul>
      </p>
      <div>
        <Map />
      </div>
    </div>
  );
}

export default page;
