export const computeMissingSquares = (data, points, width, height) => {
  const columns = Math.floor((width - 3) / 33)
  const rows = Math.floor(height / 33)
  const missingInRow = data ? columns - (points.length % columns) : 0
  const currentRows = data ? (points.length + missingInRow) / columns : 0
  return ((rows - currentRows) * columns) + missingInRow
}