/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import styles from './v1cn.module.scss';

const metrics = [
  { value: 13, suffix: ' 场', label: 'AI 业务深访' },
  { value: 8, suffix: ' 期', label: 'AI Native 宣发看板' },
  { value: 95, suffix: '%', label: '全渠道宣传触达率' },
  { value: 50, suffix: '万+', label: 'Python 处理营销数据' },
  { value: 45, suffix: '%', label: '提高运营效率约' },
];

const capabilityWords = [
  'AIGC 内容生产与传播',
  'AI Skill 落地',
  'AI 工作流提效',
  '互联网运营经验',
  '互联网运营',
  '可视化看板',
  '内容运营',
  '用户运营',
  '活动统筹',
  '项目推进',
  '数据分析',
  '跨部门协作',
  'SOP 沉淀',
  '方法论提炼',
];

const modalData = {
  xhs: {
    eyebrow: 'INTERNSHIP 01',
    title: '小红书｜AI 审核运营部',
    summary: '围绕 AI 案例运营、内部传播与大型活动统筹，把业务实践转化为可复用的方法与可感知的内容。',
    groups: [
      ['核心职责', ['筛选各业务部门 POC 推荐的高价值 AI 应用案例', '完成 13 场业务深度访谈，拆解场景、路径与成效', '基于 Seal 调用 GLM、Doubao、Claude、GPT 等模型开展内容运营']],
      ['方法与工具', ['沉淀多场景宣发写作 SOP，并封装为内部 AI Skill', '上传至 Co-Work 平台，推动跨场景协同复用', '周度迭代 8 期 AI Native 可视化看板']],
      ['结果', ['员工互动率提升约 60%', '宣发效率提升 45%', '全流程耗时压缩约 40%', '统筹 10+ 场大型活动，并完成 7 层办公区世界杯主题场景落地']],
    ],
  },
  hz: {
    eyebrow: 'INTERNSHIP 02',
    title: '华中时讯科技｜创新产品运营',
    summary: '围绕社交产品“名人朋友圈”APP，贯通活动策划、增长机制、产品协同与推广支持。',
    groups: [
      ['活动运营', ['独立策划 3 场大型主题活动', '统筹 6 大分赛场，完成 1 万+ 选手报名语音审核', '全渠道宣传触达率 95%，活动参与率 80%+']],
      ['增长动作', ['优化奖励机制，参与度提升 30%', '日均活跃用户增长 25%', '活动曝光超 5 万次，收益率提升 35%']],
      ['产品协同', ['跨 5 个部门推进产品优化', '推动解决 5 个卡顿问题', '协同市场部制定 3 套推广方案']],
    ],
  },
  shanji: {
    eyebrow: 'PROJECT 01',
    title: '善迹｜公益项目与社群增长',
    summary: '以用户分层、社群运营和数据分析连接线上互动与线下公益转化。',
    groups: [
      ['项目背景', ['面向校园闲置书籍与公益需求，建立可持续的线上触达和线下承接链路']],
      ['增长动作', ['搭建用户分层触达机制，优化社群日常 SOP', '回收 200+ 份用户问卷，输出 3 份数据简报', '运用 AIGC 设计 6 版活动海报，联动校园社群与线下点位']],
      ['最终结果', ['社群日均互动由 90 提升至 185', '退群率降至 8%，捐赠率提升 22%', '累计捐赠 679 本书，线下承接转化率提升 20%']],
    ],
  },
  research: {
    eyebrow: 'PROJECT 02',
    title: '研究与实践｜洞察、复盘与组织',
    summary: '把课堂研究、社会实践与跨文化活动组织整合为可验证的分析与落地能力。',
    groups: [
      ['营销研究', ['完成安踏武汉市场 20+ 页策略报告，以双问卷覆盖 4 类消费场景', '完成《风雨单车竞品报告》等 6 份报告，以 Python 处理 50 万+ 条骑行数据，提炼 3 项差异化机会']],
      ['实践报告', ['独立使用问卷星、SPSS 开展伊帕尔汗市场调研', '回收 800+ 份有效问卷，深访 30+ 名消费者', '通过 Excel 可视化与 Python 文本分析协同完成学院优秀实践报告']],
      ['组织实践', ['担任 SICA ISD 部门负责人，主导国际学生新年晚会策划与场地设计', '融合 12 国文化元素，吸引 500+ 人参与，内容曝光 3 万+', '钢琴十级；曾参与校级主持人队工作并主持 10+ 场校级活动']],
    ],
  },
};

