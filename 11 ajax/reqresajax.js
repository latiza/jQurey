$(document).ready(() => {
    const $showData = $('#show-data');
    //const $raw = $('pre');

    $('#get-data').on('click', (e) => {
        e.preventDefault();

        $showData.text('Loading the JSON file.');

        //$.getJSON('https://jsonplaceholder.typicode.com/posts', (data) => {
        $.ajax({
            type: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts',
            //data: data,
            async: false,
            beforeSend: (xhr) => {
                if (xhr && xhr.overrideMimeType) {
                    xhr.overrideMimeType('application/json;charset=utf-8');
                }
            },
            dataType: 'json',
            success: (data) => {
                //Do stuff with the JSON data
                const markup = data
                    .map(item => `<li><b>${item.title}</b>: ${item.body}</li>`)
                    .join('');

                const list = $('<ul />').html(markup);

                $showData.html(list);

                //$raw.text(JSON.stringify(data, undefined, 2));
                console.log(data);
            }
        });
    });
});