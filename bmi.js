const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)


form.addEventListener('click', function (e) {
  e.preventDefault();///taki data server pe naa jaaye 

  const height = parseInt(document.querySelector('#height').value);//value integer m chahiye
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
   const final = document.querySelector('#final');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);//upto decimal to
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  
  if (bmi<18.6){
    final.innerHTML=`since bmi is ${bmi} person is undernourished`;
  }
  else if(bmi>=18.6 && bmi<24.9){
    final.innerHTML=`since bmi is ${bmi} so person falls in normal range`;
}
    else if (bmi>24.9){
     final.innerHTML =`since bmi is ${bmi} so person is overweight`;
    }


  }

});