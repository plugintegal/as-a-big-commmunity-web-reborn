import React, { Component } from "react";

export default class SearchEvent extends Component {
  render() {
    return (
      <>
        <div className="md:w-1/4 inline-flex ml-auto">
          <div className=" ml-auto">
            <input
              type="text"
              name="searchEvent"
              placeholder="Search Event"
              className=" border-b-2 outline-none w-44 mr-2"
              style={{
                backgroundImage: `url(http://localhost:3000/assets/img/search.png)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "25px 25px",
                backgroundPositionX: "150px",
              }}
            />
          </div>
        </div>
      </>
    );
  }
}
