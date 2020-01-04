import React, { Component } from "react";

import MenuItem from "../../components/menu-item/menu-item.component";

import "./directory.styles.scss";
import SECTIONS_DATA from "../../assets/sections.data";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS_DATA
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionsProps }) => {
          return <MenuItem key={id} {...otherSectionsProps} />;
        })}
      </div>
    );
  }
}
export default Directory;
