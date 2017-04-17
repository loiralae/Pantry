import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import IngredientsView from './IngredientsView'
import InstructionsView from './InstructionsView'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class RecipeView extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Ingredients' },
      { key: '2', title: 'Recipe' },
    ],
  };

  componentWillReceiveProps(props) {
      this.setState({currentRecipe: props.currentRecipe})
  }

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return <TabBar {...props} />;
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <IngredientsView currentRecipe={this.props.currentRecipe} />;
    case '2':
      return <InstructionsView currentRecipe={this.props.currentRecipe} />;
    default:
      return null;
    }
  };

  render() {
    var tabview = <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
    return (
      tabview
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentRecipe: state.search.currentRecipe,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeView)
