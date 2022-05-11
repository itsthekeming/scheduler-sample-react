import React from "react";
import appointments from "./appointments.json";

/**
 * Build an application that displays a list of appointments and provides a way to filter the list
 * You are provided with a list of appointments from a JSON file
 *
 * Your application should do the following:
 * - Render some way to filter down the list by 3 properties: appointmentDateTime, experienceName, and teammateName
 * - Render the list of appointments with any filters applied
 * - Render a UI that toggles the visibility of canceled appointments
 *
 * Some notes:
 * - All of the appointments are in between May 1, 2022 and May 5, 2022
 * - Styling is not a major concern; focus on functionality first
 * - You have a lot of flexibility in how you implement the UI. For example, you could use a search box or a select menu for your filters; both are valid solutions
 */

interface Appointment {
  appointmentDateTime: string;
  customerName: string;
  experienceName: string;
  teammateName: string;
  canceled: boolean;
}

export function App() {
  return (
    <div>
      <h1>Appointments</h1>
    </div>
  );
}
