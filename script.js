const scriptURL = 'https://script.google.com/macros/s/AKfycbxJbCxjTKEGjF8ZglrAE4Nqm-n2_4WjY9YGoFDDK1mH6RSquQL-zpGTzQxcKJa-gq0W/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})