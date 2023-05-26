import styles from './page.module.scss';

export const metadata = {
  title: 'Home',
  description: 'Get the ultimate experience with Global Chef knives',
};

export default function HomePage() {
  return (
    <div className={styles.home}>
      <h1 className={styles.titlePage}>HOME</h1>
      <p className={styles.description}>
        Welcome to PlayVerse: Your Ultimate Destination for Gaming Delights! At
        PlayVerse, we are passionate about gaming and dedicated to providing you
        with an unparalleled gaming experience. As an avid gamer, you know that
        true joy lies in exploring vast virtual worlds, conquering epic quests,
        and challenging your skills against fellow gamers. That's why we have
        curated an extensive collection of games, ensuring there's something for
        every player, from casual enthusiasts to hardcore adventurers.
      </p>
      <p className={styles.description}>
        Welcome to PlayVerse: Your Ultimate Destination for Gaming Delights! At
        PlayVerse, we are passionate about gaming and dedicated to providing you
        with an unparalleled gaming experience. As an avid gamer, you know that
        true joy lies in exploring vast virtual worlds, conquering epic quests,
        and challenging your skills against fellow gamers. That's why we have
        curated an extensive collection of games, ensuring there's something for
        every player, from casual enthusiasts to hardcore adventurers. Why
        choose PlayVerse? We pride ourselves on being more than just another
        gaming platform. We are a community, a haven where gamers come together
        to connect, share their love for games, and embark on unforgettable
        gaming journeys. With a diverse and constantly expanding library of
        games, you'll discover hidden gems, classics, and the latest releases
        that will keep you hooked for hours on end.
      </p>
      <p className={styles.description}>
        Unleash your gaming prowess across multiple genres. Dive into the
        heart-pounding action of adrenaline-fueled shooters, embrace the
        strategic depths of immersive RPGs, or indulge in the mind-bending
        puzzles of our collection of brain teasers. Whether you're a fan of
        heart-stopping thrillers, breathtaking adventures, or heartwarming indie
        masterpieces, we have it all.
      </p>
    </div>
  );
}
