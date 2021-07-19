import Link from 'next/link';
import styles from './index.module.css';
import { IconContext } from 'react-icons';
import { IoIosCall } from 'react-icons/io';
import Navbar from '../navbar/index';
import Footer from '../footer';

const myLoader = ({ src }) => {
  return `${src}`;
};

const layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.navbartop}>
          <div className="col-span-1 lg:col-span-3 py-4 lg:py-6">
            <Link href="/">
              <a>
                <img src="/image/logo.jpeg" width="140" height="50" />
              </a>
            </Link>
          </div>

          <IconContext.Provider value={{ className: 'site-icon' }}>
            <div className="flex justify-start items-start space-x-4 py-4 lg:py-6">
              <div className={styles.ortala}>
                <IoIosCall />
              </div>

              <div className="flex flex-col">
                <span className="font-bold">Telefon</span>
                <span>
                  <a href="tel:+905071520956">0507 152 09 56</a>{' '}
                </span>
              </div>
            </div>
          </IconContext.Provider>

          <div className="lg:flex lg:justify-end items-center hidden py-4 lg:py-6">
            <Link href="/yaz-kursu-kayit">
              <a className={styles.button}>Biz Sizi Arayalım</a>
            </Link>
          </div>
        </div>

        <Navbar />
      </header>

      <main className="w-full">{children}</main>

      <Footer />
    </>
  );
};

export default layout;
