import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withData from '../shared/components/LoadingHoc';
import { fetchNotes } from './notesActions';

const connectWithData = compose(
  connect(({ notes }) => ({
    notes,
  }),
    { fetchNotes }
  ),
  withData(
    ({ notes, fetchNotes }) => ({
      loader: fetchNotes, isLoaded: notes != null,
    })
  )
);

const Container = connectWithData(({ children }) => children);

import EditNote from './EditNote';
import NewNote from './NewNote';
import NotesList from './NotesList';

export {
  Container,
  EditNote,
  NewNote,
  NotesList,
}
