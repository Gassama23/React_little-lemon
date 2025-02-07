import { useState } from "react";

const BookingForm = () => {
  const [formValid, setFormValid] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { date, time, guests, occasion } = formData;
    setFormValid(
      date && time && guests >= 1 && guests <= 10 && occasion // validation de base
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      // soumettre le formulaire
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choisir une date</label>
      <input
        id="res-date"
        type="date"
        name="date"
        value={formData.date}
        onChange={handleInputChange}
        required
        min={new Date().toISOString().split("T")[0]}
        onBlur={validateForm}
      />

      <label htmlFor="res-time">Choisir une heure</label>
      <select
        id="res-time"
        name="time"
        value={formData.time}
        onChange={handleInputChange}
        required
        onBlur={validateForm}
      >
        <option value="">-- Sélectionnez une heure --</option>
        {/* autres options */}
      </select>

      <label htmlFor="guests">Nombre d'invités</label>
      <input
        id="guests"
        type="number"
        name="guests"
        value={formData.guests}
        min="1"
        max="10"
        onChange={handleInputChange}
        required
        onBlur={validateForm}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleInputChange}
        required
        onBlur={validateForm}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit" disabled={!formValid}>
        Réserver
      </button>
    </form>
  );
};

export default BookingForm;
