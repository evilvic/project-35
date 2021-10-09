import { GraphContainer } from 'src/styles/components'
import { useContext } from 'react'
import { UIContext } from 'src/contexts/ui'
import { darkTheme, lightTheme } from 'src/styles/constants'
import useElementSize from 'src/hooks/useElementSize'
import { computeReadingLine } from 'src/helpers/methods'
import { 
  ResponsiveContainer,
  BarChart,
  LineChart,
  CartesianGrid,
  Bar,
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

  const { element, width } = useElementSize(data)
  const { line, domain, tickCount, references } = computeReadingLine(data, points, width)

  return (
    <GraphContainer ref={ element }>
      {!loading && data &&
        <ResponsiveContainer>
          <BarChart
            data={ line }
            margin={{ top: 15, right: 15, bottom: 0, left: 0 }}
          >
            <CartesianGrid 
              strokeDasharray='5 5'
              stroke={ `rgba(${theme.void}, 0.25)` }
              strokeWidth={ 0.5 }
            />
            <Bar
              dataKey='time'
              fill={ theme.blue }
              barSize={ 15 }
            />
            <XAxis
              dataKey='date'
              axisLine={{ stroke: theme.purple, strokeWidth: 3 }}
              tick={{ stroke: theme.purple, strokeWidth: 1 }}
              tickLine={ false }
            />
            <YAxis
              axisLine={{ stroke: theme.purple, strokeWidth: 3 }}
              domain={ domain }
              tickCount={ tickCount }
              tick={{ stroke: theme.purple, strokeWidth: 1 }}
              tickLine={ false }
            />
            {references.map(month => (
              <ReferenceLine
                key={ month }
                x={ month }
                stroke={ theme.purple }
                strokeDasharray='3 3'
                strokeWidth={ 3 }
              />
            ))}
            <ReferenceLine
                y={ 30 }
                stroke={ `rgba(${theme.void}, 0.25)` }
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
              formatter={ value => [`${value} min`] }
            />
          </BarChart>
        </ResponsiveContainer>
      }
    </GraphContainer>
  )
}

export default WeightGrap