import React from "react";
import styles from "./AboutMe.module.scss";

export default function AboutMe() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.profile}>
        <img src="images/dicky.jpg" alt="Profile" />
      </div>

      <p className={styles.desc}>
        Hello, my name is Dicky Saputra and I'm from Jepara, Indonesia. I'm a
        FullStack Web Developer and Now I work as a Freelancer in the field of
        FullStack Web Programmer. I like to learn new things and make my new
        experiences. In the programming world I idolize many developers, for
        example: Sandhika Galih (web programming unpas), eko (programmer zaman
        now), samanthaming, frontendjoe, theprogrammingexpert, etc. someday I
        want to be like them, experts in their fields and share with others. now
        I'm "emptying my glass and looking for water from many sources" and
        these are some of the things I've been enjoying quite a bit recently -
        Find more project as Freelancer - Reading article on Medium or Dev.to -
        Bought some online classes about Programming and got it done Last but
        not least, stay healthy and keep a safe distance!
      </p>

      <hr />
    </div>
  );
}
