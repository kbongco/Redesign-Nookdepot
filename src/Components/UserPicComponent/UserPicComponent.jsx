import React from "react";
import styled from "styled-components";
import "./UserPicComponent.css";

export default function UserPicComponent() {
  const PictureContainer = styled.div`
  display:flex
  justify-content:center';
  `;

  return (
    <>
      <PictureContainer>
        <img
          id="profile"
          src="https://i.ibb.co/rbqDK6j/Screen-Shot-2022-01-01-at-6-59-40-PM.png"
          alt="Screen-Shot-2022-01-01-at-6-59-40-PM"
        />
        <div className="information-container">
          <p className="user">
            whoaitschibi{" "}
            <img className='socials'
              src="https://i.ibb.co/b7K1tQs/discord-logo-logodownload-download-logotipos-1.png"
              alt="discord-logo-logodownload-download-logotipos-1"
              border="0"
            ></img>
          </p>
        </div>
      </PictureContainer>
    </>
  );
}
