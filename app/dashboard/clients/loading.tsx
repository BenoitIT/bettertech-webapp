import { Spin } from "antd";

const Loading = () => {
  return (
    <div className="h-[60vh] flex justify-center items-center gap-6">
      <Spin size="large"  className="text-emerald-700" />
      <span className="text-emerald-700">Loading...</span>
    </div>
  );
};
export default Loading;
