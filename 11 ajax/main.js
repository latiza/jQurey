$(document).ready(() => {
    const $showData = $('#show-data');
    //const $raw = $('pre');
  
    $('#get-data').on('click', (e) => {
      e.preventDefault();
  
      $showData.text('Loading the JSON file.');
  
      $.getJSON('example.json', (data) => {
        const markup = data.items
          .map(item => `<li>${item.key}: ${item.value}</li>`)
          .join('');
  
        const list = $('<ul />').html(markup);
  
        $showData.html(list);
  
        //$raw.text(JSON.stringify(data, undefined, 2));
        console.log(data);
      });
    });
  });