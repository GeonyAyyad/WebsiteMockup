import React from "react"
import "./Myface.css";


const style = {
  flex: 1,
    maxWidth: "auto",
    maxHeight: "300px",
    alignSelf: 'stretch',

}

const Myface = props =>
  <div class="imagesize">
    <img style={style} src="myface.jpg" />
  </div>;

export default Myface;
