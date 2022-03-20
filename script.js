const timeContainer = $('#time-container');

var currentDay = moment().format("MMM Do, YYYY");
setInterval(function() {
    $("#currentDay").text(currentDay)}, 1000);

function createRow(time) {
    const timestamp = time + ':00';

    const row = $("<div>").attr('class', 'row border');

    const timeCol = $("<div>").attr('class', 'col-2').text(timestamp);
    row.append(timeCol);

    const inputCol = $("<div>").attr('class', 'col-8');
    const input = $("<input>").attr('type', 'text').attr('class', 'input-note');
    // const existingNote = getNote(time);
    // if(existingNote) {
    //     input.val(existingNote);
    // }
    inputCol.append(input);
    row.append(inputCol);

    const buttonCol = $("<div>").attr('class', 'col-2');
    const button = $("<button>").attr('class', 'btn btn-primary save-note-btn').text('Save');
    buttonCol.append(button);
    row.append(buttonCol);

    return row;
}

for (let time = 9; time < 18; time++) {
    const row = createRow(time);
    timeContainer.append(row);
}

function saveNote(note, time) {
    localStorage.setItem(time, note);
};

$('.input-note').on('change', document, function(event) {
    const inputEl = $(event.target);
    const timestamp = inputEl.parent().prev().text();
    const userInput = inputEl.val();
    saveNote(userInput, timestamp);
});

function getNote(time) {
    const timestamp = time + ':00';
    return localStoarge.getItem(timestamp);
};

$('.save-not-btn').on("click", document, function(event) {
    const inputEl = $(event.target).parent().prev().children()[0];
    const userInput = $(inputEl).val();
    const timeEl = $(event.target).parent().prev().prev();
    const timestamp = timeEl.text();
    saveNote(userInput, timestamp);
});