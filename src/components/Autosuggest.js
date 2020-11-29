import React from "react";
import './../css/style_1.css';

export default class AutoSuggestInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '', showOption: false, suggestions: [], activeIndex: -1 };

    this.onInputChange = this.onInputChange.bind(this);
    this.onItemSelect = this.onItemSelect.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
    this.removeHover = this.removeHover.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  onBlur(event) {
    this.setState({ showOption: false, activeIndex: -1 });
  }

  onInputChange(event) {
    const input = event.target.value;
    this.setState({ value: input, showOption: true, suggestions: this.getSuggestions(input) });
    this.props.onChange({ name: this.props.name, value: input });
  }

  getSuggestions(input) {
    const inputValue = input.trim().toLowerCase();
    const inputLength = inputValue.length;
    const suggestions = inputLength === 0 ? [] : this.props.list.filter(v => v.toLowerCase().includes(inputValue));
    return suggestions.length === 1 && suggestions[0].toLowerCase() === inputValue ? [] : suggestions;
  }

  getSuggestionListComponent() {
    if (this.state.suggestions.length !== 0 && this.state.showOption) {
      return (
        <ul className='suggestion-list'>
          {
            this.state.suggestions.map((item, index) => {
              const className = index === this.state.activeIndex ? 'suggestion-item-hover' : 'suggestion-item';
              return <li className={className} key={item} onMouseDown={this.onItemSelect} onMouseEnter={this.removeHover}>{item}</li>;
            })
          }
        </ul>
      );
    }
  }

  removeHover() {
    this.setState({ activeIndex: -1 });
  }

  onItemSelect(event) {
    this.updateValue(event.target.innerText);
  }

  updateValue(val) {
    this.setState({ value: val, showOption: false, activeIndex: -1 });
    this.props.onChange({ name: this.props.name, value: val });
  }

  onKeyDown(event) {
    const index = this.state.activeIndex;
    let active = '';

    if (event.keyCode === 38) {
      if (index > 0) {
        this.setState({ activeIndex: index - 1 });
      } else {
        this.setState({ activeIndex: this.state.suggestions.length - 1 });
      }
      active = this.state.suggestions[index - 1];
    } else if (event.keyCode === 40) {
      if (this.state.suggestions.length > index + 1) {
        this.setState({ activeIndex: index + 1 });
      } else {
        this.setState({ activeIndex: 0 });
      }
      active = this.state.suggestions[index];
    } else if (event.keyCode === 13) {
      active = this.state.suggestions[index];
      if (active) {
        this.updateValue(active);
      }
      event.preventDefault();
    } else {
      this.setState({ showOption: false, activeIndex: -1 });
    }
  }

  render() {

    return (
      <>
        <input type="text" autoComplete="off" className={this.props.className} id={this.props.id} placeholder={this.props.placeholder}
          onChange={this.onInputChange} onKeyDown={this.onKeyDown} onBlur={this.onBlur} onFocus={this.onInputChange} onClick={this.onInputChange} value={this.state.value}
        />
        {this.getSuggestionListComponent()}
      </>
    );
  }
}