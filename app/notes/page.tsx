// app/notes/page.tsx
import React from 'react';
import { fetchNotes } from '../../lib/api';
import NotesClient from './Notes.client';

const NotesPage = async () => {
  // Fetch notes from API
  const initialData = await fetchNotes({ page: 1, search: '' });

  return (
    <div>
      <h1>Notes</h1>
      <NotesClient initialData={initialData} />
    </div>
  );
};

export default NotesPage;