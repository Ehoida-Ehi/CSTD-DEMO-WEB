import { useState } from 'react';
import { toast } from 'react-toastify';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success('Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">HAVE QUESTIONS?</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border border-gray-300 px-4 py-2 w-full rounded-md"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border border-gray-300 px-4 py-2 w-full rounded-md"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Enter Your Message"
            className="border border-gray-300 px-4 py-2 w-full rounded-md h-32"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-bold"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}










  {/* Contact Form */}
        // <div>
        //   <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">HAVE QUESTIONS?</h2>
        //   <form className="space-y-4">
        //     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        //       <input
        //         type="text"
        //         placeholder="Name"
        //         className="border border-gray-300 px-4 py-2 w-full rounded-md"
        //       />
        //       <input
        //         type="email"
        //         placeholder="email"
        //         className="border border-gray-300 px-4 py-2 w-full rounded-md"
        //       />
        //     </div>
        //     <textarea
        //       placeholder="Enter Your Message"
        //       className="border border-gray-300 px-4 py-2 w-full rounded-md h-32"
        //     ></textarea>
        //     <div className="text-center">
        //       <button
        //         type="submit"
        //         className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-bold"
        //       >
        //         SUBMIT
        //       </button>
        //     </div>
        //   </form>
        // </div>