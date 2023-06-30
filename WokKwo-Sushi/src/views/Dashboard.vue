<template>
<div class="dashboard">
  <p>Our orders for the last 12 months</p>
  <div class="bar-chart">
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </div>
  <div class="doughnut-charts">
    <div>
      <p>Our most popular items</p>
      <div class="doghnut-chart">
        <Doughnut :data="doghnutChartData" :options="doghnutChartOptions" />
      </div>
    </div>

    <div>
      <p>Our least popular items</p>
      <div class="doghnut-chart">
        <Doughnut :data="doughnutChartData2" :options="doughnutChartOptions2" />
      </div>
    </div>

  </div>
</div>
</template>

<script>
import { Bar, Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)
import {data, options} from "../data/chartConfig.js"
import { data as dataDoghnut, options as optionsDoghnut} from "../data/chartConfig2.js"
import { data as dataDoghnut2, options as optionsDoghnut2} from "../data/chartConfig3.js"

export default {
  name: 'BarChart',
  components: { 
    Bar,
    Doughnut
  },
  data() {
    return {
      chartData: data,
      chartOptions: options,
      doghnutChartData: dataDoghnut,
      doghnutChartOptions: optionsDoghnut,
      doughnutChartData2: dataDoghnut2,
      doughnutChartOptions2: optionsDoghnut2,
    }
  }
}
</script>

<style scoped>

.dashboard {
  display: flex;
  flex-direction: column;
  gap: 40%;
  height: 100%;
}
.bar-chart {
  height: 500px;
}

.dashboard p{
  margin: 50px 0;
  font-family: var(--plus-jakarta-sans);
  color: var(--secondary-color);
  font-size: 34px;
  text-align: center;
}

.doughnut-charts{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 10%;
  height: 350px;
}

.doughnut-charts div p{
  margin: 100px 0 20px 0;
  font-family: var(--plus-jakarta-sans);
  color: var(--secondary-color);
  font-size: 34px;
}

.doghnut-chart {
  height: 300px;
}
</style>