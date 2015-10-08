$(function(){
    $(window).scroll(function(){
        var winTop = $(window).scrollTop();
        if(winTop >= 30){
            $("body").addClass("sticky-header");
        }else{
            $("body").removeClass("sticky-header");
        }//if-else
    });//win func.
});//ready func.

google.setOnLoadCallback(drawChart2);
function drawChart2() {

    var data = google.visualization.arrayToDataTable([
        ['Gender', 'Percentage'],
        ['Male',    70.9],
        ['Female',   29.1]
    ]);

    var options = {
        title: 'Women Currently in the Tech World'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}/**
 * Created by Derek on 10/12/2015.
 */

google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Company', 'Percentage of Female Workers'],
        ['Amazon', 37],
        ['Facebook', 31],
        ['Google', 30],
        ['Apple', 30],
        ['Twitter', 30],
        ['Microsoft', 29.5],
        ['Intel', 24]
    ]);

    var options = {
        title: 'Percentages of Females Working in Major Tech Companies',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Percentage',
            minValue: 0
        },
        vAxis: {
            title: 'Company'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}

