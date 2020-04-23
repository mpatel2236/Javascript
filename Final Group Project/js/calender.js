$(document).ready(function () {
    var date = new Date();
    var today = date.getDate();

    $(".right-button").click({
        date: date
    }, nextYear);
    $(".left-button").click({
        date: date
    }, previousYear);
    $(".month").click({
        date: date
    }, clickOnMonth);
    $("#add-button").click({
        date: date
    }, newEvent);

    $(".months-row").children().eq(date.getMonth()).addClass("active-month");
    calender(date);
    var events = eventCheck(today, date.getMonth() + 1, date.getFullYear());
    showEvent(events, months[date.getMonth()], today);
});

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function calender(date) {
    $(".tbody").empty();
    $(".events-container").empty();
    var calDays = $(".tbody");
    var month = date.getMonth();
    var year = date.getFullYear();
    var total_days = MonthDays(month, year);
    var row = $("<tr class='table-row'></tr>");
    var today = date.getDate();

    date.setDate(1);
    var first_day = date.getDay();

    for (var i = 0; i < 35 + first_day; i++) {

        var day = i - first_day + 1;

        if (i % 7 === 0) {
            calDays.append(row);
            row = $("<tr class='table-row'></tr>");
        }

        if (i < first_day || day > total_days) {
            var currentDate = $("<td class='table-date nil'>" + "</td>");
            row.append(currentDate);
        } else {
            var currentDate = $("<td class='table-date'>" + day + "</td>");
            var events = eventCheck(day, month + 1, year);
            if (today === day && $(".active-date").length === 0) {
                currentDate.addClass("active-date");
                showEvent(events, months[month], day);
            }

            if (events.length !== 0) {
                currentDate.addClass("event-date");
            }

            currentDate.click({
                events: events,
                month: months[month],
                day: day
            }, clickOnDate);
            row.append(currentDate);
        }
    }

    calDays.append(row);
    $(".year").text(year);
}

function clickOnDate(event) {
    $(".events-container").show(250);
    $("#dialog").hide(250);
    $(".active-date").removeClass("active-date");
    $(this).addClass("active-date");
    showEvent(event.data.events, event.data.month, event.data.day);
};

function clickOnMonth(event) {
    $(".events-container").show(250);
    $("#dialog").hide(250);
    var date = event.data.date;
    $(".active-month").removeClass("active-month");
    $(this).addClass("active-month");
    var new_month = $(".month").index(this);
    date.setMonth(new_month);
    calender(date);
}

function MonthDays(month, year) {
    var monthStart = new Date(year, month, 1);
    var monthEnd = new Date(year, month + 1, 1);
    return (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
}

function previousYear(event) {
    $("#dialog").hide(250);
    var date = event.data.date;
    var new_year = date.getFullYear() - 1;
    $("year").html(new_year);
    date.setFullYear(new_year);
    calender(date);
}

function nextYear(event) {
    $("#dialog").hide(250);
    var date = event.data.date;
    var new_year = date.getFullYear() + 1;
    $("year").html(new_year);
    date.setFullYear(new_year);
    calender(date);
}

function newEvent(event) {

    if ($(".active-date").length === 0)
        return;

    $("input").click(function () {
        $(this).removeClass("error-input");
    })

    $("#dialog input[type=text]").val('');
    $("#dialog input[type=number]").val('');
    $(".events-container").hide(250);
    $("#dialog").show(250);

    $("#cancel-button").click(function () {
        $("#name").removeClass("error-input");
        $("#count").removeClass("error-input");
        $("#dialog").hide(250);
        $(".events-container").show(250);
    });

    $("#ok-button").unbind().click({
        date: event.data.date
    }, function () {
        var date = event.data.date;
        var name = $("#name").val().trim();
        var count = "1";
        var day = parseInt($(".active-date").html());
        // Basic form validation
        if (name.length === 0) {
            $("#name").addClass("error-input");
        } else if (isNaN(count)) {
            $("#count").addClass("error-input");
        } else {
            $("#dialog").hide(250);
            console.log("new event");
            newJson(name, count, date, day);
            date.setDate(day);
            calender(date);
        }
    });
}

var eventJson = {
    "events": [
        {
            "occasion": " Exam Day ",
            "invited_count": 120,
            "year": 2019,
            "month": 4,
            "day": 9,
    }
    ]
};

function newJson(name, count, date, day) {
    var event = {
        "occasion": name,
        "invited_count": count,
        "year": date.getFullYear(),
        "month": date.getMonth() + 1,
        "day": day
    };
    eventJson["events"].push(event);
}

function eventCheck(day, month, year) {
    var events = [];
    for (var i = 0; i < eventJson["events"].length; i++) {
        var event = eventJson["events"][i];
        if (event["day"] === day &&
            event["month"] === month &&
            event["year"] === year) {
            events.push(event);
        }
    }
    return events;
}

function showEvent(events, month, day) {

    $(".events-container").empty();
    $(".events-container").show(250);
    console.log(eventJson["events"]);
    for (var i = 0; i < events.length; i++) {
        var event_card = $("<div class='event-card'></div>");
        var event_name = $("<div class='event-name'>" + events[i]["occasion"] + "</div>");
        var event_count = $("<div class='event-count'>" + events[i]["invited_count"] + " Invited</div>");
        $(event_card).append(event_name);
        $(".events-container").append(event_card);
    }

}
