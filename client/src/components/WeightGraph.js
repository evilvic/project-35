import { GraphContainer } from 'src/styles/components'
import { useContext } from 'react'
import { UIContext } from 'src/contexts/ui'
import { darkTheme, lightTheme } from 'src/styles/constants'
import useElementSize from 'src/hooks/useElementSize'
import { computeLine } from 'src/helpers/methods'
import { 
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
  ReferenceLine,
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

  const { element, width, height } = useElementSize(data)
  const line = !loading && data ? points.map(({ date, weight }) => ({ date: date.slice(-2), weight: Number(weight) })).slice(-30) : []

  return (
    <GraphContainer ref={ element }>
      {!loading && data &&
        <ResponsiveContainer>
          <LineChart
            data={ line }
            margin={{ top: 30, right: 30, bottom: 15, left: 15 }}
          >
            <CartesianGrid 
              strokeDasharray='5 5'
              stroke={ `rgba(${theme.void}, 0.25)` }
              strokeWidth={ 0.5 }
            />
            <Line
              dataKey='weight'
              type='monotone'
              dot={ false }
              stroke={ theme.blue }
              strokeWidth={ 3 }
              activeDot={{ stroke: theme.purple, strokeWidth: 3, r: 5 }}
            />
            <XAxis
              dataKey='date'
              axisLine={{ stroke: theme.purple, strokeWidth: 3 }}
              tick={{ stroke: theme.purple, strokeWidth: 1 }}
              tickLine={ false }
            />
            <YAxis
              axisLine={{ stroke: theme.purple, strokeWidth: 3 }}
              domain={[ 102, 108 ]}
              tickCount={ 13 }
              tick={{ stroke: theme.purple, strokeWidth: 1 }}
              tickLine={ false }
            />
            <ReferenceLine
              x='01'
              stroke={ theme.purple }
              strokeDasharray='3 3'
              strokeWidth={ 3 }
            />
            <Tooltip
              itemStyle={{ fontFamily: 'monospace', fontWeight: 'bold' }}
              contentStyle={{
                background: theme.background,
                border: `3px solid ${ theme. purple }`,
                fontFamily: 'monospace',
                fontWeight: 'bold',
                color: theme.text
              }}
              cursor={ false }
              formatter={ value => [`${value} kg`] }
            />
          </LineChart>
        </ResponsiveContainer>
      }
    </GraphContainer>
  )
}

export default WeightGrap
//[`${value} kg`]