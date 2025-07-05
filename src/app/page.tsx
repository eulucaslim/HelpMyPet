import { Form } from '@/components/Form';
import logoPng from '../../public/logo.png'
import styles from './home.module.scss';

export default function Home() {
  return (
    <main className={styles.container}>
      <figure className={styles.logoBox}>
        <img src="logo.png" alt="logo" />
      </figure>
      <Form/>
    </main>
  );
}
