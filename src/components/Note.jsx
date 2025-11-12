const Note = ({ note, deleteNote }) => {
  return (
    <div
      className="p-4 bg-white rounded-lg shadow-md border-l-4"
      style={{
        borderLeftColor: `${
          note.priority === 'High'
            ? 'red'
            : note.priority === 'Medium'
            ? 'yellow'
            : 'green'
        }`,
      }}
    >
      <h3 className="text-lg font-bold">{note.title}</h3>
      <p className="text-sm text-gray-600">Priority: {note.priority}</p>
      <p className="text-sm text-gray-600">Category: {note.category}</p>
      <p className="mt-2">{note.description}</p>
      <button
        className="text-white bg-red-500 px-4 p-1 mt-4 rounded-lg font-semibold text-md cursor-pointer"
        onClick={() => deleteNote(note.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Note;
