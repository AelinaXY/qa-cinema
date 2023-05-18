const TheTeam = () => {
  const teamMembers = [
    {
      name: "AllwinJ",

      twitter: "@allwinj",

      profile: "linkedin.com",

      blog: "https://github.com",
    },

    {
      name: "Lauren D",

      twitter: "@laurend",

      profile: "linkedin@example.com",

      blog: "https://www.github.com",
    },

    {
      name: "Jimmy S",

      twitter: "@jimmys",

      profile: "linkedin.com",

      blog: "https://github.com",
    },

    {
      name: "Maryum S",

      twitter: "@maryum",

      profile: "janesmith@example.com",

      blog: "https://www.github.com",
    },
  ];

  return (
    <>
      <h3 className="aboutPage">
        <span>Our Team</span>
      </h3>{" "}
      <div className="team-members">
        {" "}
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <h4>{member.name}</h4>{" "}
            <p className="aboutPage">
              Twitter:{" "}
              <a href={`https://twitter.com/${member.twitterHandle}`}>
                {member.twitterHandle}
              </a>
            </p>{" "}
            <p>
              Profile: <a href={member.profile}>{member.profile}</a>
            </p>{" "}
            <p>
              Blog: <a href={member.blog}>{member.blog}</a>
            </p>{" "}
          </div>
        ))}{" "}
      </div>
    </>
  );
};

export default TheTeam;
