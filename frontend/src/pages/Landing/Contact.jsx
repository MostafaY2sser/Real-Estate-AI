import React, { useState } from "react";
import usePost from "../../hooks/usePost";

const Contact = () => {
  const { postData, loading, error } = usePost();
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await postData("/contacts", formData);
    if (data) {
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });

      setTimeout(() => setSuccess(false), 3000); 
      console.log("Contact form submitted successfully:", data);
    }
    else {
      console.error("Failed to submit contact form");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        تواصل معنا
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 text-right">
        <div>
          <label className="block mb-1 font-semibold">الاسم الكامل</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="أدخل اسمك"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">البريد الإلكتروني</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="example@email.com"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">رقم الهاتف (اختياري)</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="أدخل رقم هاتفك"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">الرسالة</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 min-h-[120px]"
            placeholder="اكتب رسالتك هنا..."
          />
        </div>

        {error && <p className="text-red-600 text-sm">⚠️ {error}</p>}
        {success && <p className="text-green-600 text-sm">✅ تم إرسال الرسالة بنجاح!</p>}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded text-white font-semibold ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "جارٍ الإرسال..." : "إرسال"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
