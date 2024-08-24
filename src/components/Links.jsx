import { user } from "../util";
export default function Links() {
  return (
    <div className="buttons">
      {user.links.map((index) => (
        <a href={index.accountLink} key={index}>
          <button key={index}>{index.account}</button>
        </a>
      ))}
    </div>
  );
}
