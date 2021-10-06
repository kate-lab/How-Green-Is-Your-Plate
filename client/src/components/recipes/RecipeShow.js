import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const RecipeShow = ({ growingTree }) => {

  // State
  const [ recipe, setRecipe ] = useState(null)
  const [ hasError, setHasError ] = useState(false)
  // const [ ]
  
  // Params
  const { id } = useParams()

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const { data } = await axios(`/api/recipes/${id}`)
        setRecipe(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getRecipe()
  }, [id])

  //function to access each ingredient.carbonfootprint (or whichever env factor), and put into an array (useState?)
  //then map using an acc to get total carbonfootprint of recipe

  useEffect(() => console.log(recipe), [recipe])

  return (
    <>
      { recipe ? 
        <div className='recipe-show container mt-4'>
          <h2>{recipe.recipeName}</h2>
          <hr />
          <div className='row'>
            <div className='col-12 col-md-6'>
              <img src={growingTree} />
            </div>
            <div className='col-12 col-md-6'>
              <div className ='environmental-impact text-center'>
                <h2>Environmental Impact</h2>
                <div className='factors d-flex justify-content-between'>
                  <div className ='CO2'></div>
                  <div className ='Water'>Water</div>
                  <div className ='Land'>Land</div>
                </div>
                <hr />
              </div>
              <h4><span>🍽</span> Array of ingredients</h4>
              <p>Key ingredients used in recipe</p>
              <hr />
              <h4><span>🌍</span> Link to full recipe instructions</h4>
              <p className='lead'>This recipe is from: <a href={recipe.url}>{recipe.url}</a></p>
              <hr />
              <h4><span>📝</span> Overview</h4>
              <p>Brief set of instructions for owner to input</p>
              <hr />
              <h4><span>🧑‍🍳</span> Added by</h4>
              <p>Recipe added by: <Link to={`/users/${recipe.owner._id}`}>{recipe.owner.username}</Link></p>
              <hr />
              <Link to='/recipes' className='btn btn-lg'>Back to recipes</Link>
            </div>
          </div>
          <div className='comment-section container row mt-4 border'>
            <p>Comments Section</p>
          </div>
        </div>
        
        :
        <>
          {hasError ? 
            <h2 className='display-5 text-center'>Oh! Something went wrong</h2> 
            : 
            <img className='growingTree' src={growingTree} alt='Growing Tree gif' />
          }
        </>
      }
    </>
  )
}

export default RecipeShow