function CountUp({ value, suffix, label }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    let frame;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / 1100, 1);
          setDisplay(Math.round(value * (1 - (1 - progress) ** 3)));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.45 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);
  return (
    <article ref={ref} className={styles.metric}>
      <strong>
        {display}
        {suffix}
      </strong>
      <span>{label}</span>
    </article>
  );
}

function SectionHeading({ index, label, title, note }) {
  return (
    <header className={styles.sectionHeading}>
      <div>
        <span>{index}</span>
        <span>{label}</span>
      </div>
      <h2>{title}</h2>
      {note && <p>{note}</p>}
    </header>
  );
}

function FluidTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const context = canvas.getContext('2d');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (reducedMotion || !finePointer) return undefined;
    let frame;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles = [];
    const pointer = {
      x: width / 2,
      y: height / 2,
      vx: 0,
      vy: 0,
      speed: 0,
      active: false,
      lastMove: 0,
    };
    const field = { x: pointer.x, y: pointer.y, vx: 0, vy: 0, strength: 0 };

    const seedParticles = () => {
      const count = Math.max(72, Math.min(158, Math.round((width * height) / 12500)));
      particles = Array.from({ length: count }, (_, index) => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        return {
          x,
          y,
          homeX: x,
          homeY: y,
          vx: 0,
          vy: 0,
          radius: 0.45 + Math.random() * 1.15,
          alpha: 0.12 + Math.random() * 0.26,
          phase: Math.random() * Math.PI * 2,
          drift: 0.18 + Math.random() * 0.5,
          tint: index % 3,
        };
      });
    };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      seedParticles();
    };

    const move = (event) => {
      const nextVx = event.clientX - pointer.x;
      const nextVy = event.clientY - pointer.y;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.vx = pointer.vx * 0.38 + nextVx * 0.62;
      pointer.vy = pointer.vy * 0.38 + nextVy * 0.62;
      pointer.speed = Math.min(62, Math.hypot(pointer.vx, pointer.vy));
      pointer.active = true;
      pointer.lastMove = performance.now();
    };
    const leave = () => {
      pointer.active = false;
    };

    const drawAirGlow = () => {
      if (field.strength < 0.01) return;
      const angle = Math.atan2(field.vy, field.vx || 0.001);
      const radius = 88 + pointer.speed * 1.8;
      context.save();
      context.globalCompositeOperation = 'lighter';
      context.translate(field.x, field.y);
      context.rotate(angle);
      context.scale(1.9, 0.72);
      const glow = context.createRadialGradient(0, 0, 0, 0, 0, radius);
      glow.addColorStop(0, `rgba(133, 205, 202, ${0.045 * field.strength})`);
      glow.addColorStop(0.42, `rgba(102, 157, 207, ${0.024 * field.strength})`);
      glow.addColorStop(1, 'rgba(112, 139, 191, 0)');
      context.fillStyle = glow;
      context.beginPath();
      context.arc(0, 0, radius, 0, Math.PI * 2);
      context.fill();
      context.restore();
    };

    const draw = (now) => {
      context.clearRect(0, 0, width, height);
      const moving = pointer.active && now - pointer.lastMove < 110;
      const targetStrength = moving ? Math.min(1, 0.2 + pointer.speed / 44) : 0;
      field.strength += (targetStrength - field.strength) * (moving ? 0.1 : 0.018);
      field.vx += (pointer.vx - field.vx) * 0.075;
      field.vy += (pointer.vy - field.vy) * 0.075;
      field.x += (pointer.x - field.x) * 0.065;
      field.y += (pointer.y - field.y) * 0.065;
      pointer.vx *= 0.9;
      pointer.vy *= 0.9;
      pointer.speed *= 0.9;

      drawAirGlow();

      const fieldRadius = 112 + Math.min(76, Math.hypot(field.vx, field.vy)) * 1.65;
      particles.forEach((particle) => {
        const ambientX = Math.sin(now * 0.00019 * particle.drift + particle.phase) * 5;
        const ambientY = Math.cos(now * 0.00015 * particle.drift + particle.phase) * 4;
        const dx = particle.x - field.x;
        const dy = particle.y - field.y;
        const distance = Math.max(1, Math.hypot(dx, dy));

        if (distance < fieldRadius && field.strength > 0.008) {
          const proximity = (1 - distance / fieldRadius) ** 2 * field.strength;
          const directionX = field.vx / Math.max(5, Math.hypot(field.vx, field.vy));
          const directionY = field.vy / Math.max(5, Math.hypot(field.vx, field.vy));
          const radialX = dx / distance;
          const radialY = dy / distance;
          const swirl = Math.sin(particle.phase + now * 0.0013) * 0.42;
          particle.vx += (radialX * 0.36 + directionX * 0.52 - radialY * swirl) * proximity;
          particle.vy += (radialY * 0.36 + directionY * 0.52 + radialX * swirl) * proximity;
        }

        particle.vx += (particle.homeX + ambientX - particle.x) * 0.0022;
        particle.vy += (particle.homeY + ambientY - particle.y) * 0.0022;
        particle.vx *= 0.968;
        particle.vy *= 0.968;
        particle.x += particle.vx;
        particle.y += particle.vy;

        const colors = ['145, 207, 255', '122, 196, 181', '153, 145, 204'];
        const velocityGlow = Math.min(0.22, Math.hypot(particle.vx, particle.vy) * 0.035);
        context.fillStyle = `rgba(${colors[particle.tint]}, ${particle.alpha + velocityGlow})`;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius + velocityGlow * 1.8, 0, Math.PI * 2);
        context.fill();
      });
      frame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerleave', leave);
    frame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerleave', leave);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.fluidTrail} aria-hidden="true" />;
}

