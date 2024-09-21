import { Chart as RGCharts } from 'react-google-charts'

interface ChartProps {
  data: unknown[]
}

const Chart = ({ data }: ChartProps) => {
  return (
    <RGCharts
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      formatters={[
        {
          type: 'NumberFormat',
          column: 1,
          options: {
            prefix: 'R$ ',
            negativeColor: 'red',
            negativeParens: true,
            groupingSymbol: '.',
            decimalSymbol: ',',
            fractionDigits: 2
          }
        },
        {
          type: 'NumberFormat',
          column: 2,
          options: {
            prefix: 'R$ ',
            negativeColor: 'red',
            negativeParens: true,
            groupingSymbol: '.',
            decimalSymbol: ',',
            fractionDigits: 2
          }
        }
      ]}
      options={{
        legend: { position: 'bottom', textStyle: { color: '#FFFFFF' } },
        hartArea: { width: '50%' },
        // isStacked: true,
        backgroundColor: '#2e2e2e',
        colors: ['#1E88E5', '#D32F2F'],
        hAxis: {
          textStyle: { color: '#FFFFFF' },
          titleTextStyle: { color: '#FFFFFF' },
          gridlines: { color: '#555555' },
          baselineColor: '#555555'
        },
        vAxis: {
          textStyle: { color: '#FFFFFF' },
          titleTextStyle: { color: '#FFFFFF' },
          gridlines: { color: '#555555' },
          baselineColor: '#555555'
        },
        titleTextStyle: {
          color: '#FFFFFF'
        }
      }}
    />
  )
}

export { Chart }
