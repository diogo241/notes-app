import { useState } from 'react';

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: '',
    priority: 'Medium',
    category: 'Work',
    description: '',
  });

  const [isFormVisible, setFormVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Return if fields are empty
    if (!formData.title || !formData.description) {
      alert('Some fields are empty');
      return;
    }

    // Create note object
    const newNote = {
      id: Date.now(),
      ...formData,
    };

    // Add notes to state
    setNotes([newNote, ...notes]);

    //Reset form data
    setFormData({
      title: '',
      category: 'Work',
      priority: 'Medium',
      description: '',
    });
  };

  return (
    <>
      {/* Toggle */}
      <button
        onClick={() => setFormVisible(!isFormVisible)}
        className="w-full bg-gray-100 border border-gray-300  text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4"
      >
        {isFormVisible ? 'Esconder Form' : 'Adicionar nova nota'}
      </button>
      {/* Form */}
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
          {/* Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block font-semibold">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="w-full p-2 border rounded-lg"
              value={formData.title}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {/* Priority */}
          <div className="mb-4">
            <label htmlFor="priority" className="block font-semibold">
              Priority
            </label>
            <select
              type="select"
              name="priority"
              className="w-full p-2 border rounded-lg"
              value={formData.priority}
              onChange={(e) => handleChange(e)}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          {/* Category */}
          <div className="mb-4">
            <label htmlFor="category" className="block font-semibold">
              Category
            </label>
            <select
              type="select"
              name="category"
              className="w-full p-2 border rounded-lg"
              value={formData.category}
              onChange={(e) => handleChange(e)}
            >
              <option value="Work">Work</option>
              <option value="School">School</option>
              <option value="Home">Home</option>
            </select>
          </div>
          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block font-semibold">
              Description
            </label>
            <textarea
              className="w-full p-2 border rounded-lg"
              name="description"
              value={formData.description}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button className="w-full bg-purple-500 text-white py-2 rounded-lg  cursor-pointer hover:bg-purple-700 transition">
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
