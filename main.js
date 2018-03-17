$('#btn').click(function() {
    $.ajax({
        method: 'GET',
        url: 'https://baconipsum.com/api/?type=meat-and-filler',
        dataType: 'json'
    })
    .done(function(data) {
        $('#data').text(data[0]);
    })
    .fail(function() {
        alert('OH NO! FAILED!');
    });
});

$("#getBtn").click(function(){
    $.get('https://api.github.com/users/colt')
    .done(function(data) {
        console.log(data);
    })
    .fail(function() {
        console.log('ERROR!');
    });
});

$('#postBtn').click(function() {
    const data = { name: 'Jimbone', city: 'Tampa' };
    $.post('https://savoyband.com', data)
    .done(function(data) {
        console.log(data);
    })
    .fail(function() {
        console.log('EPIC FAIL!');
    });
});

$('#getJSONBtn').click(function() {
    $.getJSON('https://api.github.com/users/graysmith00')
    .done(function(data) {
        console.log(data);
    })
    .fail(function() {
        console.log('EPIC JSON FAIL BROOO');
    });
})