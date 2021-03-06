import Layout from '../../components/layout';
import styles from './styles.module.css';
import HeroWrap from '../../components/herowrap';
import { attributes, react as FooterContent } from '../../content/footer.md';
import { Component } from 'react';
import Iframe from 'react-iframe';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Seo from '../../partials/seo';

class iletisim extends Component {
  render() {
    let {
      sube1_title,
      sube1_map,
      sube1_tel,
      sube1_sabit,
      sube1_mail,
      sube2_title,
      sube2_map,
      sube2_tel,
      sube2_sabit,
      sube2_mail
    } = attributes;
    return (
      <>
        <Seo
          title="İletişim"
          description="Bizimle iletişime geçin. İsterseniz iletişim bilgilerinizi girin biz sizi arayalım."
        />
        <Layout>
          <HeroWrap title="İletişim" />
          <section className={styles.section}>
            <article className={styles.form}>
              <header className="mb-6">
                <h2 className="font-semibold text-blue-700 text-2xl pb-2">İletişim Formu</h2>
                <p className="font-light">
                  Bizimle iletişime geçin.. İsterseniz iletişim bilgilerinizi girin biz sizinle iletişime geçelim..
                </p>
              </header>
              <div className={styles.contactform}>
                <form method="POST" name="contact" action="/success" netlify-honeypot="bot-field" data-netlify="true">
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you’re human: <input name="bot-field" />
                    </label>
                  </p>
                  <input type="hidden" name="form-name" value="contact" />
                  <div className={styles.formControl}>
                    <input type="text" name="name" id="name" placeholder="Adınız Soyadınız" required={true} />
                  </div>
                  <div className={styles.formControl}>
                    <input type="email" name="email" id="email" placeholder="E-posta adresiniz" required={true} />
                  </div>
                  <div className={styles.formControl}>
                    <input type="tel" name="telefon" id="telefon" placeholder="Telefon numaranız" required={true} />
                  </div>
                  <div className={styles.formControl}>
                    <textarea name="mesaj" id="mesaj" placeholder="Mesajınız" required={true}></textarea>
                  </div>
                  <div className="mt-4">
                    <button type="submit">Gönder</button>
                  </div>
                </form>
              </div>
            </article>
            <div className={styles.haritalar}>
              <div className={styles.iletisimalt}>
                <div>
                  <Iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.13622841848!2d38.80023331530178!3d37.22074087986399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1ffafa37b8ee91e2!2sPusula%20Kurs%20Merkezi!5e0!3m2!1str!2str!4v1627291741918!5m2!1str!2str"
                    width="100%"
                    height="355"
                    style="border:0;"
                    allowFullScreen=""
                    loading="lazy"
                  ></Iframe>
                </div>
                <div>
                  <h3>{sube1_title}</h3>
                  <div>
                    <span>
                      <FaMapMarkerAlt />
                    </span>
                    <span>{sube1_map}</span>
                  </div>
                  <div>
                    <span>
                      <FaPhone />
                    </span>
                    <span>
                      <a href={'tel:' + sube1_tel}>{sube1_tel}</a>
                    </span>
                  </div>
                  <div>
                    <span>
                      <FaPhone />
                    </span>
                    <span>
                      <a href={'tel:' + sube1_sabit}>{sube1_sabit}</a>
                    </span>
                  </div>
                  {/**
                   <div>
                    <span>
                      <FaEnvelope />
                    </span>
                    <span>
                      <a href={'mailto:' + sube1_mail}>{sube1_mail}</a>
                    </span>
                  </div>
                   */}
                </div>
              </div>
              <div className={styles.iletisimalt}>
                <div>
                  <Iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.13622841848!2d38.80023331530178!3d37.22074087986399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1ffafa37b8ee91e2!2sPusula%20Kurs%20Merkezi!5e0!3m2!1str!2str!4v1627291741918!5m2!1str!2str"
                    width="100%"
                    height="355"
                    style="border:0;"
                    allowFullScreen=""
                    loading="lazy"
                  ></Iframe>
                </div>
                <div>
                  <h3>{sube2_title}</h3>
                  <div>
                    <span>
                      <FaMapMarkerAlt />
                    </span>
                    <span>{sube2_map}</span>
                  </div>
                  <div>
                    <span>
                      <FaPhone />
                    </span>
                    <span>
                      <a href={'tel:' + sube2_tel}>{sube2_tel}</a>{' '}
                    </span>
                  </div>
                  <div>
                    <span>
                      <FaPhone />
                    </span>
                    <span>
                      <a href={'tel:' + sube2_sabit}>{sube2_sabit}</a>
                    </span>
                  </div>
                  {/**
                   <div>
                    <span>
                      <FaEnvelope />
                    </span>
                    <span>
                      <a href={'mailto:' + sube2_mail}>{sube2_mail}</a>
                    </span>
                  </div>
                   */}
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  }
}

export default iletisim;

