import React from "react";
import { ReactComponent as LinkedinLogo } from "../assets/linkedin.svg";
import { ReactComponent as InstagramLogo } from "../assets/instagram2.svg";
import { ReactComponent as ResumeLogo } from "../assets/resume2.svg";
import { ReactComponent as GithubLogo } from "../assets/github.svg";
import { ReactComponent as EmailLogo } from "../assets/email.svg";

function Links() {
    return (
        <>
            <a
                href="https://github.com/hadri12velay"
                className="github"
                target="_blank"
                title="GitHub"
            >
                <GithubLogo />
            </a>
            <a
                href="https://www.linkedin.com/in/hbed-develay/"
                className="linkedin"
                target="_blank"
                title="LinkedIn"
            >
                <LinkedinLogo />
            </a>
            <a
                href="https://www.instagram.com/hadri1.2velay/"
                className="instagram"
                target="_blank"
                title="Instagram"
            >
                <InstagramLogo />
            </a>
            <a
                href="mailto: hadrien@develay.uk"
                className="email"
                target="_blank"
                title="e-mail"
            >
                <EmailLogo />
            </a>
            <a
                href="https://hadri1.com/resume/"
                className="resume"
                target="_blank"
                title="resume"
            >
                <ResumeLogo />
            </a>
        </>
    );
}

export default Links;
