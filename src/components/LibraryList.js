import React, {Component} from 'react';
import {Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListItems from './ListItems';

class LibraryList extends Component{
  renderItem(library){
    // console.log(library.item.id)
    return <ListItems library= {library.item}/>;
  }
  render(){
    console.log(this.props.libraries);
    return(
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={(library, index)=>index.toString()}
      />
    );
  };
}
const mapStateToProps=state=>{
  return {libraries:state.libraries};

};

export default connect(mapStateToProps)(LibraryList);
