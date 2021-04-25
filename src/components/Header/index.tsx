import { SignInButton } from '../SignInButton';
import { NavigationLink } from './NavigationLink';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news"/>
        <nav>
          <NavigationLink href="/">
            <a>Home</a>
          </NavigationLink>
          <NavigationLink href="/posts">
            <a>Posts</a>
          </NavigationLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}