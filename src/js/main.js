/*global require*/
'use strict';

require.config({
  paths: {
    // d3: 'https://d3js.org/d3.v4.min',
    // model: 'models/chartsMd',
    // controller: 'controllers/chartsCtrl',
    // view: 'views/chartsVw',
    // areaChart: 'controllers/components/areaChart',
    // donutChart: 'controllers/components/donutChart',
    // ticksChart: 'controllers/components/ticksChart'
  }
});

//probar a quitar dependencias d3 y controller a ver si tira !!

require([], function() {
  // model.getData('/data/charsData.json');
  // controller.init();
      // var chartsData = localStorage.chartsData;
      //   chartsData.forEach(function(chartsData, i){
      //     var charts = [];
      //     charts.pull(chartsData);

      // console.log(charts);
  // });

});