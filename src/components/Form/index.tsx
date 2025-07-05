import { SubmitedButton } from '../SubmitedButton';
import styles from './styles.module.scss';

export function Form(){
    return (
        <section className={styles.contentContainer}>
          <form className={styles.content}>
            <h1>Login</h1>
            <input type="text" name="username" id="username" placeholder="Username"/>
            <input type="password" name="password" id="password" placeholder="Password"/>
            <SubmitedButton />
          </form>
        </section>
    )
}