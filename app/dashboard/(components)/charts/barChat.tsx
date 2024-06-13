import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { Messagesdata, colors } from "../../(pageContents)/staticdata"

const BarChartCustom=()=>{
    return(
        <>
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={730} height={250}>
        <Pie
          data={Messagesdata}
          dataKey="value"
          nameKey="month"
          cx="50%"
          cy="50%"
          fill="#8884d8"
          label
        >
          {Messagesdata.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </>
    )
}
    export default BarChartCustom