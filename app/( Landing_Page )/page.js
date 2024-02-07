import React from "react";
import classnames from "./landingpage.module.scss";
import Button from "./_components/Button";

export default function LandingPage() {
  return (
    <section className={classnames.landingpage}>
      <div className={classnames.landingpage__container}>
        <div className={classnames.landingpage__header}>
          <h2 className={classnames.title}>Battlepass App</h2>
          <Button />
        </div>

        <div className={classnames.landingpage__content}>
          <p className={classnames.body}>
            {`Introducing [Your Battle Pass App Name]! Dive into a world of gaming
            excitement like never before. With our app, you'll unlock exclusive
            rewards, tackle thrilling challenges, and join a vibrant community
            of fellow gamers. Whether you're a seasoned pro or just starting
            your gaming journey, [Your Battle Pass App Name] offers an immersive
            experience tailored to your playstyle. Stay ahead of the game with
            regular updates, community events, and endless opportunities for
            customization. Download [Your Battle Pass App Name] today and
            elevate your gaming experience to new heights!`}
          </p>
          <Button />
        </div>

        <div className={classnames.landingpage__features}>
          {/* Images of components */}
          {/* Map of features */}
        </div>

        <div className={classnames.landingpage__footer}>
          <p className={classnames.footer_text}>
            {`Sketched with love in a Leuchtturm1917 journal, made real in Visual
            Studio Code by yours truly.`}
          </p>
        </div>
      </div>
    </section>
  );
}
