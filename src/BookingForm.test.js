import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("Renders the BookingForm heading", () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(
    <BookingForm 
      availableTimes={availableTimes} 
      dispatch={() => {}} 
      submitForm={() => {}} // Ajout de cette fonction factice
    />
  );
  
  const regex = /réserver une table/i;
  const heading = screen.getByText((content, element) => {
    return regex.exec(element.textContent) !== null;
  });
  expect(heading).toBeInTheDocument();
  
});

