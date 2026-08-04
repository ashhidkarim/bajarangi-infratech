import { useState } from "react";



export default function PopupForm() {
  const [open, setOpen] = useState(true);

  const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
  message: "",
});

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const response = await fetch("https://web4infotech.com/api/send-mail.php",  {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    alert(result.message);

    if (result.status) {
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      setOpen(false);
    }
  } catch (error) {
    alert("Something went wrong!");
  }
};

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-white w-[90%] max-w-md rounded-xl p-6 relative">

        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-black mb-5">
          Get Free Consultation
        </h2>

       <form onSubmit={handleSubmit}>
        <input
  type="text"
  placeholder="Full Name"
  value={formData.name}
  onChange={(e) =>
    setFormData({ ...formData, name: e.target.value })
  }
  className="w-full border border-gray-300 rounded-lg p-3 mb-3 text-black bg-white"
/>

       <input
  type="tel"
  placeholder="Mobile Number"
  value={formData.phone}
  onChange={(e) =>
    setFormData({ ...formData, phone: e.target.value })
  }
  className="w-full border border-gray-300 rounded-lg p-3 mb-3 text-black bg-white"
/>

     <input
  type="email"
  placeholder="Email Address"
  value={formData.email}
  onChange={(e) =>
    setFormData({ ...formData, email: e.target.value })
  }
  className="w-full border border-gray-300 rounded-lg p-3 mb-3 text-black bg-white"
/>

      <textarea
  rows={4}
  placeholder="Message"
  value={formData.message}
  onChange={(e) =>
    setFormData({ ...formData, message: e.target.value })
  }
  className="w-full border border-gray-300 rounded-lg p-3 mb-3 text-black bg-white"
/>

          <button
  type="submit"
  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition duration-300"
>
  Submit
</button>

        </form>

      </div>
    </div>
  );
}