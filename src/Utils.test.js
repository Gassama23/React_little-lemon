import { initializeTimes, updateTimes } from "./Main";

// ✅ Mock de fetchAPI
beforeEach(() => {
  global.fetchAPI = jest.fn().mockResolvedValue(["17:00", "18:00", "19:00"]);

});

describe("initializeTimes", () => {
  it("devrait retourner les heures disponibles", async () => {
    const mockTimes = ["17:00", "18:00", "19:00"];
    global.fetchAPI.mockResolvedValue(mockTimes); // Simule une réponse de l'API

    const times = await initializeTimes();
    
    expect(times).toEqual(mockTimes);
    expect(global.fetchAPI).toHaveBeenCalledTimes(1);
  });

  it("devrait lever une erreur si fetchAPI n'est pas défini", async () => {
    delete global.fetchAPI; // Supprime fetchAPI pour simuler un environnement où elle n'est pas définie

    await expect(initializeTimes()).rejects.toThrow("fetchAPI n'est pas défini !");
  });
});

describe("updateTimes", () => {
  it("devrait mettre à jour les heures disponibles", () => {
    const initialState = ["17:00", "18:00"];
    const action = {
      type: "UPDATE_TIMES",
      times: ["19:00", "20:00"],
    };

    const newState = updateTimes(initialState, action);
    expect(newState).toEqual(["19:00", "20:00"]);
  });

  it("devrait retourner l'état inchangé pour une action inconnue", () => {
    const initialState = ["17:00", "18:00"];
    const action = { type: "UNKNOWN_ACTION" };

    const newState = updateTimes(initialState, action);
    expect(newState).toEqual(initialState);
  });
});
