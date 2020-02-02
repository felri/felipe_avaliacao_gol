export const handleMeasurement = ({ measurement, number }) => {
  if (measurement === 'F') return Math.round((parseInt(number) * (9 / 5)) + 32)
  else return parseInt(number)
}