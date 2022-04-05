import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
const recentPosts = require("../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  console.log(useDocusaurusContext())
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">مرحبًا بك في مدونتي الشخصية حيث أكتب بعض المقالات البسيطة والمفيدة</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            قراءة بعض المقالات
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main className={styles.container}>
        {/* <HomepageFeatures /> */}
        <h2>آخر المقالات</h2>
        <div className={styles.posts}>
          {recentPosts.items.slice(0, 5).map((item, index) => (
            <div key={index} style={{ display: 'flex' }}>
              <a href={`${item.permalink}`}>{item.title}</a>
              {item.image}
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
