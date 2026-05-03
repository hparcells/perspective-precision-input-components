import type { ReactNode } from 'react';
import clsx from 'clsx';

import Heading from '@theme/Heading';

import styles from './styles.module.css';

interface FeatureItem {
  title: string;
  description: ReactNode;
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Reduce Unnecessary Writes',
    description: (
      <>
        Standard Perspective inputs write to their backing data source on every keystroke. Debounced
        components wait until the user pauses, keeping your tags, scripts, and database queries free
        of intermediate partial values.
      </>
    )
  },
  {
    title: 'Two-Value Architecture',
    description: (
      <>
        Debounced components expose both a live property (updated on every keystroke) and a
        committed debounced property (updated after the delay). Bind to whichever suits your use
        case.
      </>
    )
  },
  {
    title: 'Change History Built In',
    description: (
      <>
        On every commit the component automatically writes the prior value to{' '}
        <code>previousValue</code> and records a <code>timestamp</code>. No extra scripting needed
        to know what changed or when.
      </>
    )
  }
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('padding-horiz--md', styles.featureCard)}>
        <Heading as='h3'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature
              key={idx}
              {...props}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
