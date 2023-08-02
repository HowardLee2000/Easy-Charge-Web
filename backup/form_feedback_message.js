const sumbitBtn = document.getElementById('submit');
const warning = document.getElementById('warning');

sumbitBtn.addEventListener('click', function() {
  console.log('dsf')
  let name = document.getElementById('name');
  let phoneNum = document.getElementById('contact');
  let email = document.getElementById('email');
  let merchant = document.getElementById('merchant_type');
  let desc = document.getElementById('description');

  if(name.value === '' || phoneNum.value === '' || email.value === '' || merchant.value === '' || desc.value === '' ||) {
    warning.style.display = 'block';
  }
});