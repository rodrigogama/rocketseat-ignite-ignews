import React, { ReactElement } from 'react';
import Link, { LinkProps } from "next/link";
import clsx from 'clsx';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

interface NavigationLinkProps extends LinkProps {
  children: ReactElement;
}

export function NavigationLink({ children, ...linkProps }: NavigationLinkProps) {
  const { asPath } = useRouter();
  const anchorElement = React.cloneElement(children, {
    className: clsx({ [styles.active]: linkProps.href === asPath }),
  });

  return (
    <Link {...linkProps}>
      {anchorElement}
    </Link>
  );
}