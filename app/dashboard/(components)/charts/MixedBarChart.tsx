import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { mixedBarChartData } from "../../(pageContents)/staticdata";


const MixedBarChart=()=>{
    return(
        <>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={730} height={250} data={mixedBarChartData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="transctions" fill="#45818E" />
            <Bar dataKey="clients" fill="#6191DB" />
          </BarChart>
        </ResponsiveContainer>
      </>
    )
}
export default MixedBarChart;