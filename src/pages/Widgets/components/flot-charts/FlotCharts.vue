<template>
  <div class="flot-charts">
    <b-row>
      <b-col lg="6" xs="12">
        <Widget
          title="<div class='row'>
            <div class='col-4'>
              <h6>
                Total Sales
              </h6>
              <p class='value5'>
                January, 2018
              </p>
            </div>
            <div class='col-3'>
              <h5>
                <small>Best</small>
              </h5>
              <p class='value6 fs-sm'>
                March, 2018 + 1
              </p>
            </div>
          </div>"
          settings close customHeader
        >
          <div class="chart-stats">
            <p class="fs-mini mt-xs">
              <i class="fa fa-map-marker fa-5x pull-left text-primary" />
              <span class="fw-semi-bold text-muted">Jess:</span>
                Seems like statically it&apos;s getting impossible
                to achieve any sort of results in nearest future. The
                only thing we can hope for is pressing one of these two buttons:
              </p>
            <div class="btn-toolbar">
              <b-button variant="primary" size="xs">Accept</b-button>
              <b-button variant="default" size="xs">Reject</b-button>
            </div>
          </div>
          <div class="chart">
            <highcharts :options="chart_one"></highcharts>
          </div>
        </Widget>
      </b-col>
      <b-col lg='6' xs='12'>
        <Widget
          class=" widget-chart-stats-simple" title="<div class='row'>
            <div class='col-12'>
              <h6 class='mb-0'>
                <span class='fw-semi-bold'>Budget</span>&nbsp;
                <div class='badge badge-pill bg-danger'>2017</div>
              </h6>
              <span class='text-muted fs-mini'>
                monthly report will be available in <a href='#'>6 hours</a>
              </span>
            </div>
          </div>"
          settings close customHeader
        >
          <div class="chart-stats">
            <div class="row">
              <div class="col-md-5">
                <div class="clearfix m-t-1">
                  <h6 class="pull-left text-muted mb-xs">
                      Income
                    </h6>
                  <p class="pull-right h6 mb-xs">
                    <span class="fw-semi-bold">$14,595</span>
                  </p>
                </div>
                <div class="clearfix">
                  <h6 class="pull-left no-margin text-muted">
                      Recent
                    </h6>
                  <p class="pull-right">
                    <span class="fw-semi-bold">$7,647</span>
                  </p>
                </div>
              </div>
              <div class="col-md-3 text-end m-t-1">
                <h6 class="text-muted mb-xs">Inqueries</h6>
                <p class="fw-semi-bold">73 at 14am</p>
              </div>
              <div class="col-md-4 text-end m-t-1">
                <h6 class="text-muted mb-xs">Last Updated</h6>
                <p class="fw-semi-bold">23.06.2013</p>
              </div>
            </div>
          </div>
          <div class="chart">
            <highcharts :options="chart_two"></highcharts>
          </div>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import config from '../../../../config'
import Widget from '@/components/Widget/Widget';
import { Chart } from 'highcharts-vue';
const colors = config.colors;

export default {
  name: 'FlotCharts',
  components: { Widget, highcharts: Chart },
  data() {
    let options = {
      title: false,
      chart: {
        height: 200,
        margin: 0,
        backgroundColor: 'transparent'
      },
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        series: {
          lineWidth: 1,
          marker: {
            enabled: false,
            symbol: 'circle'
          },
          states: {
            hover: {
              lineWidth: 1
            }
          }
        },
      },
      legend: false,
      xAxis: {
        visible: false,
        minPadding: 0,
        maxPadding: 0
      },
      yAxis: {
        visible: false,
        minPadding: 0,
        maxPadding: 0
      }
    };

    return {
      chart_one: {
        ...options,
        series: this.generateRandomData([{
          name: 'Visitors', color: colors.blue,
        }, {
          name: 'Charts', color: colors.red,
        }])
      } ,
      chart_two: {
        ...options,
        series: this.generateRandomData([{
          name: 'Controllers', color: colors.green,
        }, {
          name: 'Scopes', color: colors.blue,
        }])
      }
    };
  },
  methods: {
    generateRandomData(labels) {
      function random() {
        return (Math.floor(Math.random() * 30)) + 10;
      }

      const data = [];
      let maxValueIndex = 5;

      for (let i = 0; i < labels.length; i += 1) {
        const randomSeries = [];
        for (let j = 0; j < 25; j += 1) {
          randomSeries.push([j, Math.floor(maxValueIndex * j) + random()]);
        }
        maxValueIndex -= 1;
        data.push({
          data: randomSeries,
          color: labels[i].color,
          name: labels[i].name
        });
      }
      return data;
    },
  }
};
</script>

<style src="./FlotCharts.scss" lang="scss" scoped />
