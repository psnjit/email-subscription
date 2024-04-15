  const scriptURL = 'https://script.google.com/macros/s/AKfycbzv4lNu4jN9qFkJf-B8eyEefdLC0wq1blfXWnRKoB2pJZDrQHjhLCGUIW0dfjz-qSW3/exec'
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        console.log('Success!', response); 
        msg.textContent='Thank you for subscribing!'
        setTimeout(()=>{msg.textContent="";}, 5000);
        form.reset();
    })
      .catch(error => console.error('Error!', error.message))
  })
