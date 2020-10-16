import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";
import SelectFile from "./SelectFile";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji(1, "", 20), 
      etype: 1,
      stext: ''
    };
  }

  handleSearchChange = event => {
    this.setState({
      stext: event.target.value, 
      filteredEmoji: filterEmoji(this.state.etype, event.target.value, 20)
    }); 
  };

  handleSelectChange = event => {
    this.setState({
      etype: event.target.value,
      filteredEmoji: filterEmoji(event.target.value, this.state.stext, 20)
    });
 
  }

 

  render() {
    return (
      <div>
        <Header />
        <SelectFile etypeChange={this.handleSelectChange} />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}
