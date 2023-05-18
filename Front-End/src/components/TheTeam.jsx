import React from "react";

import "./TheTeam.css";

const TheTeam = () => {
  const teamMembers = [
    {
      name: "AllwinJ",
      witter: "@allwinj",
      profile: "https://www.linkedin.com/in/allwinj",
      blog: "https://github.com/allwinj",
      bio: "Allwin is a passionate full-stack developer with a love for creating robust and scalable web applications. With expertise in both frontend and backend technologies, he has a good understanding of HTML, CSS, JavaScript, as well as server-side frameworks and databases. AllwinJ is known for his problem-solving abilities, attention to detail, and ability to deliver high-quality code. In his free time, he enjoys exploring new technologies and contributing to open-source projects.",
    },

    {
      name: "Lauren D",
      twitter: "@laurend",

      profile: "https://www.linkedin.com/in/laurend",

      blog: "https://github.com/laurend",

      bio: "Lauren is a talented full-stack developer who excels in both frontend and backend development. She has a deep foundation in HTML, CSS, JavaScript, as well as experience with server-side technologies and databases. Lauren is known for her strong problem-solving skills, attention to detail, and ability to deliver elegant solutions. She is passionate about creating intuitive user interfaces and efficient backend systems. In her free time, Lauren enjoys participating in hackathons and staying up-to-date with the latest trends in web development.",
    },
    {
      name: "Jimmy D",

      twitter: "@jimmys",

      profile: "https://www.linkedin.com/in/jimmys",

      blog: "https://github.com/jimmys",

      bio: "Jimmy is a versatile full-stack developer with expertise in both frontend and backend technologies. With a strong foundation in HTML, CSS, JavaScript, and server-side programming languages, he has a comprehensive understanding of building end-to-end web applications. Jimmy is known for his problem-solving abilities, attention to detail, and ability to create seamless user experiences. In his free time, he enjoys exploring new frameworks and libraries, and contributing to open-source projects.",
    },

    {
      name: "Maryum S",

      twitter: "@maryum",

      profile: "https://www.linkedin.com/in/maryums",

      blog: "https://github.com/maryums",

      bio: "Maryum is a dedicated full-stack developer with expertise in frontend and backend development. She has an excellent command of HTML, CSS, JavaScript, and server-side frameworks, along with a deep understanding of databases and RESTful APIs. Maryum is known for her analytical thinking, attention to detail, and ability to deliver high-quality code. She enjoys taking on complex challenges and finding elegant solutions. In her free time, Maryum actively contributes to developer communities and enjoys learning about emerging technologies.",
    },
  ];

  return (
    <div className="team-page">
      <h3 className="team-header">Meet Our Developers</h3>{" "}
      <div className="team-members">
        {" "}
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <h4>{member.name}</h4> <p className="member-bio">{member.bio}</p>{" "}
            <p className="member-links">
              {" "}
              <a href={`https://twitter.com/${member.twitter}`}>
                Follow {member.name} on Twitter: {member.twitter}{" "}
              </a>
              <br />{" "}
              <a href={member.profile}>
                Visit {member.name}'s LinkedIn Profile
              </a>
              <br />{" "}
              <a href={member.blog}>Read {member.name}'s Personal Blog</a>{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheTeam;
