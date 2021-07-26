import { Component } from 'react';
import { attributes, react as AboutCompnent } from '../../content/about.md';
import styles from './styles.module.css';
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

class about extends Component {
  render() {
    let { title, description1, description2, ogretmen, ogrenci, sube, sinif } = attributes;
    return (
      <section className={styles.section}>
        <div className={styles.overlay}></div>
        <div className={styles.about}>
          <div className={styles.aboutimg}>
          <SimpleReactLightbox>
          <SRLWrapper>
            <a
              href="https://www.youtube.com/embed/SQjt1ubZ_Nw"
              className="h-20 w-20 flex justify-center items-center rounded-full bg-white"
              srl_video_thumbnail="/image/about-2.jpg"
              srl_video_loop="true"
              srl_video_scale="80"
              srl_video_caption="Twitch video"
            >
              <img src="/image/play.png" className="styles_iconplay__18yIe" />
            </a>
          </SRLWrapper>
          </SimpleReactLightbox>
          </div>
          <div className="z-10 mr-4 ml-4">
            <h1 className="text-4xl font-bold pb-8">{title}</h1>
            <p className="mb-6">{description1}</p>
            <p>{description2}</p>
          </div>
        </div>
        {/*
        <div className={styles.count}>
          <div className={styles.countelement}>
            <strong>
              <CountUp start={0} end={ogretmen} delay={0} duration={10} />
            </strong>
            <span>Öğretmen Sayımız</span>
          </div>
          <div className={styles.countelement}>
            <strong>
              <CountUp start={0} end={ogrenci} delay={0} duration={10} />
            </strong>
            <span>Öğrenci Sayımız</span>
          </div>
          <div className={styles.countelement}>
            <strong>
              <CountUp start={0} end={sube} delay={0} duration={10} />
            </strong>
            <span>Şubelerimiz</span>
          </div>
          <div className={styles.countelement}>
            <strong>
              <CountUp start={0} end={sinif} delay={0} duration={10} />
            </strong>
            <span>Sınıflarımız</span>
          </div>
        </div>
          */}
      </section>
    );
  }
}

export default about;
