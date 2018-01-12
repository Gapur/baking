import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Masonry from 'react-masonry-component';
import axios from 'axios';

import withData from '../shared/components/LoadingHoc';
import { fetchNotes } from './notesActions';

class NotesScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { editNoteId: null };
  }
  
  render() {
    console.log('notes', this.props.notes);
    console.log(axios.defaults.headers.common['X-CSRF-TOKEN']);
    return (
      <div className="container">
        <Masonry>
          {this.props.notes.map(note => <li>{note.text}</li>)}
        </Masonry>
      </div>
    );
  }
}

export default compose(
  connect(({ notes }) => ({
    notes,
  }),
    { fetchNotes }
  ),
  withData(
    ({ notes, fetchNotes }) => ({
      loader: fetchNotes, isLoaded: notes != null
    })
  )
)(NotesScreen);
