"use client";
import { lazy, Suspense } from "react";
import { SiGithubactions } from "react-icons/si";
import StatisticCard from "./(components)/cards/statisticCard";
import { TbTransactionDollar } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiMoneyStack } from "react-icons/gi";
const MixedChart = lazy(() => import("./(components)/charts/MixedChart"));
const MixedBarChart = lazy(() => import("./(components)/charts/MixedBarChart"));
const BarChartCustom = lazy(() => import("./(components)/charts/barChat"));
import { DatePicker, Spin } from "antd";

const Page = () => {
  const { MonthPicker } = DatePicker;
  const onChange = (date: any, dateString: any) => {
    console.log(date, dateString);
  };
  return (
    <div className="bg-gray-200 -m-4 py-6 h-fit">
      <section>
        <div className="flex gap-4 flex-col md:flex-row">
          <h1 className="mx-4 mt-4 font-bold text-gray-600">
            Current month Insight
          </h1>
          <MonthPicker
            onChange={onChange}
            placeholder="Select month"
            className="mt-3 mx-4 lg:mx-0 placeholder:text-gray-600"
          />
        </div>
        <div className="grid m-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <StatisticCard
            title="Total activities performed"
            total="5 activities"
            percentage="+34.5%"
            icon={<SiGithubactions />}
          />
          <StatisticCard
            title="Total Cash made"
            total="RWF 500,000"
            percentage="-"
            icon={<TbTransactionDollar />}
          />
          <StatisticCard
            title="Total Cash received"
            total="RWF 300,000"
            percentage="60.0%"
            icon={<GiMoneyStack />}
          />
          <StatisticCard
            title="Total debits"
            total="RWF 200,000"
            percentage="40.0%"
            icon={<GiTakeMyMoney />}
          />
        </div>
      </section>

      <section className="flex flex-col h-fit ">
        <div className="flex gap-4 flex-col md:flex-row">
          <h1 className="mx-4 mt-4 font-bold text-gray-600">General Insight</h1>
          <DatePicker
            onChange={onChange}
            placeholder="Select year"
            className="mt-3 mx-4 lg:mx-0 placeholder:text-gray-600"
          />
        </div>
        <div className="flex my-4 px-4 gap-3 flex-col lg:flex-row">
          <div className="bg-white lg:w-1/2 rounded w-full">
            <h6 className="w-full text-sm font-medium text-gray-700 text-center py-1">
              Cash based
            </h6>
            <div className=" h-[300px] text-sm">
              <Suspense
                fallback={<Spin size="large" className="text-emerald-700" />}
              >
                <MixedChart />
              </Suspense>
            </div>
          </div>
          <div className="bg-white lg:w-1/2 rounded w-full">
            <h6 className="w-full text-sm font-medium text-gray-700 text-center py-1">
              Activities and clients
            </h6>
            <div className="h-[300px] text-sm">
              <Suspense
                fallback={<Spin size="large" className="text-emerald-700" />}
              >
                <MixedBarChart />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col">
        <div className="flex gap-4 flex-col md:flex-row">
          <h1 className="mx-4 mt-4 font-bold text-gray-600">
            Customers Interaction Insight
          </h1>
          <DatePicker
            onChange={onChange}
            placeholder="Select year"
            className="mt-3 mx-4 lg:mx-0 placeholder:text-gray-600"
          />
        </div>
        <div className="flex my-4 px-4 gap-2 flex-col lg:flex-row justify-center">
          <div className="bg-white lg:w-1/3 rounded w-full">
            <h6 className="w-full text-sm font-medium text-gray-700 text-center py-1">
              Incomming Messages
            </h6>
            <div className=" h-[250px]  text-sm">
              <Suspense
                fallback={<Spin size="large" className="text-emerald-700" />}
              >
                <BarChartCustom />
              </Suspense>
            </div>
          </div>
          <div className="bg-white lg:w-1/3 rounded w-full">
            <h6 className="w-full text-sm font-medium text-gray-700 text-center py-1">
              Replying Messages
            </h6>
            <div className="  h-[250px] text-sm">
              <Suspense
                fallback={<Spin size="large" className="text-emerald-700" />}
              >
                <BarChartCustom />
              </Suspense>
            </div>
          </div>
          <div className="bg-white lg:w-1/3 rounded w-full">
            <h6 className="w-full text-sm font-medium text-gray-700 text-center py-1">
              Content subscribers
            </h6>
            <div className="h-[250px] text-sm">
              <Suspense
                fallback={<Spin size="large" className="text-emerald-700" />}
              >
                <BarChartCustom />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
