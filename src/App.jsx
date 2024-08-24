import "./App.css";
import avater from "./avatar-jessica.jpeg";
import Links from "./components/Links";
import { user } from "./util";
export default function App() {
  return (
    <>
      <img src={avater} alt="avater" />
      <h1>{user.name || "Adewale Stephen"}</h1>
      <p className="location">
        <strong>{user.location || "Lagos, Nigeria"}</strong>
      </p>
      <p>{user.work || "FrontEnd Developer"}</p>
      <Links></Links>
    </>
  );
}
