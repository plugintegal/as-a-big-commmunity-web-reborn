import React, { Component } from "react";

export default class SearchEvent extends Component {
  render() {
    return (
      <>
        <div className="w-1/4 inline-flex">
          <div className="">
            <input
              type="text"
              name="searchEvent"
              placeholder="Search Event"
              className="outline-none w-full mr-2"
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
