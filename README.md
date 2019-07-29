# Frontend Remix

Welcome! Contained here is the shell project for the developer interview.
Don't stress and lets crush some code.

We aren't fans of whiteboard interviews or synthetic toy problems to assess 
if someone will be a good fit on an engineering team. Instead we think your interview should 
mirror what your typical day to day will actually be so that we can all get an accurate 
picture of what working together will be like. 

## Overview

We're going to build a reporting dashboard using fake data from a fictional business data API.
Our fictional API returns daily data for a set of fictional restaurants that we manage. 
This project is broken up into three pieces: creating mockups, implementing those mockups, 
and adding JavaScript features. You should complete the pieces in order since they build
upon each other.

## Before you start...

* Definitely Don't spend more than 3-4 hours on this
* Read this whole document before you start so you can quarterback things out
* Don't add any libraries to the source files
* Using StackOverflow is fine but don't blindly copy/paste code
* You'll need to run some sort of web server for the AJAX to work - ex. ```python -mSimpleHTTPServer```

## The API

To keep things simple, our "API" will just be a static JSON file at api.json in this repository.
You'll still have to load it via AJAX but you wont need to fiddle with any authentication or 3rd parties.
The API isn't particularly well designed but that's life.

The API returns a list of objects which are each a data point for a day of operations at
a restaurant. Each object will contain the following:

```javascript
{
    name: string; // Name of the restaurant
    reportDate: string; // YYYY-MM-DD date for the day that the data is for
    revenue: number; // Total revenue for the day in dollars
    totalCost: number; // Total costs for the day in dollars
    totalTables: number; // Total number of tables seated
}
```

A few things to note about the API:
* There's no guarantee of how the data will be sorted in the JSON
* Each day of data for a restaurant will be an object so 7 days of data for one restaurant will be 7 list entries
* Don't edit the JSON file but you can manipulate the data after it's fetched (this will make sense later)

## Mockups!

Mirroring how we develop new features, the first step will be to create some "low fidelity"
mockups. Feel free to use any tool that you're comfortable with. 
We use Balsamiq but pen and paper or a whiteboard is fine. 
Just make sure your sketches are legible.

Our dashboard needs to contain a few components:
* 3 hero/top of line metrics - total profit, average tables served, and longest profitable streak
* A line chart with dates on the X-axis and profit, revenue, cost, or # tables on the Y-axis
* Filters to filter by restaurants and report date. These should apply to the hero metrics and chart. Also, include a "Reset" button to reset the state of the filters. 
* Some way to switch what's displayed on the Y-axis (profit, revenue, cost, or # tables)

A few things to consider:
* You'll implement this in Bootstrap 4 so feel free to use any off the shelf Bootstrap components
* Don't worry about a responsive view right now, it's beyond the scope
* Feel free to add any clarifying notes about functionality
* These are just mockups so they don't need to be perfect

## Implement it!

With your mockups done, the next step is going to be implementing just the look and feel 
in HTML+CSS. Don't worry about wiring up any functionality yet. 
We've setup mockup.html with Bootstrap 4 and a sample chart. 
Don't add any additional libraries but feel free to add any additional CSS styling.

What we're looking for is faithfully turning the mockups into well written HTML/CSS that
correctly uses the Bootstrap framework.

## Coding time!

The first step is going to be to write some JavaScript to handle business logic
that we'll probably need for the dashboard. Take a look at code.html, it loads 
code.js which has stubs for the functions you'll need to fill in. We suggest going 
in the order they'll labeled but feel free to jump around if that's easier.

You'll probably want to use moment.js but don't add any additional libraries. 
Also feel free to use any standard ES6 functions.

What we're interested in here is how you approach typical JS tasks so leave comments 
if you think they'll help us understand your thinking.

## Hook it up!

To keep things simple, we're kicking it old school. 
No modern frameworks just JavaScript (ES6), jQuery, and moment.js. Take your HTML from 
mockup.html with the implemented code.js in index.html and connect them so that 
your mockup is "live" and using our fake API. We aren't using Angular or React but 
you should apply what you know about how those frameworks work to inform how you implement this. 
You will need to add extra JavaScript code  to get things working. How you approach that is entirely up to you!
