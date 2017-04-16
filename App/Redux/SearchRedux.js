// @flow

import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { filter } from 'ramda'
import { startsWith } from 'ramdasauce'

const apiKey = 'B9MsKcC5LWmsh10MGfZQbKMe6hXzp158WJyjsnmrXFc3f4FnKz';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  search: ['dispatch', 'searchTerm'],
  cancelSearch: null,
  receiveRecipes: ['recipes'],
  receiveRecipeInfo: ['data'],
})

export const TemperatureTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  searchTerm: '',
  searching: false,
  recipes: [],
  currentRecipe: null,
})

/* ------------- Reducers ------------- */

export const performSearch = (state: Object, {dispatch, searchTerm}: Object) => {
  dispatch(() => {
    var xhr = new XMLHttpRequest();
    var params = {
      fillIngredients: false,
      ingredients: searchTerm,
      limitLicense: false,
      ranking: 1,
      number: 6,
    };

    xhr.open('GET', 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?'+Object.keys(params)
        .map(key => key + '=' + params[key])
        .join('&'), true);
    xhr.setRequestHeader('X-Mashape-Key', apiKey);
    xhr.setRequestHeader('Accept', 'application/JSON');
    xhr.send(params);

    return xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        dispatch({
          type: Types.RECEIVE_RECIPES,
          recipes: xhr.responseText,
        });
      }
    }
  });

  return state.merge({ searching: true, searchTerm, recipes: [] });
}

const receiveRecipes = (state: Object, { recipes }: Object) => {
  // use the id from the result when user actually taps on the image
  return state.merge({ searching: false, recipes: JSON.parse(recipes) });
}

export const cancelSearch = (state: Object) => INITIAL_STATE

export const getRecipeById = (state: Object, {dispatch, id}: Object) => {
  dispatch(() => {
    var xhr = new XMLHttpRequest();
    var params = {
      id,
      includeNutrition: false,
    };

    xhr.open('GET', 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/getRecipeInformation?'+Object.keys(params)
        .map(key => key + '=' + params[key])
        .join('&'), true);
    xhr.setRequestHeader('X-Mashape-Key', apiKey);
    xhr.setRequestHeader('Accept', 'application/JSON');
    xhr.send(params);

    return xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        dispatch({
          type: Types.receiveRecipeInfo,
          recipes: xhr.responseText,
        });
      }
    }
  });
  return state.merge({ currentRecipe: null });
}

const receiveRecipeInfo = (state: Object, { data }: Object) => {
  // use the id from the result when user actually taps on the image
  console.log('cindy in receiveRecipeInfo', data);
  return state.merge({ currentRecipe: JSON.parse(data) });
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH]: performSearch,
  [Types.CANCEL_SEARCH]: cancelSearch,
  [Types.RECEIVE_RECIPES]: receiveRecipes,
  [Types.RECEIVE_RECIPE_INFO]: receiveRecipeInfo,
})
