import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Components
import RecipeCard from './RecipeCard'

const RecipeIndex = ({ growingTree }) => {

  // State
  const [ recipes, setRecipes ] = useState([])
  const [ hasError, setHasError ] = useState(false)

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const { data } = await axios('/api/recipes')
        setRecipes(data)
        console.log(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getRecipes()
  }, [])

  

  return (
    <section className='recipe-list container mt-4'>
      <div className='row g-3'>
        {recipes.length > 0 ?
          recipes.map( recipe => {
            const owner = recipe.owner
            console.log(recipe)
            console.log(owner)
            return <RecipeCard key={recipe._id} {...recipe}/>
          })
          :
          <>
            {hasError ? 
              <h2 className='display-5 text-center'>Oh! Something went wrong</h2> 
              : 
              <img className='growingTree' src={growingTree} alt='GrowingTree gif' />
            }
          </>
        }
      </div>
    </section>
  )
}

export default RecipeIndex