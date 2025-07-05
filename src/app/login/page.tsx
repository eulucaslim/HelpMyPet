"use client";
import { Form } from '@/components/Form';
import styles from './login.module.scss';

export default function Login() {
  return (
    <main className={styles.container}>
      <figure className={styles.logoBox}>
        <img src="logo.png" alt="logo" />
      </figure>
      <Form/>
    </main>
  );
}
