import "./App.css";
import avater from "./avatar-jessica.jpeg";
import Links from "./components/Links";
export default function App() {
  const userInfo = {
    name: "Jessica Randall",
    location: "London, United Kingdom",
    work: `"Front-end developer and avid reader"`,
  };
  return (
    <>
      <img src={avater} alt="avater" />
      <h1>{userInfo.name}</h1>
      <p className="location">
        <strong>{userInfo.location}</strong>
      </p>
      <p>{userInfo.work}</p>
      <Links></Links>
    </>
  );
}
