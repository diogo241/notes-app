const NoteList = ({ notes }) => {
  if (notes.length === 0) {
    return <p>Sem notas adicionadas</p>;
  }
  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <div
          key={note.id}
          className="p-4 bg-white rounded-lg shadow-md border-l-4"
        >
          <h3 className="text-lg font-bold">{note.title}</h3>
          <p className="text-sm text-gray-600">Priority: {note.priority}</p>
          <p className="text-sm text-gray-600">Category: {note.category}</p>
          <p className="mt-2">{note.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
