import styles from "./Footer.module.css";
import Link from "next/link";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className={styles["footer-container"]}>
            <div className={styles["newsletter-container"]}>
                <div className={styles["newsletter-left-container"]}>
                    <h3>Join the newsletter</h3>
                    <p>Get the latest insights and updates straight to your inbox.</p>
                </div>
                <div className={styles["newsletter-right-container"]}>
                    <div className={styles["newsletter-email-container"]}>
                        <form action="">
                            <input id={"email-input"} type="email" placeholder="Enter Your email" required={true} disabled={true}/>
                            <p>Subscribe</p>
                        </form>
                    </div>
                    <div><p>Your privacy is important. I never share your email.</p></div>
                </div>
            </div>
            
            <div className={styles["footer"]}>
                <div className={styles["footer-left-container"]}>
                    <h2>UTTARAKHAND CULTURE</h2>
                    <p>Our aim is to ensure that this invaluable heritage is passed down to future generations.</p>
                </div>
                
                <div className={styles["footer-right-container"]}>
                    <div className={styles["footer-right-link-container"]} >
                        <p>Socials</p>
                        <Link href="https://www.linkedin.com/company/uttarakhandculture?trk=public_post_follow-view-profile" className={styles["social-link"]}>
                            <Linkedin size={20} />
                            <span>LinkedIn</span>
                        </Link>
                        <Link href="https://github.com/Uttarakhand-Culture" className={styles["social-link"]}>
                            <Github size={20} />
                            <span>Github</span>
                        </Link>
                        <Link href="https://ukculture.netlify.app/contact" className={styles["social-link"]}>
                            <Mail size={20} />
                            <span>Contact us</span>
                        </Link>
                    </div>
                    <div className={styles["footer-right-link-container"]} >
                        <p>Contribution</p>
                        <Link href="">Issues</Link>
                        <Link href="https://github.com/Uttarakhand-Culture/Frontend/blob/main/README.md">About us</Link>
                        <Link href="">Contribution</Link>
                    </div>
                </div>
            </div>
            
            <div className={styles["copyright-container"]}>
                <p>© 2024 Uttarakhand Culture. All rights reserved.</p>
            </div>
        </footer>
    );
}