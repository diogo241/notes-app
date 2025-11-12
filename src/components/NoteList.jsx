import Note from './Note';

const NoteList = ({ notes, deleteNote }) => {
  if (notes.length === 0) {
    return <p>Sem notas adicionadas</p>;
  }
  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <Note key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
};

export default NoteList;
