import { useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./components/BookingForm";

// Fonction pour récupérer les heures disponibles via l'API
const fetchAvailableTimes = async (date) => {
  try {
    if (typeof window.fetchAPI !== "function") {
      throw new Error("fetchAPI n'est pas défini !");
    }
    return await window.fetchAPI(date);
  } catch (error) {
    console.error("Erreur lors de la récupération des heures disponibles :", error);
    return []; // Retourne un tableau vide en cas d'erreur
  }
};

// Fonction pour initialiser les heures disponibles
export const initializeTimes = async () => {
  return await fetchAvailableTimes(new Date());
};

// Réducteur pour mettre à jour les heures disponibles
export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return action.times;
  }
  return state;
};

const Main = () => {
  const navigate = useNavigate();
  
  // Initialisation correcte de useReducer avec une valeur par défaut vide
  const [availableTimes, dispatch] = useReducer(updateTimes, []);

  // Utilisation de useEffect pour charger les heures disponibles
  useEffect(() => {
    const loadTimes = async () => {
      const times = await initializeTimes();
      dispatch({ type: "UPDATE_TIMES", times });
    };
    loadTimes();
  }, []);

  // Fonction de soumission du formulaire
  const submitForm = async (formData) => {
    try {
      if (typeof window.submitAPI !== "function") {
        throw new Error("submitAPI n'est pas défini !");
      }
      const response = await window.submitAPI(formData);
      if (response) {
        navigate("/confirmation");
      } else {
        alert("Erreur de soumission, veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur lors de la soumission :", error);
      alert("Une erreur s'est produite, veuillez réessayer plus tard.");
    }
  };

  return (
    <main>
      <h1>Réserver une Table</h1>
      <BookingForm availableTimes={availableTimes} submitForm={submitForm} />
    </main>
  );
};

export default Main;
