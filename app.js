const form = document.getElementById('form');

form.addEventListener( 'submit', (e) => {
    console.log('Calculating...');
    const amount = document.getElementById('amount');
    const percentage = document.getElementById('percentage');
    const year = document.getElementById('year');
    const resultAmount = document.getElementById('result-amount');
    const resultPercentage = document.getElementById('result-percentage');
    const resultYear = document.getElementById('result-year');

    const principal = parseFloat(amount.value);
    const calculatedPercentage = parseFloat(percentage.value) / 100 /12;
    const calculatedYear = parseFloat(year.value) * 12;

    const x = Math.pow(1 + calculatedPercentage, calculatedYear);
    const monthly = (principal * x * calculatedPercentage) / (x - 1);

    if (isFinite(monthly)) {
        resultAmount.value = monthly.toFixed(2);
        resultPercentage.value = (monthly * calculatedYear).toFixed(2);
        resultYear.value = ((monthly * calculatedYear) - principal).toFixed(2);
    } else {
        const div = document.createElement('div');
        div.textContent = 'Please check your numbers';
        div.className = 'error-message';
        div.style.padding = '.5rem 2rem';
        div.style.color = 'white';
        div.style.borderRadius = '.2rem';
        div.style.backgroundColor = 'rgb(226, 111, 111)';
        div.style.textAlign = 'center'; 
        const container = document.querySelector('.container');
        const head = document.querySelector('.head');
        container.insertBefore(div, head);
        setTimeout(() => {
            container.removeChild(div);
        }, 3000);
    }




    e.preventDefault();
})