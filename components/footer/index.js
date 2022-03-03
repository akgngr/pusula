import { FaEnvelope, FaFacebookSquare, FaMapMarkerAlt, FaPhone, FaTwitterSquare, FaYoutube } from 'react-icons/fa';
import { react as FooterContent, attributes } from '../../content/footer.md';

import { Component } from 'react';
import { ImInstagram } from 'react-icons/im';
import Link from 'next/link';
import { SiYoutubetv } from 'react-icons/si';
import styles from './styles.module.css';

class Footer extends Component {
  render() {
    let {
      sube1_title,
      sube1_map,
      sube1_tel,
      sube1_sabit,
      sube2_title,
      sube2_map,
      sube2_tel,
      sube2_sabit,
      alt_footer,
      twitter,
      facebook,
      instagram,
      youtube,
      linkler,
    } = attributes;
    return (
      <>
        <footer className={styles.footer}>
          <div className={styles.ftcontainer}>
            <div className={styles.ftcard}>
              <h3>Pusula Kurs Merkezi</h3>
              <div>
                <Link href="/">
                  <a>
                    <img src="/image/logo.png" width="140" height="50" />
                  </a>
                </Link>
              </div>
              <p className="py-4">
                18 yılı aşkın tecrübemizle ve deneyimli eğitim kadromuzla öğrencilerimizin hedeflerine ulaşmaları
                konusunda rehber olmaktan gurur duyuyoruz.
              </p>
            </div>

            <div className={styles.ftcard}>
              <h3>Hızlı Erişim</h3>
              <ul className={styles.linkler}>
                {linkler.map(l => (
                  <li key={l.url}>
                    <Link href={l.url}>
                      <a>{l.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.ftcard}>
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
              {/**
              <div>
                <span>
                  <FaPhone />
                </span>
                <span>
                  <a href={'tel:' + sube1_sabit}>{sube1_sabit}</a>
                </span>
              </div>
              
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
            <div className={styles.ftcard}>
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
              {/**
              <div>
                <span>
                  <FaPhone />
                </span>
                <span>
                  <a href={'tel:' + sube2_sabit}>{sube2_sabit}</a>{' '}
                </span>
              </div>
              
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
          <div className={styles.altfooter}>
            <div className={styles.altfootertext}>
              Copyright Pusula Kurs Merkezi © {new Date().getFullYear().toString()} Tüm hakları saklıdır. | Design by{' '}
              <a href="https://akgngr.com">@akgngr</a>
            </div>
            <div className={styles.takip}>
              <span>
                <a target="_blank" href={'https://twitter.com/' + twitter}>
                  <FaTwitterSquare size="2em" />
                </a>
              </span>
              <span>
                <a target="_blank" href={'https://fb.com/' + facebook}>
                  <FaFacebookSquare size="2em" />
                </a>
              </span>
              <span>
                <a target="_blank" href={'https://instagram.com/' + instagram}>
                  <ImInstagram size="2em" />
                </a>
              </span>
              <span>
                <a href={youtube}>
                  <SiYoutubetv size="2em" />
                </a>
              </span>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
