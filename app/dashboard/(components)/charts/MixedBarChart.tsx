import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { TransactionInfo } from "../../interfaces";

interface mixedCartProps{
  transactionVclientsInfo:TransactionInfo[]
}

const MixedBarChart=({transactionVclientsInfo}:mixedCartProps)=>{
    return(
        <>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={730} height={250} data={transactionVclientsInfo}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="transactions" fill="#45818E" />
            <Bar dataKey="clients" fill="#6191DB" />
          </BarChart>
        </ResponsiveContainer>
      </>
    )
}
export default MixedBarChart;