import React from "react";
import { ReactComponent as LinkedinLogo } from "../assets/linkedin.svg";
import { ReactComponent as InstagramLogo } from "../assets/instagram.svg";
import { ReactComponent as ResumeLogo } from "../assets/resume.svg";
import { ReactComponent as GithubLogo } from "../assets/github.svg";
import { ReactComponent as EmailLogo } from "../assets/email.svg";

function Links() {
  return (
    <>
      <h2>links</h2>
      <a href="https://github.com/hadri12velay">
        <GithubLogo />
      </a>
      <a href="https://www.linkedin.com/in/hbed-develay/">
        <LinkedinLogo />
      </a>
      <a href="https://www.linkedin.com/in/hbed-develay/">
        <InstagramLogo />
      </a>
      <a href="mailto: hadrien@develay.uk">
        <EmailLogo />
      </a>
      <a href="https://www.linkedin.com/in/hbed-develay/">
        <ResumeLogo />
      </a>
    </>
  );
}

export default Links;
