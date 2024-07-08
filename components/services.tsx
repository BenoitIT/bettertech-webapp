import Card from "./cards/basicCard";
import { TbDeviceHeartMonitorFilled } from "react-icons/tb";
import { GiAutoRepair } from "react-icons/gi";
import { RiInstallFill } from "react-icons/ri";
import { MdFireplace } from "react-icons/md";
import { GiTeamIdea } from "react-icons/gi";
import { FaRecycle } from "react-icons/fa6";
export default function Services() {
  return (
    <section className="relative" id="service">
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Explore Our services</h2>
            <p className=" text-gray-600 text-base leading-7">
              At Better Technology Ltd, we specialize in
              delivering comprehensive solutions to meet your clinical and
              environmental needs. Our services include the sale of clinical
              machine spare parts, expert repair and maintenance of clinical
              equipment, professional installation of clinical machines,
              efficient waste incineration, and advanced plastic recycling.
              Trust us to provide innovative, reliable, and sustainable
              solutions to support your business operations.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            <Card
              icon={<TbDeviceHeartMonitorFilled />}
              title="Machines spare parts"
              description="
Selling high-quality spare parts for clinical machines, ensuring durability and optimal performance for healthcare operations."
            />
            <Card
              icon={<GiAutoRepair />}
              title="Machines reparation"
              description="
Expert repair services to restore and maintain your clinical equipment, ensuring reliability and safety."
            />
            <Card
              icon={<RiInstallFill />}
              title="Machines Installation"
              description="
Professional installation services for clinical machines, ensuring seamless integration and optimal functionality."
            />
            <Card
              icon={<MdFireplace />}
              title="Incineration"
              description="
Efficient waste management through incineration, reducing waste volume and environmental impact."
            />
            <Card
              icon={<GiTeamIdea />}
              title="Consultancy"
              description="
Tailored consultancy services to optimize waste collection processes, maximizing efficiency and sustainability."
            />
            <Card
              icon={<FaRecycle  />}
              title="Recycling"
              description="
 Reverse Vending Machine (RVM) solutions, enhancing recycling efforts and promoting environmental sustainability."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
