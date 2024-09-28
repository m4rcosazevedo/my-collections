import { Chart } from 'react-google-charts'

interface PieProps {
  data: unknown[]
  title?: string
}

const Pie = ({ data, title = '' }: PieProps) => {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={{
        title,
        backgroundColor: '#333',
        titleTextStyle: {
          color: '#fff'
        },
        pieSliceTextStyle: {
          color: '#fff'
        },
        legend: {
          textStyle: {
            color: '#fff'
          }
        },
        slices: {
          0: { color: '#FF5722' }, // Laranja forte
          1: { color: '#FFC107' }, // Amarelo
          2: { color: '#4CAF50' }, // Verde médio
          3: { color: '#2196F3' }, // Azul
          4: { color: '#9C27B0' }, // Roxo
          5: { color: '#E91E63' }, // Rosa
          6: { color: '#00BCD4' }, // Ciano
          7: { color: '#CDDC39' }, // Verde-limão
          8: { color: '#8BC34A' }, // Verde claro
          9: { color: '#FF9800' }, // Laranja claro
          10: { color: '#795548' }, // Marrom
          11: { color: '#607D8B' }, // Cinza-azulado
          12: { color: '#F44336' }, // Vermelho
          13: { color: '#673AB7' }, // Roxo escuro
          14: { color: '#3F51B5' }, // Azul escuro
          15: { color: '#009688' }, // Verde-água
          16: { color: '#FFEB3B' }, // Amarelo claro
          17: { color: '#C2185B' }, // Rosa escuro
          18: { color: '#7B1FA2' }, // Roxo vibrante
          19: { color: '#FF5252' } // Vermelho vibrante
        }
      }}
      width={'100%'}
      height={'400px'}
    />
  )
}

export { Pie }
