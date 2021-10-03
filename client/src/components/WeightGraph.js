import { useContext } from 'react'
import { UIContext } from 'src/contexts/ui'
import { darkTheme, lightTheme } from 'src/styles/constants'
import { 
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts'

const WeightGrap = ({ loading, error, data }) => {

  const ui = useContext(UIContext)
  const theme = ui.state.dark ? darkTheme : lightTheme

  let points

  if (!loading && data) {
    const { collection: { data: d } } = data
    points = JSON.parse(d)
  }
  if (!loading && error) console.error('Error in query COLLECTION >>> ', error)

  const line = !loading && data ? points.map(({ date, weight }) => ({ date: date.slice(-2), weight: Number(weight) })).slice(-30) : []

  return (
    <div style={{ width: '100vw', height: '100vh', padding: '10px', border: '1px solid pink' }}>
      {!loading && data &&
        <ResponsiveContainer 
          width="100%" 
          height="100%"
        >
          <LineChart 
            width={400} 
            height={400} 
            data={line}
            margin={{ top: 0, right: 0, bottom: -10, left: -10 }}
          >
            <CartesianGrid 
              stroke={ `rgba(${theme.void}, 0.25)` } 
              strokeDasharray="5 5"
            />
            <Line
              dataKey="weight"
              type="monotone"
              dot={ false }
              stroke={ theme.blue }
              strokeWidth={ 3 }
              activeDot={{ stroke: theme.purple, strokeWidth: 3, r: 5 }}
            />
            <XAxis
              dataKey="date"
              axisLine={{ stroke: theme.purple, strokeWidth: 3 }}
              tick={{ stroke: theme.purple, strokeWidth: 1 }}
              tickLine={false}
            />
            <YAxis
              axisLine={{ stroke: theme.purple, strokeWidth: 3 }}
              domain={ [102, 108] }
              tickCount={ 13 }
              tick={{ stroke: theme.purple, strokeWidth: 1 }}
              tickLine={false}
            />
            <Tooltip/>
          </LineChart>
        </ResponsiveContainer>
      }
    </div>
      
  )
}

export default WeightGrap