"use client";
import { lazy, Suspense, useEffect, useState } from "react";
import { SiGithubactions } from "react-icons/si";
import StatisticCard from "./(components)/cards/statisticCard";
import { TbTransactionDollar } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiMoneyStack } from "react-icons/gi";
const MixedChart = lazy(() => import("./(components)/charts/MixedChart"));
const MixedBarChart = lazy(() => import("./(components)/charts/MixedBarChart"));
const PieChartCustom = lazy(() => import("./(components)/charts/barChat"));
import { DatePicker, Spin } from "antd";
import {
  Message,
  MonthlyInsight,
  PaymentInfo,
  TransactionInfo,
} from "./interfaces";

const Page = () => {
  const { MonthPicker } = DatePicker;
  const [selectedDate, setSelectedDate] = useState("");
  const [monthlyInsigts, setMontnlyInsight] = useState<MonthlyInsight>();
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo[]>([]);
  const [sentMessages, setSentMessages] = useState<Message[]>([]);
  const [replyedMessages, setReplyedMessages] = useState<Message[]>([]);
  const [subscribers, setSubscribers] = useState<Message[]>([]);
  const [transactionVclientsInfo, setTransactionVclientsInfo] = useState<
    TransactionInfo[]
  >([]);
  const onChange = (date: any, dateString: any) => {
    setSelectedDate(dateString);
  };
  useEffect(() => {
    if (selectedDate == "") {
      setSelectedDate("00");
    }
  }, [selectedDate]);
  useEffect(() => {
    const fetchMontlyInsight = async () => {
      const response = await fetch(`/api/monthlyInsight/${selectedDate}`, {
        cache: "no-store",
      });
      const data = await response.json();
      if (data.status == 200) {
        setMontnlyInsight(data);
      }
    };
    fetchMontlyInsight();
  }, [selectedDate]);
  useEffect(() => {
    const fetchPaymentInfo = async () => {
      const response = await fetch(`/api/payments`, {
        cache: "no-store",
      });
      const data = await response.json();
      if (data.status == 200) {
        setPaymentInfo(data.data);
      }
    };
    fetchPaymentInfo();
  }, []);
  useEffect(() => {
    const fetchTransactionVclientsInfo = async () => {
      const response = await fetch(`/api/clientsVtransactions`, {
        cache: "no-store",
      });
      const data = await response.json();
      if (data.status == 200) {
        setTransactionVclientsInfo(data.data);
      }
    };
    fetchTransactionVclientsInfo();
  }, []);
  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch(`/api/messageCount`, {
        cache: "no-store",
      });
      const data = await response.json();
      if (data.status == 200) {
        setSentMessages(data.data);
      }
    };
    fetchMessages();
  }, []);
  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch(`/api/messageCount/replyed`, {
        cache: "no-store",
      });
      const data = await response.json();
      if (data.status == 200) {
        setReplyedMessages(data.data);
      }
    };
    fetchMessages();
  }, []);
  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch(`/api/subscribersCount`, {
        cache: "no-store",
      });
      const data = await response.json();
      if (data.status == 200) {
        setSubscribers(data.data);
      }
    };
    fetchMessages();
  }, []);
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
        {monthlyInsigts ? (
          <div className="grid m-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <StatisticCard
              title="Total activities performed"
              total={`${monthlyInsigts?.activitiesDone} ${
                monthlyInsigts?.activitiesDone &&
                monthlyInsigts?.activitiesDone > 1
                  ? "Activities"
                  : "Activitity"
              }`}
              percentage={`${
                monthlyInsigts?.activityDonePercent &&
                monthlyInsigts?.activityDonePercent?.toFixed(2)
              } %`}
              icon={<SiGithubactions />}
            />
            <StatisticCard
              title="Total Cash made"
              total={`RWF ${
                monthlyInsigts?.cashMade &&
                new Intl.NumberFormat("en-Us").format(monthlyInsigts?.cashMade)
              }`}
              percentage="-"
              icon={<TbTransactionDollar />}
            />
            <StatisticCard
              title="Total Cash received"
              total={`RWF ${
                monthlyInsigts?.cashReceived &&
                new Intl.NumberFormat("en-Us").format(
                  monthlyInsigts?.cashReceived
                )
              }`}
              percentage={`${
                monthlyInsigts?.cashRecievedPercent &&
                monthlyInsigts?.cashRecievedPercent?.toFixed(2)
              } %`}
              icon={<GiMoneyStack />}
            />
            <StatisticCard
              title="Total debits"
              total={`RWF ${
                monthlyInsigts?.unpaidCash &&
                new Intl.NumberFormat("en-Us").format(
                  monthlyInsigts?.unpaidCash
                )
              }`}
              percentage={`${
                monthlyInsigts?.unpaidCashPercent &&
                monthlyInsigts?.unpaidCashPercent?.toFixed(2)
              } %`}
              icon={<GiTakeMyMoney />}
            />
          </div>
        ) : (
          <div className="w-full skeleton bg-gradient-to-tr from-gray-100 to-gray-200 h-20 rounded animate-pulse m-4"></div>
        )}
      </section>

      <section className="flex flex-col h-fit ">
        <div className="flex gap-4 flex-col md:flex-row">
          <h1 className="mx-4 mt-4 font-bold text-gray-600">General Insight</h1>
          <h4 className="text-gray-600 mx-4 mt-4 font-bold text-sm">
            Year: {new Date().getFullYear()}
          </h4>
        </div>
        <div className="flex my-4 mx-4 pt-2 gap-2 flex-col lg:flex-row">
          <div className="bg-white lg:w-1/2 rounded w-full">
            <h6 className="w-full text-sm font-medium text-gray-700 text-center py-1">
              Cash based
            </h6>
            <div className=" h-[300px] text-xs pl-1">
              <Suspense
                fallback={<Spin size="large" className="text-emerald-700" />}
              >
                <MixedChart paymentInfo={paymentInfo} />
              </Suspense>
            </div>
          </div>
          <div className="bg-white lg:w-1/2 rounded w-full">
            <h6 className="w-full text-sm font-medium text-gray-700 text-center py-1">
              Activities and clients
            </h6>
            <div className="h-[300px] text-xs pl-1">
              <Suspense
                fallback={<Spin size="large" className="text-emerald-700" />}
              >
                <MixedBarChart
                  transactionVclientsInfo={transactionVclientsInfo}
                />
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
          <h4 className="text-gray-600 mx-4 mt-4 font-bold text-sm">
            Year: {new Date().getFullYear()}
          </h4>
        </div>
        <div className="flex my-4 px-4 gap-2 flex-col lg:flex-row justify-center">
          <div className="bg-white lg:w-1/3 rounded w-full">
            <h6 className="w-full text-sm font-medium text-gray-700 text-center py-1">
              Incomming Messages
            </h6>
            <div className=" h-[250px] text-xs">
              <Suspense
                fallback={<Spin size="large" className="text-emerald-700" />}
              >
                <PieChartCustom messageCount={sentMessages} />
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
                <PieChartCustom messageCount={replyedMessages} />
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
                <PieChartCustom messageCount={subscribers} />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
