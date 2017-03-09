import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const ENTER_KEY_CODE = 13;

export default class TopicTextInput extends Component {
  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }
  /*
   * Invokes the callback passed in as onSave, allowing this component to be
   * used in different ways. I personally think this makes it more reusable.
   */
  onSave() {
    const { onEntrySave, value } = this.props;
    onEntrySave(value);
  }

  /*
   * Invokes the callback passed in as onSave, allowing this component to be
   * used in different ways. I personally think this makes it more reusable.
   */
  onChange(event) {
    const { onEntryChange } = this.props;
    onEntryChange(event.target.value);
  }

  /*
   * @param  {object} event
   */
  onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this.onSave();
    }
  }
  /*
      <input
        className={className}
        placeholder={placeholder}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        value={value}
        autoFocus 
      />
  */

  render() {
    const { className, placeholder, value } = this.props;
    return (
      <div>
        <TextField
          fullWidth={true}
          hintText={placeholder}
          value={value}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          id="hackdayIdea" //Need to manually set ID on fields otherwise they render differnetly between server and client
        />
      </div>
      
    );
  }
}

TopicTextInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onEntrySave: PropTypes.func,
  onEntryChange: PropTypes.func
};
