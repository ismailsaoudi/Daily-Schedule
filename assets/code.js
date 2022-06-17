mobiscroll.setOptions({
    theme: 'ios',
    themeVariant: 'light',
    clickToCreate: true,
    dragToCreate: true,
    dragToMove: true,
    dragToResize: true,
    eventDelete: true
});

$(function () {

    var inst = $('#demo-desktop-day-view').mobiscroll().eventcalendar({
        view: {
            schedule: { type: 'day' }
        },
        onEventClick: function (event, inst) {
            mobiscroll.toast({
                message: event.event.title
            });
        }
    }).mobiscroll('getInst');

    $.getJSON('https://trial.mobiscroll.com/events/?vers=5&callback=?', function (events) {
        inst.setEvents(events);
    }, 'jsonp');

});