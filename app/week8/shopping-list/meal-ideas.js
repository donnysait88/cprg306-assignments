"use client"

import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {

  const [meals, setMeals] = useState([]); // hold the list of meal ideas
  const [isLoading, setIsLoading] = useState(false);
  const [ingredientSelected, setIngredientSelected] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [mealIngredients, setMealIngredients] = useState(null); // New state for ingredients, mealIngredient = meal


  const getMealIdeas = async (ingredient) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      console.log(data)
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([])
      }

    } catch (error) {
        console.error('Error fetching meal ideas:', error);
        setMeals([]);
    } finally {
      setIsLoading(false);
      setIngredientSelected(true);
    }
  };

  const getMealIngredient = async (mealId) => {
    try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    const data = await response.json();
    console.log(data)
    if (data.meals && data.meals.length > 0) {
      setMealIngredients(data.meals[0]); // Set the ingredients for the selected meal
    }

    } catch (error) {
      console.error('Error fetching meal ingredients:', error);
    }
  }

  const selectMeal = async (meal) => {
    const mealId = meal.idMeal;
    setSelectedMeal(meal);
    await getMealIngredient(mealId)
  }


  useEffect(() => {
    console.log('useEffect triggered with ingredient:', ingredient);
    getMealIdeas(ingredient);
  }, [ingredient]);


  return (
    <div>
      <h1 className="text-2xl font-bold font-mono">More Ideas</h1>
      {isLoading ? (<p>Loading...</p>) : (
        
        <div>
          {ingredientSelected ? (meals.length > 0 ? (
              <div>
                <h2 className="mb-2">Here are some meal ideas using {ingredient}</h2>
                <ul >
                  {meals.map((meal) => (
                    <div 
                      key={meal.idMeal}
                      className="bg-[#F39F5A] p-2 mb-3 rounded-l hover:bg-amber-200 cursor-pointer"
                      onClick={()=> selectMeal(meal)}
                    >
                      
                      
                      <li key={meal.idMeal} >
                        <div className="ml-5 text-[20px] font-serif font-bold">
                        {meal.strMeal}
                        <hr />
                        </div>

                        

                        {selectedMeal && selectedMeal.idMeal === meal.idMeal && mealIngredients && (
                        <div className="flex">
                          <div className="flex-col w-[50%]">
                            <p className="text-[20px] m-5">ID:{meal.idMeal}</p>
                            <div className="w-[70%] ml-5 mb-5 ">
                              <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded-xl"/>
                            </div>
                          </div>
                          <div className="flex-row mt-4">
                            <h2 className="font-bold text-[18px]">Ingredients for {selectedMeal.strMeal}</h2>
                            <ul>
                            {Object.keys(mealIngredients).map((key) => {
                              if (key.includes('strIngredient') && mealIngredients[key]) {
                                const ingredientNumber = key.replace('strIngredient', '');
                                const measureKey = `strMeasure${ingredientNumber}`;
                                const ingredient = mealIngredients[key];
                                const measure = mealIngredients[measureKey];
                                return (
                                  <li key={ingredientNumber}>
                                    {ingredient}({measure})
                                  </li>
                                );
                              }
                              return null;
                            })}
                            </ul>
                          </div>
                        </div>
                        )}
                        
                      </li>
                      
                    </div>
                    
                  ))}
                  
                </ul>
                
              </div>
            ) : (
              <p>No meal ideas found for {ingredient}</p>
            )
          ) : (
            <p>Select an item to see meal ideas</p>
          )}
        </div>
      )}

      


    </div>
  );
};

export default MealIdeas;
