import Layout from '../../components/layout';
import { Component } from 'react';
import { attributes, react as DuyurularCompnent } from '../../content/duyurular.md';
import HeroWrap from '../../components/herowrap';
import styles from './styles.module.css';
import Moment from 'moment';

class duyurular extends Component {
  render() {
    Moment.locale('tr');
    let { title, description, duyurular } = attributes;
    return (
      <Layout>
        <HeroWrap title={title} />
        <section className="w-11/12 m-auto text-justify">
          <article className="prose-lg w-full mt-20">
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
          <div className={styles.etkinliklist}>
            {duyurular
              .map((duyuru, k) => (
                <div className={styles.card} key={k}>
                  <span className="col-span-3 leading-1">
                    <div className={styles.baslik}>
                      <h3 className="font-medium text-xl">{duyuru.name}</h3>
                      <span>
                        Etkinlik Tarihi: <strong>{Moment(duyuru.date).format('D.M.Y - H:D')}</strong>
                      </span>
                    </div>
                    <p className="leading-7">{duyuru.description}</p>
                  </span>
                </div>
              ))
              .reverse()}
          </div>
        </section>
      </Layout>
    );
  }
}

export default duyurular;
