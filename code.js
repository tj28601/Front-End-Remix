class Metric {
    constructor(data) {
        this.data = this.calculateProfit(data);
    }

    /**
     * #1
     * Given the data array from the API,
     * calculate the profit (revenue - cost) for each data point,
     * add a "profit" property to each object, and return an array with the updated data points.
     */
    calculateProfit(data) {
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
        return {totalProfit: -1, averageTablesServed: -1, longestProfitableStreak: -1};
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
        return {};
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
        return null;
    }

  /**
   * #5
   * Implement doLoadingScreen so that it returns a Promise which is resolved after "loadingMs" milliseconds.
   */
    doLoadingScreen(loadingMs){
        return null;
    }
}