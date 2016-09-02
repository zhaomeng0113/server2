$(function() {
    getOne();
});
function getOne(){
    $("#morris-one-line-chart").empty();
    Morris.Line({
        element: 'morris-one-line-chart',
        data: [
            { year: '2008', value: 5 },
            { year: '2009', value: 10 },
            { year: '2010', value: 8 },
            { year: '2011', value: 22 },
            { year: '2012', value: 8 },
            { year: '2014', value: 10 },
            { year: '2015', value: 5 }
        ],
        xkey: 'year',
        ykeys: ['value'],
        resize: true,
        lineWidth:4,
        labels: ['Value'],
        lineColors: ['#1ab394'],
        pointSize:5
    });
}
function getTwo(){
    $("#morris-one-line-chart").empty();
    var line = new Morris.Line({
        element: 'morris-one-line-chart',
        resize: true,
        data: [
            {year: '2011 Q1', data: 1000},
            {year: '2011 Q2', data: 8000},
            {year: '2011 Q3', data: 6000},
            {year: '2011 Q4', data: 4000},
            {year: '2012 Q1', data: 5000},
            {year: '2012 Q2', data: 6000},
            {year: '2012 Q3', data: 7000},
            {year: '2012 Q4', data: 6000},
            {year: '2013 Q1', data: 8000},
            {year: '2013 Q2', data: 10000},
            {year: '2013 Q3', data: 8000},
            {year: '2013 Q4', data: 10000}
        ],
        xkey: 'year',
        ykeys: ['data'],
        labels: ['value'],
        lineColors: ['#3c8dbc'],
        hideHover: 'true'
    });
}
