import React, { useState } from "react";

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

  const onSearch = async () => {
    const response = await fetch("http://localhost:8080/appointments");

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
//       searchQuery: "",
//       appointments: [],
//     };
//   }

//   onSearch = async () => {
//     const response = await fetch("");

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
