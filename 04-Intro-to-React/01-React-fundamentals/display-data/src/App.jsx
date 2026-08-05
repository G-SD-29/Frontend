import "./App.css";
import Student from "./components/Student";

// Diese Daten kommen direkt aus der Aufgabenstellung.
const studentData = {
  id: 1,
  firstName: "Testy",
  lastName: "McTest",
  age: 42,
  course: "Web Development",
  city: "Berlin",
  picture: "https://randomuser.me/api/portraits/men/1.jpg",
};

const App = () => {
  return (
    <div className="app">
      {/* App besitzt die Daten und gibt sie als Prop an Student weiter. */}
      <Student student={studentData} />
    </div>
  );
};

export default App;
