import Image from 'next/image';
import styles from './page.module.scss';
const aboutMePage = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <p>
          me ~ Im Piotrek i like coding, freestyle skiing, 3d modeling, riding
          on my bike and video games, please write, about me in first person.
        </p>
        <p>
          chatGPT ~ Hi there, my name is Piotrek and I am an avid lover of all
          things technology and adventure. I am a skilled😆 coder and enjoy
          spending my free time creating and tinkering with new programs. In
          addition to coding, I am also a huge fan of freestyle skiing and
          regularly hit the slopes to show off my impressive tricks and
          stunts😆.
          <br />
          In addition to my love of sports and technology, I am also a skilled😆
          3D modeler and love to create intricate and detailed😆 designs using
          specialized software. I am also an avid bike rider and enjoy the
          thrill of the open road and the freedom that comes with it.
          <br />
          In my spare time, I also enjoy playing video games and am always on
          the lookout for the latest and greatest releases. Overall, I am a
          well-rounded individual😆 who is passionate about a wide range of
          activities and interests.
        </p>
        <div className={styles.image}>
          <Image
            src="https://avatars.githubusercontent.com/u/87661735?v=4"
            alt="github profile image"
            width={434}
            height={434}
          />
        </div>
      </main>
    </div>
  );
};

export default aboutMePage;
