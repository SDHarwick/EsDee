import React, {Component} from "react";

export default class CKEditor extends Component {
  constructor(props) {
    super(props);
    this.elementName = "editor_" + this.props.id;
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  render() {
    return (
      <textarea name={this.elementName} defaultValue={this.props.value}></textarea>
    )
  }

  componentDidMount() {
    let configuration = {
      toolbar: "Basic"
    };
    window.ClassicEditor.replace(this.elementName, configuration);
    window.ClassicEditor.instances[this.elementName].on("change", function () {
      let data = window.ClassicEditor.instances[this.elementName].getData();
      this.props.onChange(data);
    }.bind(this));
  }
}