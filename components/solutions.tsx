"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import { MdFireplace } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { GiWashingMachine } from "react-icons/gi";
import Incenerator from "@/public/images/incinerator.png";
import Repair from "@/public/images/repair.png";
import RVM from "@/public/images/rvm.png";

export default function Solutions() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          <div className="max-w-2xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Explore the solutions</h1>
            <p className="text-lg text-gray-600">
              Discover innovative solutions to modern challenges: Incineration,
              Clinical Machines Repair, and RVM Solutions, each designed to
              improve efficiency and sustainability in your operations.
            </p>
          </div>
          <div className="md:grid md:grid-cols-12 md:gap-6">
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-3 lg:pr-10 xl:pr-12 mb-8">
                <h3 className="h3 mb-3 text-xl">Our Leading Solutions</h3>
                <p className="text-base text-gray-600">
                  From cutting-edge Incineration techniques ,expertse in
                  Clinical Machiness reparation and advanced plastics recyling
                  solutions, we provide innovative and effective solutions
                  tailored to meet your unique needs.
                </p>
              </div>
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-base">
                      Incineration
                    </div>
                    <div className="text-gray-600 text-sm">
                      Efficiently reduce waste volume and environmental impact
                      through advanced incineration, transforming waste into
                      ash. Ideal for municipal, hazardous, and medical waste
                      management.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 text-emerald-700 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <MdFireplace />
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-base">
                      Clinical Machines Repair
                    </div>
                    <div className="text-gray-600 text-sm">
                      Ensure the longevity and functionality of medical
                      equipment with our expert clinical Machines repair
                      services. We specialize in restoring and maintaining a
                      wide range of medical instruments, ensuring they meet
                      health and safety standards, and supporting optimal
                      healthcare delivery.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 text-emerald-700 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <GiAutoRepair />
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-base">
                      RVM Solutions
                    </div>
                    <div className="text-gray-600 text-sm">
                      Optimize recycling efforts with our Reverse Vending
                      Machines (RVMs). Ensuring efficient operation and
                      comprehensive monitoring. Our RVM solutions support
                      businesses in enhancing sustainability and streamlining
                      their recycling processes.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 text-emerald-700 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <GiWashingMachine />
                  </div>
                </a>
              </div>
            </div>
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 pt-[10vh]">
              <div className="transition-all">
                <div
                  className="relative flex flex-col text-center lg:text-right"
                  data-aos="zoom-y-out"
                  ref={tabs}
                >
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full mt-4"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="md:max-w-none mx-auto rounded"
                        src={Incenerator}
                        width={500}
                        height="500"
                        alt="Features bg"
                      />
                    </div>
                  </Transition>
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="md:max-w-none mx-auto rounded"
                        src={Repair}
                        width={500}
                        height="500"
                        alt="Features bg"
                      />
                    </div>
                  </Transition>
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="md:max-w-none mx-auto rounded"
                        src={RVM}
                        width={500}
                        height="500"
                        alt="Features bg"
                      />
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
