import styles from "./Team.module.css";
import line from "./assets/line.png";
import line2 from "./assets/line2.png";
import data from "../../../data.json"

const Team = () => {
    return (
        <div className={styles.teamWrapper} id="team">
            <h1>Our Team</h1>
            <div className={styles.teamBodyWrapper}>
                <div className={styles.teamBgLineWrapper}>
                    <img src={line} alt="" loading="lazy" />
                    <img src={line2} alt="" loading="lazy" />
                    <img src={line} alt="" loading="lazy" />
                    <img src={line2} alt="" loading="lazy" />
                </div>
                <div className={styles.teamMembersDetailsWrapper}>
                    <div className={`${styles.team} ${styles.team1}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.staffAdvisor.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.staffAdvisor.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Staff Advisor
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team2}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.campusLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.campusLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Campus Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team3}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.campusCoLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.campusCoLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Campus Co-Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team4}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.designLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.designLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Design Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team5}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.technicalLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.technicalLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Technical Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team6}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.webLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.webLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Web Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team7}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.outreachLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.outreachLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Outreach Coordinator
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team7}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.outreachLead2.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.outreachLead2.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Outreach Coordinator
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team8}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.studentActivityLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.studentActivityLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Student Activities Cooridinator
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team8}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.studentActivityLead2.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.studentActivityLead2.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Student Activities Cooridinator
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team8}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.discordCoordinator.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.discordCoordinator.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Discord Coordinator
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;