function ResultModal({ item, image, imageAlt, onClose }) {
  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [onClose]);

  return (
    <div
      className={styles.modalBackdrop}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="result-modal-title">
        <button type="button" className={styles.modalClose} onClick={onClose}>
          收起成果 ×
        </button>
        <span className={styles.eyebrow}>{item.eyebrow}</span>
        <h2 id="result-modal-title">{item.title}</h2>
        <p className={styles.modalLead}>{item.summary}</p>
        {image && (
          <figure className={styles.modalImage}>
            <Image src={image} alt={imageAlt} fill sizes="(max-width: 700px) 88vw, 440px" />
          </figure>
        )}
        <div className={styles.modalGrid}>
          {item.groups.map(([title, items]) => (
            <article key={title}>
              <h3>{title}</h3>
              <ul>
                {items.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function Portfolio() {
  const [theme, setTheme] = useState('dark');
  const [activeResult, setActiveResult] = useState(null);

  useEffect(() => {
    const saved = window.localStorage.getItem('akida-theme');
    const nextTheme = saved === 'light' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem('akida-theme', nextTheme);
  };

  return (
    <>
      <Head>
        <title>艾柯代·开日木拉｜Marketing × AI × Operations × Data</title>
        <meta name="description" content="艾柯代·开日木拉的个人作品集：AI 应用、内容运营、用户增长、活动统筹与数据研究。" />
      </Head>
      <div className={styles.siteShell}>
        <div className={styles.ambient} aria-hidden="true" />
        <FluidTrail />
        <nav className={styles.nav} aria-label="主导航">
          <a className={styles.brand} href="#top">
            艾柯代
          </a>
          <div className={styles.navLinks}>
            <a href="#top">关于我</a>
            <a href="#education">教育背景</a>
            <a href="#internships">实习经历</a>
            <a href="#projects">项目与探索</a>
          </div>
          <button type="button" className={styles.themeToggle} onClick={toggleTheme} aria-label="切换明暗模式">
            <span>{theme === 'dark' ? '夜' : '昼'}</span>
          </button>
        </nav>

        <main>
          <section id="top" className={styles.hero}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>PERSONAL PORTFOLIO · WUHAN</span>
              <h1>
                艾柯代<span>·</span>开日木拉
              </h1>
              <p className={styles.heroMeta}>华中科技大学｜市场营销｜2027届</p>
              <p className={styles.heroStatement}>用内容理解用户，用数据验证结果，用 AI 提升效率，把想法真正推进到落地。</p>
              <div className={styles.heroTags}>
                {['AIGC 内容生产与传播', 'AI Skill 落地', '互联网内容运营', '用户运营', '活动统筹', '数据分析', '项目推进'].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className={styles.heroActions}>
                <a href="#internships">查看核心经历</a>
                <a href="#education">了解能力概览</a>
                <a href="/v1-cn/艾柯代-华科-市场营销2027届.pdf" download>
                  下载最新简历
                </a>
              </div>
            </div>
            <div className={styles.wordCloud} aria-label="能力关键词云">
              {capabilityWords.map((word, index) => (
                <span key={word} data-index={index}>
                  {word}
                </span>
              ))}
              <div className={styles.orbit} aria-hidden="true" />
              <strong>AI × 运营</strong>
            </div>
          </section>

          <section className={styles.metrics} aria-label="关键成果">
            {metrics.map((metric) => (
              <CountUp key={metric.label} {...metric} />
            ))}
          </section>

          <section id="education" className={styles.section}>
            <SectionHeading index="01" label="EDUCATION & CAPABILITY" title="教育背景与能力概览" note="知识结构、实践工具与可验证的能力，被整合在同一张工作地图里。" />
            <div className={styles.educationGrid}>
              <article className={`${styles.panel} ${styles.educationCard}`}>
                <span className={styles.panelLabel}>教育背景</span>
                <h3>华中科技大学</h3>
                <p>管理学院 · 市场营销</p>
                <div className={styles.educationStats}>
                  <strong>985</strong>
                  <span>高校</span>
                  <strong>36</strong>
                  <span>门核心课程全部 90+</span>
                  <strong>2027</strong>
                  <span>届</span>
                </div>
                <div className={styles.awards}>
                  <span>2024 湖北省营销挑战赛校赛三等奖</span>
                  <span>2024 普华永道杯·决战 24H 商业挑战赛晋级</span>
                  <span>第二十五届全国奥林匹克杯写作大赛一等奖</span>
                </div>
              </article>
              <figure className={styles.portraitCard}>
                <div className={styles.portraitCrop}>
                  <Image src="/v1-cn/portrait.png" alt="艾柯代·开日木拉" fill sizes="(max-width: 800px) 74vw, 28vw" priority />
                </div>
                <figcaption>
                  <strong>Marketing × AI</strong>
                  <span>Operations × Data</span>
                </figcaption>
              </figure>
              <article className={`${styles.panel} ${styles.skillCard}`}>
                <span className={styles.panelLabel}>核心能力</span>
                <div className={styles.skillCloud}>
                  {capabilityWords.map((word, index) => (
                    <strong key={word} data-size={index % 3}>
                      {word}
                    </strong>
                  ))}
                </div>
                <div className={styles.toolLine}>
                  <span>Office / Excel / PS / 飞书 / 问卷星</span>
                  <span>SPSS / Python / GPT / Codex / Seal</span>
                  <span>GLM / Doubao / Claude / DeepSeek</span>
                  <span>nano-banana / Seedance</span>
                </div>
              </article>
            </div>
            <div className={styles.infoRibbon}>
              <span>英语 CET-4</span>
              <span>英语 CET-6</span>
              <span>钢琴十级</span>
              <span>校级主持人队副队长</span>
              <span>SICA 国际学生协会部长</span>
              <span>探索 AIGC</span>
              <span>vibe coding</span>
            </div>
          </section>

          <section id="internships" className={styles.section}>
            <SectionHeading index="02" label="INTERNSHIPS" title="实习经历" note="从 AI 内容传播到增长运营，以项目化方式推进复杂协作。" />
            <div className={styles.internshipStack}>
              <article className={`${styles.caseCard} ${styles.xhsCard}`}>
                <div className={styles.caseHeader}>
                  <div>
                    <span className={styles.caseNumber}>01</span>
                    <span className={styles.caseType}>AI OPERATIONS</span>
                  </div>
                  <time>2026.05 - 2026.08</time>
                </div>
                <div className={styles.caseTitleRow}>
                  <div>
                    <h3>小红书</h3>
                    <p>AI 审核运营部 · 内容运营 / 活动运营实习生</p>
                  </div>
                  <button type="button" className={styles.inlineScrollCue} onClick={() => setActiveResult('xhs')}>
                    展开成果 ↗
                  </button>
                </div>
                <p className={styles.caseLead}>基于自研 AI 生产力中台 Seal，连接案例筛选、深度访谈、内容传播、AI Skill 复用与大型活动统筹。</p>
                <div className={styles.xhsBody}>
                  <div className={styles.resultGrid}>
                    {[
                      ['13 场', '业务访谈AI skill沉淀'],
                      ['8 期', 'AI Native 看板'],
                      ['+60%', '员工互动率'],
                      ['+45%', '宣发效率'],
                      ['-40%', '全流程耗时'],
                      ['10+ 场', '统筹大型活动'],
                    ].map(([value, label]) => (
                      <div key={label}>
                        <strong>{value}</strong>
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.xhsGallery}>
                    <figure>
                      <Image src="/v1-cn/xhs-event.jpg" alt="82 小红书日活动现场" fill sizes="(max-width: 800px) 92vw, 30vw" />
                      <figcaption>82 小红书日 · 大型活动统筹</figcaption>
                    </figure>
                    <figure>
                      <Image src="/v1-cn/xhs-campus.jpg" alt="小红书园区标识" fill sizes="(max-width: 800px) 92vw, 22vw" />
                    </figure>
                    <svg className={styles.curvedArrow} viewBox="0 0 180 90" aria-hidden="true">
                      <path d="M8 74 C54 8, 112 8, 164 53" />
                      <path d="M151 49 L165 54 L158 67" />
                    </svg>
                  </div>
                </div>
              </article>
              <article className={`${styles.caseCard} ${styles.hzCard}`}>
                <div className={styles.caseHeader}>
                  <div>
                    <span className={styles.caseNumber}>02</span>
                    <span className={styles.caseType}>PRODUCT OPERATIONS</span>
                  </div>
                  <time>2025.07 - 2025.09</time>
                </div>
                <div className={styles.caseTitleRow}>
                  <div>
                    <div className={styles.hzTitleWithIcon}>
                      <h3>华中时讯科技</h3>
                      <span className={styles.appIcon} aria-hidden="true">
                        <Image src="/v1-cn/celebrity-app.png" alt="" fill sizes="64px" />
                      </span>
                    </div>
                    <p>创新产品运营部 · 创新产品运营实习生</p>
                  </div>
                  <button type="button" className={styles.inlineScrollCue} onClick={() => setActiveResult('hz')}>
                    展开成果 ↗
                  </button>
                </div>
                <p className={styles.caseLead}>围绕社交产品“名人朋友圈”APP，负责活动策划、增长运营、产品协同与推广支持。</p>
                <div className={styles.hzDashboard}>
                  <div className={styles.funnel}>
                    <span style={{ '--width': '100%' }}>
                      全渠道触达 <strong>95%</strong>
                    </span>
                    <span style={{ '--width': '84%' }}>
                      活动参与 <strong>80%+</strong>
                    </span>
                    <span style={{ '--width': '56%' }}>
                      参与度提升 <strong>30%</strong>
                    </span>
                    <span style={{ '--width': '48%' }}>
                      日均活跃增长 <strong>25%</strong>
                    </span>
                  </div>
                  <div className={styles.processFlow}>
                    {['3 场主题活动', '6 大分赛场', '跨 5 部门协作', '5 个问题闭环', '3 套推广方案'].map((item, index) => (
                      <div key={item}>
                        <span>0{index + 1}</span>
                        <strong>{item}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section id="projects" className={styles.section}>
            <SectionHeading index="03" label="PROJECTS & EXPLORATION" title="项目与探索" note="一个公益大创项目，与一组研究及组织实践。" />
            <div className={styles.projectGrid}>
              <article className={`${styles.projectCard} ${styles.shanjiCard}`}>
                <div className={styles.projectTop}>
                  <span>FEATURED PROJECT</span>
                  <span>2025.01 - 至今</span>
                </div>
                <h3>善迹</h3>
                <p className={styles.projectRole}>公益项目 / 用户运营与社群增长</p>
                <p>通过用户分层、社群 SOP、问卷研究与线下承接，建立一条可持续的校园公益转化链路。</p>
                <figure className={styles.shanjiVisual}>
                  <Image src="/v1-cn/shanji-result-v8-final-all-covered-20260912.png" alt="善迹数字慈善团队介绍" fill sizes="(max-width: 620px) 86vw, 38vw" />
                </figure>
                <div className={styles.shanjiNumbers}>
                  <div>
                    <span>社群日均互动</span>
                    <strong>90 → 185</strong>
                  </div>
                  <div>
                    <span>累计捐赠</span>
                    <strong>679 本</strong>
                  </div>
                  <div>
                    <span>捐赠率</span>
                    <strong>+22%</strong>
                  </div>
                  <div>
                    <span>线下承接</span>
                    <strong>+20%</strong>
                  </div>
                </div>
                <button type="button" className={styles.inlineScrollCue} onClick={() => setActiveResult('shanji')}>
                  展开成果 ↗
                </button>
              </article>
              <article className={`${styles.projectCard} ${styles.researchCard}`}>
                <div className={styles.projectTop}>
                  <span>RESEARCH & PRACTICE</span>
                  <span>2024 - 2025</span>
                </div>
                <h3>研究与实践</h3>
                <p className={styles.projectRole}>营销洞察 / 实践复盘 / 国际交流</p>
                <div className={styles.researchList}>
                  <div>
                    <span>01</span>
                    <strong>营销研究</strong>
                    <p>安踏武汉市场策略与风雨单车竞品分析</p>
                  </div>
                  <div>
                    <span>02</span>
                    <strong>实践报告</strong>
                    <p>800+ 问卷与 30+ 深访支撑市场洞察</p>
                  </div>
                  <div>
                    <span>03</span>
                    <strong>组织实践</strong>
                    <p>SICA · 12 国文化 · 500+ 参与者</p>
                  </div>
                </div>
                <button type="button" className={styles.inlineScrollCue} onClick={() => setActiveResult('research')}>
                  展开成果 ↗
                </button>
              </article>
            </div>
          </section>

          <section className={styles.behindSection} aria-labelledby="behind-title">
            <div className={styles.behindInner}>
              <span className={styles.eyebrow}>BEHIND THIS SITE · AI × CREATIVITY × EXECUTION</span>
              <h2 id="behind-title">Not just my résumé. I built it, too.</h2>
              <div className={styles.behindCopy}>
                <p>这个网站本身，也是我的一次 AI 实践。</p>
                <p>从内容构思、页面结构到视觉细节与交互实现，我尝试借助 AI 完成从想法到网页的 Vibe Coding，并在不断的 Prompt、测试、修改与迭代中，把脑海中的想法真正做出来。</p>
                <p>我一直对 AI 保持强烈的好奇心。相比于单纯“使用工具”，我更喜欢亲自探索它能做什么、还能怎样做得更好——用 AI 提高效率，也用它拓展自己的能力边界。</p>
                <p>我不是传统意义上的开发者，但我愿意学习、尝试、动手、迭代，并把一个想法真正落地。</p>
              </div>
              <div className={styles.buildFlow} aria-label="网站实现流程">
                {['IDEA', 'PROMPT', 'BUILD', 'TEST', 'ITERATE', 'SHIP'].map((step, index) => (
                  <div key={step}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{step}</strong>
                  </div>
                ))}
              </div>
              <p className={styles.behindKeywords}>AI Exploration · Vibe Coding · Rapid Prototyping · Hands-on Execution</p>
              <strong className={styles.ending}>Stay curious. Keep building.</strong>
              <aside className={styles.developerStatus} aria-label="开发者状态">
                <span>● Built with AI</span>
                <span>● Human-directed</span>
                <span>● Continuously iterated</span>
              </aside>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <div>
            <strong>Designed, directed &amp; vibe-coded by 艾柯代 · 2026</strong>
            <span>Human idea. AI-assisted. Continuously iterated.</span>
          </div>
        </footer>

        {activeResult && (
          <ResultModal
            item={modalData[activeResult]}
            image={activeResult === 'shanji' ? '/v1-cn/shanji-result-v8-final-all-covered-20260912.png' : undefined}
            imageAlt={activeResult === 'shanji' ? '善迹数字慈善团队完整成果图' : undefined}
            onClose={() => setActiveResult(null)}
          />
        )}
      </div>
    </>
  );
}
