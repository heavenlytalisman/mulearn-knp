import styles from "./Team.module.css";
import line from "./assets/line.png";
import line2 from "./assets/line2.png";
import data from "../../../data.json";

const Team = () => {
  return (
    <div className={styles.teamWrapper} id="team">
      <h1>Our Team</h1>

      <div className={styles.teamBodyWrapper}>
        {/* Background decorative lines */}
        <div className={styles.teamBgLineWrapper}>
          <img src={line} alt="" loading="lazy" />
          <img src={line2} alt="" loading="lazy" />
          <img src={line} alt="" loading="lazy" />
          <img src={line2} alt="" loading="lazy" />
        </div>

        {/* Responsive grid of team members */}
        <div className={styles.teamMembersDetailsWrapper}>
          {Object.entries(data.team).map(([key, member]) => (
            <div key={key} className={styles.team}>
              <img
                className={styles.teamImageIndividual}
                src={member.image}
                alt={member.name}
                loading="lazy"
              />
              <div className={styles.teamNameDesignation}>
                <h3 className={styles.teamMemberName}>{member.name}</h3>
                <p className={styles.teamMemberDesignation}>
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, str => str.toUpperCase())
                  }
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
