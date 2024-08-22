export default function Links() {
  const array = [
    {
      account: "Github",
      accountLink: "https://github.com/DemoStephen",
    },
    {
      account: "Frontend Mentor",
      accountLink: "https://www.frontendmentor.io/profile/DemoStephen",
    },
    {
      account: "LinkedIn",
      accountLink: "https://www.linkedin.com/in/stephen-adewale-96bb54229/",
    },
    {
      account: "Twitter",
      accountLink: "https://x.com/codewithstephen",
    },
    {
      account: "Instagram",
      accountLink: "https://www.instagram.com/s.t.e.p.h.e.n.n/",
    },
  ];
  return (
    <div className="buttons">
      {array.map((index) => (
        <a href={index.accountLink} key={index}>
          <button key={index}>{index.account}</button>
        </a>
      ))}
    </div>
  );
}
