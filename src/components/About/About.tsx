import React, { useEffect, useState } from "react";
import "./style.css";

export default function About() {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    async function fetchContributors(username: string) {
      const res = await fetch(`https://api.github.com/users/${username}`).then(
        (res) => res.json()
      );
      return res;
    }

    const contributorsPerson = ['matchati', 'muhammadradifa', 'ifnuu01']

    const fetchContributorsData = async () => {
      const contributorsData = await Promise.all(
        contributorsPerson.map(async (username) => {
          const data = await fetchContributors(username);
          return data;
        }),
      );

      setContributors(contributorsData);
    };

    fetchContributorsData();
  }, []);


  return (
    <div className="about">
      <div>
        <h2>From Developer to Developer</h2>
        <h3>Eazy UI Contributors</h3>
        <div className="contributors">
          {contributors.map((contributor,i) => (
            <a href={contributor.html_url} target='_blank' key={i} className="contributor">
              <img src={contributor.avatar_url} alt="avatar" />
            </a>         
          ))}
        </div>
      </div>
    </div>
  );
}
