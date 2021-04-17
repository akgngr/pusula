import Layout from '../../components/layout';
import styles from './styles.module.css';
import { Component } from 'react';
import { attributes, react as HakkimizdaCompnent } from '../../content/hakkimizda.md';
import HeroWrap from '../../components/herowrap';
import Etkinlik from '../../components/etkinlik';

class hakkimizda extends Component {
  render() {
    let { title } = attributes;
    return (
      <Layout>
        <HeroWrap title={title} />
        <section className={styles.section}>
          <Etkinlik />
          <article className="prose-lg w-full mt-20">
            <HakkimizdaCompnent />
          </article>
        </section>
      </Layout>
    );
  }
}

export default hakkimizda;
