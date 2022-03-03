import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade, Lazy, Navigation } from 'swiper';

import About from '../components/about';
import Contact from '../components/contact';
import Etkinlik from '../components/etkinlik';
import Hizmetler from '../components/hizmetler';
import Layout from '../components/layout/index';
import Link from 'next/link';
import Ogrenciyorumlari from '../components/ogrenciyorumlari';
import Popup from '../components/popup';
import Seo from '../partials/seo';
import Slider from '../components/homeslider';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import styles from '../styles/Home.module.css';

const { INSTA_URL } = process.env;

SwiperCore.use([Navigation, Autoplay, Lazy, EffectFade]);

const Home = ({ file, instadata }) => (
  <Layout>
    <Seo
      title="Pusula Kurs Merkezi Şanlıurfa"
      description="18 yılı aşmış tecrübemizle ve deneyimli eğitim kadromuzla öğrencilerimizin hedeflerine ulaşmaları konusunda rehber olmaktan gurur duyuyoruz."
    />
    <Popup className="z-60" />
    <Slider />
    <Hizmetler />
    <Etkinlik />
    <About />
    <section className={styles.section}>
      <div className={styles.title}>
        <h2>Kurslarımız</h2>
        <p>
          Dershanelerimizde vermiş olduğumuz kurslarımız. Uzman Öğretmen kadrolarımızla Öğrencileriniz emin ellerde.
        </p>
      </div>
      <Swiper
        slidesPerView={4}
        autoplay={true}
        lazy={true}
        loop={true}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
          360: {
            slidesPerView: 1,
          },
        }}
      >
        {file.map(f => {
          return (
            <SwiperSlide className={styles.items} key={f.props.htmlString.slug}>
              <div className={styles.img} style={{ background: `url(${f.props.htmlString.image})` }}></div>
              <h3>
                <Link href={'/kurs/' + f.props.htmlString.slug}>
                  <a>{f.props.htmlString.title}</a>
                </Link>
              </h3>
              <p>{f.props.htmlString.description}</p>
              <Link href={'/kurs/' + f.props.htmlString.slug}>
                <a className={styles.button}>Devamını Oku</a>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
    <Contact />
    <Ogrenciyorumlari />

    {/*
    <section id="instafeed" className={styles.instafeedsection}>
          <Swiper
            slidesPerView={4}
            autoplay={true}
            lazy={true}
            loop={true}
            spaceBetween={10}
            breakpoints={{
                1024: {
                slidesPerView: 4,
                },
                768: {
                slidesPerView: 3,
                },
                640: {
                slidesPerView: 2,
                },
                360: {
                slidesPerView: 1,
                },
            }}
            >
            {instadata.data.map(d => {
                    if(d.media_type === "IMAGE") {
                      return( 
                        <SwiperSlide key={d.id}>
                        <div className={styles.instafeedcontainer}
                          style={{backgroundImage:`url(${d.media_url})`}}
                        >
                        <a target="_blank" href={d.permalink}><span>{d.caption}</span></a>
                        </div>
                      </SwiperSlide>
                      )
                    }
                }).slice(0, 10)}
                
            </Swiper>
        </section>
         
    */}
  </Layout>
);

export const getStaticProps = async () => {
  const files = fs.readdirSync('_posts/dersler');
  const instaresult = await fetch(INSTA_URL, {
    method: 'GET',
  });

  const instafeed = await instaresult.json();

  const filesread = files.map(file => {
    const markdownWithData = fs.readFileSync(path.join('_posts/dersler', file)).toString();
    const parsedMarkdown = matter(markdownWithData);
    return {
      props: {
        htmlString: parsedMarkdown.data,
      },
    };
  });

  return {
    props: {
      slugs: files.map(filename => filename.replace('.md', '')),
      file: filesread,
      instadata: instafeed,
    },
  };
};

export default Home;
