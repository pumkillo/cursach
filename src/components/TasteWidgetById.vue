/* eslint-disable vue/no-unused-components */
<template>
  <Radar :chart-data="chartData" :chart-options="chartOptions" />
</template>

<script>
import { Radar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Tooltip,
  PointElement,
  RadialLinearScale,
  LineElement,
} from "chart.js";
ChartJS.register(Tooltip, PointElement, RadialLinearScale, LineElement);
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("Recipes/tasteWidget");

export default {
  name: "TasteWidgetById",
  props: ["recipeID"],
  data() {
    return {
      widget: "",
      dataset: "",
      chartData: {
        labels: ["Sweet", "Salty", "Sour", "Bitter", "Savory", "Fatty"],
        datasets: [
          {
            backgroundColor: "rgb(153,204,102, 0.2)",
            borderColor: "rgb(153,204,102)",
            pointBackgroundColor: "rgb(153,204,102)",
            data: [],
          },
        ],
      },
      chartOptions: {
        animation: { duration: 10 },
        legend: { display: !1 },
        title: { display: !1 },
        scale: {
          pointLabels: { fontSize: 20 },
          angleLines: { display: !0 },
        },
        scales: {
          r: {
            angleLines: {
              display: true,
            },
            suggestedMin: 0,
            suggestedMax: 100,
            ticks: { display: false, min: 0, max: 100, stepSize: 20 },
          },
        },
      },
    };
  },
  components: { Radar },
  mounted() {
    this.getTasteWidget();
  },
  watch: {
    recipeID() {
      this.getTasteWidget();
    },
  },
  methods: {
    ...mapActions(["getRecipeTasteWidget"]),
    async getTasteWidget() {
      await this.getRecipeTasteWidget(this.recipeID).then(
        (response) => (this.widget = response)
      );
      this.dataset = [
        this.widget.sweetness,
        this.widget.saltiness,
        this.widget.sourness,
        this.widget.bitterness,
        this.widget.savoriness,
        this.widget.fattiness,
      ];
      this.chartData.datasets[0].data = this.dataset;
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  max-width: 335px;
  height: fit-content;
}
</style>
