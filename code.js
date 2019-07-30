class Metric {
    constructor(data) {
        this.data = this.calculateProfit(data);
        this.loadingMs = 3000;
    }

    /**
     * #1
     * Given the data array from the API,
     * calculate the profit (revenue - cost) for each data point,
     * add a "profit" property to each object, and return an array with the updated data points.
     */
    calculateProfit(data) {
      for (var i = 0; i < data.length; i ++) {
        data[i].profit = data[i].revenue - data[i].totalCost
      }
      return data;
    }

    /**
     * #2
     * Calculate and return the hero metrics for the data in "this.data"
     * Metrics are:
     *      total profit - Sum up the profit for each data point
     *      average tables served - Sum the total number of tables and divide by the [total number of restaurants * number of days of data]
     *                              Ex. 5000 tables, 5 restaurants, 7 days = 5000 / (5 * 7) = 142
     *      longest profitable streak - Find the longest consecutive number of days that profit went up
     *
     */
    getHeroMetrics() {
        let profit = 0;
        let tables = 0;
        let restaurants = [];
        let days = [];
        let sortedData = this.data.sort((a, b) => (a.reportDate > b.reportDate) ? 1 : -1);
        for (var i = 0; i < this.data.length; i ++) {
          profit += this.data[i].profit;
          tables += this.data[i].totalTables;

          if (!restaurants.includes(this.data[i].name)) {
            restaurants.push(this.data[i].name);
          }
          if (!days.includes(this.data[i].reportDate)) {
            days.push(this.data[i].reportDate);
          }
        }

        let profitHash = {};

        for (var i = 0; i < sortedData.length; i ++) {
          if (profitHash[sortedData[i].reportDate]) {
            profitHash[sortedData[i].reportDate] += sortedData[i].profit;
          } else {
            profitHash[sortedData[i].reportDate] = sortedData[i].profit;
          }
        }

      const profitArray = [];
      for (const [key, value] of Object.entries(profitHash)) {
        profitArray.push(profitHash[key]);
      }
      
      let max = 1;
      let len = 1;

      for (var i = 1; i < profitArray.length; i ++) {
        if (profitArray[i] > profitArray[i - 1]) {
          len++;
        } else {
          if (max < len) {max = len};
          len = 1;
        }
      }

      let avgTablesServed = tables / restaurants.length * days.length;

      return {totalProfit: profit, averageTablesServed: avgTablesServed, longestProfitableStreak: max};
    }


    /**
     * #3
     * Take whatever is in "this.data" and return an object that can be used as a value to "data:"
     * in a chart.js line chart. See mockup.html for a working example.
     * Feel free to add some extra helper functions here.
     *
     * NOTE: MAKE SURE THE DATES DISPLAY IN ORDER ON THE CHART
     */
    toChartData() {
      let days = [];
      let restaurants = [];
      let dataSetArray = [];
      for (var i = 0; i < this.data.length; i ++) {
        if (!restaurants.includes(this.data[i].name)) {
          restaurants.push(this.data[i].name)
        }
        if (!days.includes(this.data[i].reportDate)) {
          days.push(this.data[i].reportDate)
        }
      }

      var emptyHash = {};
      for (i = 0; i < this.data.length; i ++) {
          if (emptyHash[this.data[i].name]) {
              emptyHash[this.data[i].name].push(this.data[i].profit);
          } else {
              emptyHash[this.data[i].name] = [];
              emptyHash[this.data[i].name].push(this.data[i].profit);
          }
      }

      return  {
        labels: days,
        datasets: [
            {
                label: restaurants[0],
                fill: false,
                borderColor: "rgba(0, 173, 181, 1)",
                data: emptyHash[restaurants[0]],
            },
            {
                label: restaurants[1],
                fill: false,
                borderColor: "rgba(255,0,0)",
                data: emptyHash[restaurants[1]],
            },
            {
                label: restaurants[2],
                fill: false,
                borderColor: "rgba(128,0,128)",
                data: emptyHash[restaurants[2]],
            },
            {
                label: restaurants[3],
                fill: false,
                borderColor: "rgba(144, 238, 144, 1)",
                data: emptyHash[restaurants[3]],
            },
            {
                label: restaurants[4],
                fill: false,
                borderColor: "rgba(248, 181, 0, 1)",
                data: emptyHash[restaurants[4]],
            },
        ]
      }
    }

    /**
     * #4
     * Given a function (fn) use it to filter the values in "this.data".
     * fn will run truth test on "this". Ex. function fn(point){ return this.profit > 0; }
     * If fn(datapoint) returns true, keep the point and if it returns false remove the point.
     *
     * Implement this so that this.data is immutable and so that filter can be chained. Ex. metric.filter(x).filter(f)
     */
    filter(fn) {
        //My code below is not working;
        //I thought that we could potentially create a new array after taking
        //the value of fn into consideration, but I was having trouble with this approach.
        //I ended up tweaking the code in code.html from this:
        // const filterResult = metric.filter(point => this.reportDate === "2018-12-01");
        // to this:
        // const filterResult = new Metric(metric.data.filter(point => point.reportDate === "2018-12-01"));

        let filteredDays = [];
        for (var i = 0; i < this.data.length; i ++) {
          if (this.data[i].reportDate == fn) {
            filteredDays.push(this.data[i]);
          }
        }

        var fooBar = new Metric(fn)
        return fooBar;
    }

  /**
   * #5
   * Implement doLoadingScreen so that it returns a Promise which is resolved after "loadingMs" milliseconds.
   */
    doLoadingScreen(loadingMs){
      var promise1 = new Promise(resolve => setTimeout(resolve, loadingMs));

      return promise1;
    }
}
