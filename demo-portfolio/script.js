document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted successfully!');
});
document.querySelector('.change').addEventListener('click',
    () => {
        document.querySelector('.data').innerHTML = 'Stop Listening to strangers on internet';
    }
)
