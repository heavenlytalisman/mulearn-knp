import styles from "./Footer.module.css";
import { Instagram, Facebook, LinkedIn } from "./assets/svg";
import { ULearnWhite } from "../../assets/svg/svg";
import data from "../../../data.json"

const Footer = () => {
    return (
        <div className={styles.FooterWrapper}>
            <div className={styles.topFooter}>
                <ULearnWhite />
                <p>
                    Reach us at{" "}
                    <a href={`mailto:${data.email}`}>{data.email}</a>
                </p>
                <div>
                    <a target="_blank" href="https://mulearn.org/">
                        µLearn
                    </a>
                    <a target="_blank" href="https://app.mulearn.org/dashboard/special-events">
                        Events
                    </a>
                    <a target="_blank" href="https://www.instagram.com/mulearn.official/?hl=en">
                        Gallery
                    </a>
                    <a target="_blank" href="https://online.fliphtml5.com/egsqr/tlgc/">
                        Branding
                    </a>
                </div>
            </div>
            <div className={styles.socialMedia}>
                <a href={data.linkedIn}>
                    <LinkedIn />
                    LinkedIn
                </a>
                <a href={data.instagram}>
                    <Instagram />
                    Instagram
                </a>
                <a href={data.facebook}>
                    <Facebook />
                    Facebook
                </a>
            </div>
            <div className={styles.line}></div>
            <div className={styles.ptag}>
                {" "}
                <p>Copyright © 2025. All Rights Reserved.</p>
                <p>µLearn Foundation.</p>
            </div>
        </div>
    );
};

export default Footer;
