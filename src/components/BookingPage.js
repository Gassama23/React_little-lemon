import BookingForm from './BookingForm';
import './BookingPage.css';

const BookingPage = () => {
  return (
    <section className="booking">
      <h2>Réservez une table</h2>
      <p>Choisissez votre date et heure pour une expérience unique.</p>
      <BookingForm />
    </section>
  );
};

export default BookingPage;
