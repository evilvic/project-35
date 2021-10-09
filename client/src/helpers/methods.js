import dayjs from 'dayjs'

export const computeMissingSquares = (data, points, width = 0, height = 0) => {
    const columns = Math.floor((width - 3) / 33)
    const rows = Math.floor(height / 33)
    const missingInRow = data ? columns - (points.length % columns) : 0
    const currentRows = data ? (points.length + missingInRow) / columns : 0
    const missing = ((rows - currentRows) * columns) + missingInRow
    return missing
}

export const rdm = () => Math.floor(Math.random() * 4) + 1;

const parseX = (data) => data.slice(-2) === '01'
  ? dayjs(data).format('MMM').toUpperCase().slice(0,2)
  : dayjs(data).format('DD').toUpperCase()

export const computeLine = (data, points, width = 0) => {
  const elements = width < 425 ? 7 : width < 768 ? 15 : width < 1024 ? 21 : width < 1440 ? 30 : points?.length || 0
  const line = data ? points.map(({ date, weight }) => ({ date: parseX(date, width), weight: Number(weight) })).slice(-elements) : []
  const values = data ? line.map(point => Number(point.weight) ): []
  const min = data ? (Math.round(Math.min(...values) * 2) / 2) - 0.5 : 0
  const max = data ? (Math.round(Math.max(...values) * 2) / 2) + 0.5 : 0
  const domain = [ min, max ]
  const tickCount = data ? ((max - min) / 0.5) + 1 : 0
  const references = data ? line.map(({ date }) => isNaN(date) && date).filter(el => el) : []
  return { line, domain, tickCount, references }
}

export const computeReadingLine = (data, points, width = 0) => {
  const elements = width < 425 ? 7 : width < 768 ? 15 : width < 1024 ? 21 : width < 1440 ? 30 : points?.length || 0
  const line = data ? points.map(({ date, time }) => ({ date: parseX(date, width), time: Number(time) })).slice(-elements) : []
  const values = data ? line.map(point => Number(point.time) ): []
  const min = 0
  const max = data ? (Math.round(Math.max(...values) / 10) * 10) + 10 : 0;
  const domain = [ min, max ]
  const tickCount = data ? ((max) / 10) + 1 : 0
  const references = data ? line.map(({ date }) => isNaN(date) && date).filter(el => el) : []
  return { line, domain, tickCount, references }
}