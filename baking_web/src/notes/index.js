import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Masonry from 'react-masonry-component';
import axios from 'axios';

import withData from '../shared/components/LoadingHoc';
import { fetchNotes, createNote } from './notesActions';
import Overlay from '../shared/components/Overlay';
import NoteForm from './components/NoteForm';
import { parseFormErrors } from '../shared/utils/form_errors';

class NotesScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { showNoteModal: false, editNoteId: null };

    this.handleCreateNote = this.handleCreateNote.bind(this);
  }

  handleCreateNote(values) {
    return this.props.createNote(values)
      .then(() => this.setState({ showNoteModal: false }))
      .catch(parseFormErrors); 
  }
  
  render() {
    const { notes } = this.props;
    return (
      <div className="container">
        <button
          className="button is-primary"
          onClick={() => this.setState({ showNoteModal: true })}
        >
          New Note
        </button> 
        <Masonry>
          {notes.map(note =>
            <div className="box content">
              <h5>{note.title}</h5>
              <p>{note.text}</p>
            </div>
          )}
        </Masonry>
        
        {this.state.showNoteModal &&
          <Overlay>
            <NoteForm
              onSubmit={this.handleCreateNote}
              onCancel={() => this.setState({ showNoteModal: false })}
            />
          </Overlay>
        }
      </div>
    );
  }
}

export default compose(
  connect(({ notes }) => ({
    notes,
  }),
    { fetchNotes, createNote }
  ),
  withData(
    ({ notes, fetchNotes }) => ({
      loader: fetchNotes, isLoaded: notes != null
    })
  )
)(NotesScreen);
