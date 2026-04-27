import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './WorkView.module.css';

const projects = [
    {
        id: 'field-ops',
        name: 'Sentrah Product',
        company: 'Fieldiva',
        link: '/case-study/field-ops',
        summary: 'A unified platform for managing remote logistics and ground teams.',
        contribution: 'Led end-to-end UX design, translating business requirements into scalable workflows and system architecture.',
        userflow: [
            'https://res.cloudinary.com/dfdz6qydi/image/upload/w_2000,q_auto,f_auto/v1775491638/Sentrah_dashboard_c21nzm.png',
            'https://res.cloudinary.com/dfdz6qydi/image/upload/w_2000,q_auto,f_auto/v1775491640/Client_flow_bqum8g.png'
        ]
    },
    {
        id: 'rent-pay',
        name: 'Zuperent',
        company: 'Fieldiva',
        link: '/case-study/rent-pay',
        summary: 'A rental and property management platform designed to simplify rent payments, subscriptions, and financial visibility.',
        contribution: 'Designed end-to-end dashboard and mobile workflows for payments, subscriptions, and reward systems.'
    },
    {
        id: 'edu-platform',
        name: 'EZ Migrate',
        company: 'Tatos Technologies',
        link: '/case-study/edu-platform',
        summary: 'A cross-platform exam-prep product for students preparing for study abroad and professional licensing exams.',
        contribution: 'Led end-to-end UX design focused on creating realistic exam simulation, structured learning, and scalable architecture.'
    }
];

const WorkView = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('uiux');

    const handleProjectClick = (link) => {
        if (link.startsWith('http')) {
            window.open(link, '_blank', 'noopener,noreferrer');
        } else {
            navigate(link);
            window.scrollTo(0, 0);
        }
    };

    const tabs = [
        { id: 'uiux', label: 'UI UX' },
        { id: 'aiagent', label: 'AI Agent' }
    ];

    return (
        <div id="work-projects" className={styles.container}>
            <header className={styles.header}>
                <h2 className={styles.title}>Work</h2>
                <p className={styles.subtitle}>A collection of platforms and products I've designed.</p>
            </header>

            <nav className={styles.tabsContainer}>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        className={`${styles.tabButton} ${activeTab === tab.id ? styles.tabButtonActive : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </nav>

            <div className={styles.grid}>
                {activeTab === 'uiux' ? (
                    projects.map((p) => (
                        <article
                            key={p.id}
                            className={styles.projectCard}
                            onClick={() => handleProjectClick(p.link)}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.titleWrapper}>
                                    <h3 className={styles.projectName}>{p.name}</h3>
                                    {p.recommended && (
                                        <span className={styles.recommendedBadge}>Recommended</span>
                                    )}
                                </div>
                                <button className={styles.notionButton}>
                                    {p.buttonText || 'View Case Study'} <ExternalLink className={styles.notionIcon} />
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
                    ))
                ) : (
                    <div className={styles.emptyState}>
                        <h3>AI Agents</h3>
                        <p>Something exciting is brewing. Coming soon!</p>
                    </div>
                )}
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
                        <li>Figma Make</li>
                        <li>Midjourney</li>
                        <li>Uizard</li>
                        <li>ChatGPT</li>
                        <li>Claude</li>
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
