import React, { useState } from "react";

/**
 * Write an application that consumes the appointments API endpoint you just built
 * This application should do the following:
 *
 * Render an input element where the user can enter a search query
 * Render a search button that triggers a call to the API
 * Render a list of all of the appointments returned from the API
 * Render a button that toggles the visibility of canceled appointments
 *
 * Some notes:
 * 1. Styling is not a concern
 * 2. You can write this in either React functional or class components, whichever you are more comfortable in
 * 3. We've scaffolded out all the network code, so you can focus on the UI
 *
 */

interface Appointment {
  appointmentDateTime: string;
  customerName: string;
  experienceName: string;
  experienceDescription: string;
  teammateName: string;
  teammateBio: string;
  cost: number;
  canceled: boolean;
}

interface AppState {
  dateQuery: string;
  experienceIdQuery: string;
  teammateIdQuery: string;
  appointments: Appointment[];
}

export function App() {
  const [state, setState] = useState<AppState>({
    dateQuery: "",
    experienceIdQuery: "",
    teammateIdQuery: "",
    appointments: [],
  });

  const handleSearch = async () => {
    const url = new URL("http://localhost:8080/appointments");

    if (state.dateQuery !== "") url.searchParams.set("date", state.dateQuery);

    if (state.experienceIdQuery !== "")
      url.searchParams.set("experience_id", state.experienceIdQuery);

    if (state.teammateIdQuery !== "")
      url.searchParams.set("teammate_id", state.teammateIdQuery);

    const response = await fetch(url.toString());

    if (!response.ok) {
      console.error(response);
      return;
    }

    const appointments: Appointment[] = await response.json();

    setState({ ...state, appointments });
  };

  return (
    <div>
      <h1>Appointments Search</h1>
    </div>
  );
}

// export class App extends React.Component<unknown, AppState> {
//   constructor(props: unknown) {
//     super(props);

//     this.state = {
//       dateQuery: "",
//       experienceIdQuery: "",
//       teammateIdQuery: "",
//       appointments: [],
//     };
//   }

//   handleSearch = async () => {
//     const url = new URL("http://localhost:8080/appointments");

//     if (this.state.dateQuery !== "")
//       url.searchParams.set("date", this.state.dateQuery);

//     if (this.state.experienceIdQuery !== "")
//       url.searchParams.set("experience_id", this.state.experienceIdQuery);

//     if (this.state.teammateIdQuery !== "")
//       url.searchParams.set("teammate_id", this.state.teammateIdQuery);

//     const response = await fetch(url.toString());

//     if (!response.ok) {
//       console.error(response);
//       return;
//     }

//     const appointments: Appointment[] = await response.json();

//     this.setState({ ...this.state, appointments });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Appointments Search</h1>
//       </div>
//     );
//   }
// }
