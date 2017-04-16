// @flow

import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'
import RecipeListContainer from './RecipeListContainer';

// Styles
import styles from './Styles/HomeStyle'

// I18n
import I18n from 'react-native-i18n'

import SearchBar from '../Components/SearchBar'
import SearchActions from '../Redux/SearchRedux'

import RoundedButton from '../Components/RoundedButton'

class Home extends React.Component {

  cancelSearch = () => {
    this.props.cancelSearch()
  }

  onSearch = (searchTerm) => {
    console.log('searchTerm', searchTerm);
    this.props.performSearch(searchTerm);
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <SearchBar onSearch={this.onSearch} onCancel={this.cancelSearch} />
        </View>
        <RecipeListContainer />
        <RoundedButton onPress={NavigationActions.recipeView}>
          Recipe View
        </RoundedButton>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    // recipes: state.search.recipes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    performSearch: (searchTerm) => dispatch(SearchActions.search(dispatch, searchTerm)),
    cancelSearch: () => dispatch(SearchActions.cancelSearch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
