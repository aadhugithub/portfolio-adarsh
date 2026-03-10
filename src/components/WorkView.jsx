import { ExternalLink } from 'lucide-react';
import styles from './WorkView.module.css';

const projects = [
    {
        id: 'field-ops',
        name: 'Sentrah Product',
        company: 'Fieldiva',
        link: 'https://www.notion.so/Fieldiva-Field-Operations-Management-Platform-6b6410161472494ba46dcdf457bc8e47?source=copy_link',
        recommended: true,
        summary: 'A unified platform for managing remote logistics and ground teams.',
        contribution: 'Led end-to-end UX design, translating business requirements into scalable workflows and system architecture.'
    },
    {
        id: 'rent-pay',
        name: 'Zuperent',
        company: 'Fieldiva',
        link: 'https://www.notion.so/ZuperRent-Rental-Payment-Management-Platform-b6cb472d00a54c70a145e50a832af8a3?source=copy_link',
        summary: 'A streamlined tool for tenants and landlords to track recurring payments.',
        contribution: 'Designed payment workflows and notification systems based on business rules and recurring transaction models.'
    },
    {
        id: 'product-website',
        name: 'Sentrah',
        company: 'Fieldiva',
        buttonText: 'Live',
        link: 'https://www.sentrah.com',
        summary: 'A high-conversion marketing site for a B2B SaaS startup.',
        contribution: 'Designed the end-to-end website experience, translating product capabilities into clear SaaS messaging and structured information architecture aligned with business goals.'
    },
    {
        id: 'edu-platform',
        name: 'EZ Migrate',
        company: 'Tatos Technologies',
        link: 'https://www.notion.so/EZ-migrate-Application-2de47fc3ab638072a001f63df911e35d?source=copy_link',
        summary: 'A scalable LMS for higher education institutions to manage coursework.',
        contribution: 'Designed structured user journeys and platform workflows aligned with institutional requirements and accessibility needs.'
    }
];

const WorkView = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h2 className={styles.title}>Work</h2>
                <p className={styles.subtitle}>A collection of platforms and products I've designed.</p>
            </header>
            <div className={styles.grid}>
                {projects.map((p) => (
                    <article
                        key={p.id}
                        className={styles.projectCard}
                        onClick={() => window.open(p.link, '_blank', 'noopener,noreferrer')}
                    >
                        <div className={styles.cardHeader}>
                            <div className={styles.titleWrapper}>
                                <h3 className={styles.projectName}>{p.name}</h3>
                                {p.recommended && (
                                    <span className={styles.recommendedBadge}>Recommended</span>
                                )}
                            </div>
                            <button className={styles.notionButton}>
                                {p.buttonText || 'Open notion'} <ExternalLink className={styles.notionIcon} />
                            </button>
                        </div>
                        <p className={styles.projectSummary}>{p.summary}</p>
                        <div className={styles.meta}>
                            <div className={styles.metaItem}>
                                <span className={styles.metaLabel}>Company</span>
                                <span className={styles.metaValue}>{p.company}</span>
                            </div>
                            <div className={styles.metaItem}>
                                <span className={styles.metaLabel}>Contribution</span>
                                <span className={styles.metaValue}>{p.contribution}</span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className={styles.skillsSection}>
                <div className={styles.skillBlock}>
                    <h4>Skills</h4>
                    <ul>
                        <li>Product Design</li>
                        <li>UX Strategy</li>
                        <li>Dashboard UX</li>
                        <li>Workflow Systems</li>
                        <li>Design Systems</li>
                    </ul>
                </div>

                <div className={styles.skillBlock}>
                    <h4>Tools</h4>
                    <ul>
                        <li>Figma</li>
                        <li>XD</li>
                        <li>Illustrator</li>
                        <li>Photoshop</li>
                        <li>Framer</li>
                    </ul>
                </div>

                <div className={styles.skillBlock}>
                    <h4>AI Tools</h4>
                    <ul>
                        <li>Uizard</li>
                        <li>Stitch</li>
                        <li>Midjourney</li>
                        <li>Adobe Firefly</li>
                        <li>VEO</li>
                        <li>Antigravity</li>
                        <li>Cursor IDE</li>
                        <li>ChatGPT (Pro / Enterprise)</li>
                        <li>Claude</li>
                        <li>FigJam AI</li>
                        <li>Figma Make</li>
                    </ul>
                </div>

                <div className={styles.skillBlock}>
                    <h4>Frontend Understanding</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WorkView;
