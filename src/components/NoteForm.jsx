import { useState } from 'react';
import TextInput from './inputs/TextInput';
import SelectInput from './inputs/SelectInput';
import TextAreaInput from './inputs/TextAreaInput';

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
          <TextInput
            name="title"
            label="Title"
            value={formData.title}
            onInputChange={(e) => handleChange(e)}
          />
          {/* Priority */}
          <SelectInput
            name="priority"
            label="Priority"
            value={formData.priority}
            onInputChange={(e) => handleChange(e)}
            options={[
              { name: 'High', value: 'High' },
              { name: 'Medium', value: 'Medium' },
              { name: 'Low', value: 'Low' },
            ]}
          />
          {/* Category */}
          <SelectInput
            name="category"
            label="Category"
            value={formData.category}
            onInputChange={(e) => handleChange(e)}
            options={[
              { name: 'Work', value: 'Work' },
              { name: 'School', value: 'School' },
              { name: 'Home', value: 'Home' },
            ]}
          />
          {/* Description */}
          <TextAreaInput
            name="description"
            label="Description"
            value={formData.description}
            onInputChange={(e) => handleChange(e)}
          />
          <button className="w-full bg-purple-500 text-white py-2 rounded-lg  cursor-pointer hover:bg-purple-700 transition">
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
