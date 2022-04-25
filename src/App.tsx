import React, { useState } from "react";
import { Appointment } from "./types/appointment";

/**
 * Write an application that consumes the appointments API endpoint you just built
 * This application should do the following:
 *
 * 1. Render an input element where the user can enter a search query
 * 2. Render a search button that triggers a call to the API
 * 3. Render a list of all of the appointments returned from the API
 * 4. Render a button that toggles the visibility of canceled appointments
 *
 * Some notes:
 * 1. Styling is not a concern
 * 2. You can write this in either React functional or class components, whichever you are more comfortable in
 *
 */

// export function App() {
//   const [appointments, setAppointments] = useState<Appointment[]>(
//     []
//   );

//   const onSearch = async () => {
//     const response = await fetch("");

//     const appointments: Appointment[] = await response.json();

//     setAppointments(appointments);
//   };

//   return <div></div>;
// }

type AppState = {
  searchQuery: "";
  appointments: Appointment[];
};

export class App extends React.Component<unknown, AppState> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      searchQuery: "",
      appointments: [],
    };
  }

  onSearch = async () => {
    const response = await fetch("");

    const appointments: Appointment[] = await response.json();

    this.setState({ ...this.state, appointments });
  };

  render() {
    return (
      <div>
        <h1>Appointments Search</h1>
      </div>
    );
  }
}
