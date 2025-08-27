// ./components/ContactForm.jsx
import React from "react";

function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/movnqgdk" 
      method="POST"
      className="flex flex-col gap-4 border rounded-xl p-6 shadow-lg"
    >
      {/* Producto fijo */}
      <input type="hidden" name="producto" value="CD Melocotón Gigante - Álbum 2025" />

      <label className="flex flex-col">
        Nombre:
        <input type="text" name="nombre" required className="border p-2 rounded" />
      </label>

      <label className="flex flex-col">
        Email:
        <input type="email" name="email" required className="border p-2 rounded" />
      </label>

      <label className="flex flex-col">
        Dirección de envío:
        <textarea name="direccion" required className="border p-2 rounded"></textarea>
      </label>

      <label className="flex flex-col">
        Mensaje (opcional):
        <textarea name="mensaje" className="border p-2 rounded"></textarea>
      </label>

      <button
        type="submit"
        className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
      >
        Enviar pedido
      </button>
    </form>
  );
}

export default ContactForm;
