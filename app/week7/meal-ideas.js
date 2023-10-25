"use client"

import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {

  const [meals, setMeals] = useState([]); // hold the list of meal ideas
  const [isLoading, setIsLoading] = useState(false);
  const [ingredientSelected, setIngredientSelected] = useState(false);

  const getMealIdeas = async (ingredient) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      
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
                <ul>
                  {meals.map((meal) => (
                    <div className="bg-[#F39F5A] p-2 mb-3 rounded-l hover:bg-amber-200 cursor-pointer">
                      <li key={meal.idMeal} >
                        <div className="ml-5 text-[20px] font-serif font-bold">
                        {meal.strMeal}
                        <hr />
                        </div>
                        <img className="w-[32%] m-5 rounded-xl" src={meal.strMealThumb}/>

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
