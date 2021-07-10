import React, { Component } from "react";
import AllEventGrid from './AllEventGrid';
import AllEventList from './AllEventList';
import NavbarSort from "../NavbarSort";
import Search from "../SearchEvent";
import Sort from "../SortEvent";
import { connect } from 'react-redux'
import {fetchEvents} from '../../redux/actions/userActions';

class Allevent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tabEventList : false,
      tabEventGrid : true
    }

    this.handleChangeTabEventList = this.handleChangeTabEventList.bind(this)
    this.handleChangeTabEventGrid = this.handleChangeTabEventGrid.bind(this)
  }

  handleChangeTabEventList = () => {
    this.setState({
      tabEventList : true,
      tabEventGrid : false
    })
  }

  handleChangeTabEventGrid = () => {
    this.setState({
      tabEventList : false,
      tabEventGrid : true
    })
  }

  componentDidMount = () => {
    console.log(this.props)
    this.props.fetchEvents()
  }

  render() {
    
    return (
      <div>
        <section class="text-gray-600 body-font pt-36 sm:pt-28 md:pt-24 lg:pt-24">
          <div class="container px-4 py-10 mx-auto">
            <h2 className="font-bold text-3xl mb-10">Event</h2>
            <NavbarSort tabEventList={this.state.tabEventList} tabEventGrid={this.state.tabEventGrid} handleChangeTabEventList={this.handleChangeTabEventList} handleChangeTabEventGrid={this.handleChangeTabEventGrid} />
            <Search />
            <div className="flex">
              {this.state.tabEventList && (<AllEventList />)}
              {this.state.tabEventGrid && (<AllEventGrid />)}
              <div className="md:w-1/4">
                <div>
                  <p className="ml-11 mt-5 flex-wrap">
                    Ornare condimentum in ac quis. Amet, proin faucibus
                    scelerisque scelerisque massa, donec fermentum.
                  </p>
                </div>
                <Sort />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = () => {
  return {
    fetchEvents : () => fetchEvents()
  }
}


export default connect(null, mapDispatchToProps())(Allevent)