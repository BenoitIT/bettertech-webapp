interface StatisticCard {
  title: string;
  total: string;
  percentage: string;
  icon: any;
}

const StatisticCard = ({ title, total, percentage, icon }: StatisticCard) => {
  return (
    <div className="flex-1 px-2 justify-center  bg-white shadow rounded h-300px w-full">
      <div className=" p-3">
        <div className="flex justify-between">
          <p className="text-gray-500 font-normal uppercase text-sm">{title}</p>
          <div className="p-2 rounded-full bg-emerald-600 h-fit text-white shadow">
            {icon}
          </div>
        </div>
        <p className="py-4 font-semibold text-gray-700">{total} </p>
        <p className="text-emerald-700 text-sm font-bold">{percentage}</p>
      </div>
    </div>
  );
};
export default StatisticCard;
