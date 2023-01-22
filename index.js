const fat = document.querySelector('.fat')
const sugar = document.querySelector('.sugar')
const calories = document.querySelector('.calories')
const protein = document.querySelector('.protein')
const input_value = document.querySelector('input')
const submit_bttn = document.querySelector('.submit')
var hidden = document.querySelector('.get_back')
hidden.setAttribute('style', 'display:none;')
var inputs = document.querySelector('.inputs')
var info = document.querySelector('.info')
submit_bttn.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e881f7957amsh57b3ef419a60145p16e6ccjsn2e7a9ce24749',
            'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://calorieninjas.p.rapidapi.com/v1/nutrition?query=' + input_value.value, options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data.items.length === 0){
                inputs.setAttribute('style', 'display:none;')
                info.setAttribute('style', 'display:none;')
                hidden.setAttribute('style', '')
                document.querySelector('.title').innerHTML = 'We couldn`t find any type of food'
            } else{
                fat.innerHTML = 'Fat: ' + data.items[0].fat_total_g
                sugar.innerHTML = 'Sugar: ' + data.items[0].sugar_g
                calories.innerHTML = 'Calories: ' + data.items[0].calories
                protein.innerHTML = 'Protein: ' + data.items[0].protein_g
            }
        })
})
document.querySelector('.get_back').addEventListener('click', () => {
    inputs.setAttribute('style', '')
    info.setAttribute('style', '')
    hidden.setAttribute('style', 'display:none;')
    document.querySelector('.title').innerHTML = 'Type any kind of food to know about calories, vitamins, and etc.'
})