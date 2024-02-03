import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '图可视化',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        关注于图可视化中的图分析与图编辑应用。
        关注Web渲染底层技术SVG,Canvas,WebGL,WebGPU。
        专注前端应用技术G6。
      </>
    ),
  },
  {
    title: '低代码引擎',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        关注Lowcode Engine & Tiny Engine开源项目,专注于低代码引擎能力建设，和图可视化低代码平台建设。
      </>
    ),
  },
  {
    title: 'Web应用',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        包含：前端工程化, ES语言, 前端框架。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
