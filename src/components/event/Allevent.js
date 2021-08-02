import React, { Component } from "react";
import AllEventGrid from "./AllEventGrid";
import AllEventList from "./AllEventList";
import NavbarSort from "../NavbarSort";
import Sort from "../SortEvent";
import { connect } from "react-redux";
import { fetchEvents, fetchCategories } from "../../redux/actions/userActions";

class Allevent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabEventList: false,
      tabEventGrid: true,
      category: "",
      events : this.props.events
    };

    this.handleChangeTabEventList = this.handleChangeTabEventList.bind(this);
    this.handleChangeTabEventGrid = this.handleChangeTabEventGrid.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
  }

  handleChangeTabEventList = () => {
    this.setState({...this.state,
      tabEventList: true,
      tabEventGrid: false,
    });
  };

  handleChangeTabEventGrid = () => {
    this.setState({...this.state,
      tabEventList: false,
      tabEventGrid: true,
    });
  };

  handleChangeCategory = (value) => {
    this.setState({...this.state,
      events : this.props.events.filter(event => event.category_id === value)
    })
  };

  componentDidMount = () => {
    this.props.fetchEvents();
    this.props.fetchCategories();
  };

  render() {
    return (
      <div>
        <section class="text-gray-600 body-font pt-20 sm:pt-20 md:pt-20 lg:pt-20">
          <div class="container px-4 py-10 mx-auto">
            <h2 className="font-bold text-3xl mb-10">Event</h2>
            <NavbarSort
              tabEventList={this.state.tabEventList}
              tabEventGrid={this.state.tabEventGrid}
              handleChangeTabEventList={this.handleChangeTabEventList}
              handleChangeTabEventGrid={this.handleChangeTabEventGrid}
            />
            {/* <Search /> */}
            <div className="flex">
              <div className="w-3/4">
              {this.state.tabEventList && <AllEventList events={this.state.events} />}
              {this.state.tabEventGrid && <AllEventGrid events={this.state.events}/>}
              </div>
              <div className="md:w-1/4">
                <div>
                  <p className="ml-11 mt-5 flex-wrap">
                    Event yang diadakan oleh organisasi PLUG-IN
                  </p>
                </div>
                <Sort handleChangeCategory={this.handleChangeCategory} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.eventReducers.events
  };
};

const mapDispatchToProps = () => {
  return {
    fetchEvents: () => fetchEvents(),
    fetchCategories: () => fetchCategories(),
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Allevent);
