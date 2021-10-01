import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'

// Models
import Recipe from '../models/recipe.js'
import User from '../models/user.js'
import EnvironmentalFactor from '../models/environmentalFactor.js'
import Ingredient from '../models/ingredient.js'

// Data
import userData from './data/users.js'
import recipeData from './data/recipes.js'
import environmentalFactorData from './data/environmentalFactors.js'
import ingredientData from './data/ingredients.js'

// Seed database
const seedDatabase = async () => {
  try {
    await mongoose.connect(dbURI)
    console.log('🚀🌏 Database connected')

    // Drop current database
    await mongoose.connection.db.dropDatabase()
    console.log('🔨 Database dropped')

    // Environmental Factors
    await EnvironmentalFactor.create(environmentalFactorData)
    console.log(environmentalFactorData)

    // Ingredients
    await Ingredient.create(ingredientData)
    console.log(ingredientData)

    // Create users
    const users = await User.create(userData)
    console.log(`👤 ${users.length} users created`)

    // Create new recipe array with owners populated
    const recipesWithOwner = recipeData.map(recipe => {
      recipe.owner = users[0]._id
      return recipe
    })

    // Create recipe
    const recipes = await Recipe.create(recipesWithOwner)
    console.log(`🖥 Database seeded with ${recipes.length} new recipes`)

    // Close connection to mongodb
    await mongoose.connection.close()
    console.log('👋🏽 Connection closed')
  } catch (err) {
    console.log('🚨 Something went wrong...')
    console.log(err)
    await mongoose.connection.close()
    console.log('👋🏽 Connection closed')
  }
}

seedDatabase()