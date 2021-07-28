import Layout from '../../components/layout';
import { Component } from 'react';
import { attributes, react as HakkimizdaCompnent } from '../../content/kurucu-mesaji.md';
import HeroWrap from '../../components/herowrap';
import Seo from '../../partials/seo';
import styles from './styles.module.css'

class misyon extends Component {
  render() {
    let { title } = attributes;
    return (
      <>
        <Seo
          title={title}
          description="Her yerde ve her zaman başarılı olacak, geleceğe şimdiden hazır, 21. yüzyılın;
Sorgulayan,   Sorunlara pratik  çözüm getiren, Türkiye’nin önde gelen Üniversitelerine girmeye aday olmak."
        />
        <Layout>
          <HeroWrap title={title} />
          <section className={styles.section}>
            <article className={styles.article}>
              <HakkimizdaCompnent />
            </article>
          </section>
        </Layout>
      </>
    );
  }
}

export default misyon;
