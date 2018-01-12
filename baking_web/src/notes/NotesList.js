import React, { Component } from 'react';
import { connect } from 'react-redux';

class NotesList extends Component {
  render() {
    console.log(this.props.notes);
    return (
      <div>
        <span>Notes Detail</span>
      </div>
    );
  }
}

export default connect(
  ({ notes }) => ({ notes })
)(NotesList);
