// @flow

import React from 'react'
import { View, Text, ListView, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/RecipeListContainerStyle'

class RecipeListContainer extends React.Component {

  state: {
    dataSource: Object
  }

  constructor (props) {
    super(props)
    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})
    this.state = {
      dataSource: ds.cloneWithRows([])
    }
    this.renderRow = this.renderRow.bind(this);
  }

  renderRow (rowData) {
    return (
      <TouchableOpacity style={styles.row} onPress={() => this.props.onClick(rowData.id)}>
        <Image source={{uri: rowData.image}} style={{width: 100, height: 100}} resizeMode='cover'/>
        <Text style={styles.boldLabel}>{rowData.title}</Text>
      </TouchableOpacity>
    )
  }

  componentWillReceiveProps (newProps) {
    if (newProps.recipes) {
      console.log('newprops recipes', newProps.recipes);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newProps.recipes)
      })
      console.log(this.state.dataSource);
    }
  }

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  render () {
    return (
      <View style={styles.container}>
        <AlertMessage title='Nothing to See Here, Move Along' show={this.noRowData()} />
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          pageSize={15}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.search.recipes,
  }
}

export default connect(mapStateToProps)(RecipeListContainer)
