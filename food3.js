const loadMealsd = (search)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMeals(data.meals))
}

const displayMeals = (meals) =>{
    const mealContanar = document.getElementById('meal-contanar');
    mealContanar.innerText ='';
    meals.forEach(meal =>{
        console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                                        <!-- Button trigger modal -->
                    <button onclick="loadIdMens(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                    Detals
                    </button>
                    </div>
                  </div>
        `
        mealContanar.appendChild(mealDiv)
        
    })
}


const searchButton = () =>{
    const inputText = document.getElementById('input-text').value;
    loadMealsd(inputText)
    
}

const loadIdMens = (idMeal)=>{
    
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMealsDetails(data.meals[0]))
}
const displayMealsDetails = (meal) =>{
    console.log(meal)
const mealDetailsLabel = document.getElementById('mealDetailsLabel');
mealDetailsLabel.innerText = meal.strMeal

const mealDetailsphoto = document.getElementById('mealDetailsphoto');
mealDetailsphoto.innerHTML = `<img class="img-fluid" src="${meal.strMealThumb}" alt="">`
}
loadMealsd('f')
