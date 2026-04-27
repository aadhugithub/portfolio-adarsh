import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './CaseStudy.module.css';

const caseStudies = {
    'field-ops': {
        header: {
            projectName: 'Sentrah',
            role: 'Lead Product Designer',
            platform: 'Web & Mobile',
            year: '2023 - 2024',
            tag: 'Product',
            liveUrl: 'https://sentrah.com' // Replace with actual link
        },
        layerImages: [
            [
                'https://res.cloudinary.com/dfdz6qydi/image/upload/w_2000,q_auto,f_auto/v1775491640/Client_flow_bqum8g.png'
            ],
            [
                'https://res.cloudinary.com/dfdz6qydi/image/upload/w_2000,q_auto,f_auto/v1777301706/Free_iPhone_16_Mockup_1_b0onej.png',
                'https://res.cloudinary.com/dfdz6qydi/image/upload/w_2000,q_auto,f_auto/v1777301888/Image0005_1_1_k2bzqg.jpg'
            ]
        ],
        sections: [
            {
                id: 'overview',
                title: 'Overview',
                content: <p>Fieldiva is a field operations platform for organizations managing distributed teams. I led end-to-end product design across scheduling, task execution, analytics, and workforce engagement.</p>,
            },
            {
                id: 'problem',
                title: 'The Problem',
                content: (
                    <ul>
                        <li>Teams coordinated daily operations through spreadsheets and phone calls</li>
                        <li>Supervisors had no real-time visibility into tasks or team performance</li>
                        <li>Field agents had no unified interface — every workflow felt disconnected</li>
                    </ul>
                ),
            },
            {
                id: 'users',
                title: 'Users',
                content: (
                    <ul>
                        <li><strong>Operations Managers</strong> — Need task overview, live performance data, fast decisions</li>
                        <li><strong>Field Agents</strong> — Need speed, clarity, and minimal steps to complete work</li>
                        <li><strong>Administrators</strong> — Need system-level configuration and structured reporting</li>
                    </ul>
                ),
            },
            {
                id: 'approach',
                title: 'My Approach',
                content: (
                    <ul>
                        <li><strong>Clarity</strong> — Surface important signals first, eliminate noise</li>
                        <li><strong>Actionability</strong> — Let supervisors respond to insights without switching screens</li>
                        <li><strong>Speed</strong> — Every interaction optimized for real-world, dynamic environments</li>
                    </ul>
                ),
            },
            {
                id: 'built',
                title: 'What I Built',
                content: (
                    <ul>
                        <li>Smart task scheduling and custom field workflows</li>
                        <li>Live tracking and attendance compliance system</li>
                        <li>Stock and inventory control module</li>
                        <li>Advanced analytics and business intelligence dashboard</li>
                        <li>Gamified performance system with leaderboards and recognition</li>
                        <li>Instant gratification and behavioural nudge engine</li>
                    </ul>
                ),
            },
            {
                id: 'impact',
                title: 'Impact',
                content: (
                    <ul>
                        <li>Supervisors can monitor, assign, and respond from a single screen</li>
                        <li>Field agents get faster, clearer task updates with less friction</li>
                        <li>Organizations replaced fragmented tools with one unified command center</li>
                        <li>Teams gained real-time visibility into performance and operational health</li>
                    </ul>
                ),
            }
        ]
    },
    'rent-pay': {
        header: {
            projectName: 'Zuperent',
            role: 'UI Designer',
            platform: 'Web, App',
            year: '2023'
        },
        customLayers: [
            { label: 'HI-FI', id: 'hi-fi' }
        ],
        layerImages: [
            [
                'https://res.cloudinary.com/dfdz6qydi/image/upload/w_2000,q_auto,f_auto/v1777307865/mockrocket-capture_o2t6pf.png'
            ]
        ],
        sections: [
            {
                id: 'overview',
                title: 'Overview',
                content: (
                    <>
                        <p>A rental and property management platform for owners, managers, and tenants.</p>
                        <p>Designed to simplify rent payments, subscriptions, and financial visibility in one system.</p>
                    </>
                ),
            },
            {
                id: 'problem',
                title: 'The Problem',
                content: (
                    <ul>
                        <li>Confusing payment flows</li>
                        <li>Missed or delayed payments due to poor reminders</li>
                        <li>Low transparency in rent status and charges</li>
                        <li>Fragmented systems across payments, rewards, reporting</li>
                        <li>Reduced user trust from unclear financial data</li>
                    </ul>
                ),
            },
            {
                id: 'users',
                title: 'Users',
                content: (
                    <ul>
                        <li><strong>Property Managers</strong> — Need oversight, tracking, and control</li>
                        <li><strong>Owners</strong> — Need clear financial visibility</li>
                        <li><strong>Tenants</strong> — Need simple payments and transparency</li>
                    </ul>
                ),
            },
            {
                id: 'role',
                title: 'My Role',
                content: (
                    <ul>
                        <li>Defined user flows and IA</li>
                        <li>Designed dashboard + mobile UX</li>
                        <li>Built payments, subscriptions, rewards experiences</li>
                        <li>Collaborated with product + engineering</li>
                    </ul>
                ),
            },
            {
                id: 'approach',
                title: 'My Approach',
                content: (
                    <ul>
                        <li><strong>Clarity</strong> — Make payments and status instantly understandable</li>
                        <li><strong>Trust</strong> — Surface all financial data transparently</li>
                        <li><strong>Speed</strong> — Reduce steps for frequent actions</li>
                        <li><strong>Consistency</strong> — Unify web and mobile experience</li>
                    </ul>
                ),
            },
            {
                id: 'built',
                title: 'What I Built',
                content: (
                    <ul>
                        <li>Simplified rent payment flows with clear breakdowns</li>
                        <li>Recurring subscription system with status visibility</li>
                        <li>Rewards & coupon engine for engagement</li>
                        <li>Financial dashboards for quick insights</li>
                        <li>Mobile-first flows optimized for fast actions</li>
                    </ul>
                ),
            },
            {
                id: 'impact',
                title: 'Impact',
                content: (
                    <ul>
                        <li>Reduced payment friction</li>
                        <li>Improved trust through transparency</li>
                        <li>Increased engagement with rewards</li>
                        <li>Faster understanding of financial status</li>
                    </ul>
                ),
            }
        ]
    },
    'edu-platform': {
        header: {
            projectName: 'EZ Migrate',
            role: 'UI UX Designer',
            platform: 'Web and App',
            year: '2022',
            tag: 'Ed Tech'
        },
        customLayers: [
            { label: 'COMPONENTS', id: 'components' },
            { label: 'HI-FI', id: 'hi-fi' }
        ],
        layerImages: [
            [
                'https://res.cloudinary.com/dfdz6qydi/image/upload/w_2000,q_auto,f_auto/v1777306545/Section_2_qmtyxr.png'
            ],
            [
                'https://res.cloudinary.com/dfdz6qydi/image/upload/w_2000,q_auto,f_auto/v1777306024/Rectangle_ilokzb.png',
                'https://res.cloudinary.com/dfdz6qydi/image/upload/w_2000,q_auto,f_auto/v1777306023/Rectanglerr_athddk.png'
            ]
        ],
        sections: [
            {
                id: 'overview',
                title: 'Overview',
                content: (
                    <>
                        <p>A cross-platform exam-prep product for students preparing for study abroad and professional licensing exams.</p>
                        <p>Led end-to-end UX design focused on creating realistic exam simulation, structured learning, and scalable architecture.</p>
                    </>
                ),
            },
            {
                id: 'problem',
                title: 'The Problem',
                content: (
                    <ul>
                        <li>Multiple exam formats with different rules, timing, and structures</li>
                        <li>Mock tests lacked real exam realism</li>
                        <li>No clear signal of readiness or next step</li>
                        <li>Content overload with no structured learning path</li>
                    </ul>
                ),
            },
            {
                id: 'users',
                title: 'Users',
                content: (
                    <ul>
                        <li><strong>Students (Study Abroad)</strong> — Need structured prep, clarity, and confidence</li>
                        <li><strong>Professionals (Licensing Exams)</strong> — Need realistic practice and performance feedback</li>
                        <li><strong>Repeat Test Takers</strong> — Need targeted improvement and readiness validation</li>
                    </ul>
                ),
            },
            {
                id: 'approach',
                title: 'My Approach',
                content: (
                    <ul>
                        <li><strong>Structure</strong> — Convert scattered content into guided learning paths</li>
                        <li><strong>Realism</strong> — Replicate actual exam environments and constraints</li>
                        <li><strong>Clarity</strong> — Always show users what to do next</li>
                        <li><strong>Scalability</strong> — Design once, adapt across multiple exam systems</li>
                    </ul>
                ),
            },
            {
                id: 'built',
                title: 'What I Built',
                content: (
                    <ul>
                        <li>Program-based learning and course system</li>
                        <li>Daily assessment layer for habit-building</li>
                        <li>Full mock test & exam engine (timers, sections, navigation rules)</li>
                        <li>Progress tracking + time-left indicators</li>
                        <li>Structured results and feedback experience</li>
                        <li>Scalable question paper module powering all exams</li>
                    </ul>
                ),
            },
            {
                id: 'impact',
                title: 'Impact',
                content: (
                    <ul>
                        <li><strong>Clarity</strong> — Users understand their path and next action instantly</li>
                        <li><strong>Consistency</strong> — Unified experience across all exam types</li>
                        <li><strong>Confidence</strong> — Real exam simulation reduces anxiety</li>
                        <li><strong>Scalability</strong> — New programs added without redesign</li>
                    </ul>
                ),
            },
            {
                id: 'ia',
                title: 'Information Architecture',
                content: (
                    <ul>
                        <li><strong>Onboarding</strong> → Your Abroad Journey Starts</li>
                        <li><strong>Home</strong> → Today’s Plan</li>
                        <li><strong>Daily</strong> → Daily Assessment</li>
                        <li><strong>Courses</strong> → Learn</li>
                        <li><strong>Mock Tests</strong> → Practice</li>
                        <li><strong>Exam Mode</strong> → Exam</li>
                        <li><strong>Blog</strong> → Guides</li>
                        <li><strong>Profile</strong> → My Journey</li>
                    </ul>
                ),
            },
            {
                id: 'direction',
                title: 'Design Direction',
                content: (
                    <ul>
                        <li><strong>Tone:</strong> Calm, academic, trustworthy</li>
                        <li><strong>Visuals:</strong> Clean layouts with minimal cognitive load</li>
                        <li><strong>Motif:</strong> Progress and journey (paths, steppers, progress bars)</li>
                        <li><strong>Colors:</strong> Deep navy, white, accent orange</li>
                    </ul>
                ),
            },
            {
                id: 'insight',
                title: 'Key Insight',
                content: <p><em>Exam prep is not just content delivery — it’s confidence built through simulation, structure, and feedback.</em></p>,
            }
        ]
    }
};

const LAYERS = [
    { label: 'USERFLOW', id: 'userflow' },
    { label: 'HI-FI', id: 'hi-fi' }
];

const SectionData = ({ section }) => {
    return (
        <div className={styles.sectionBlock} id={`sec-${section.id}`}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <div className={styles.sectionContent}>
                {section.content}
            </div>
        </div>
    );
};

const ProtectedImage = ({ src, alt, onClick, isOverlay = false, isTab = false }) => {
    const [broken, setBroken] = useState(false);

    if (broken) {
        return (
            <div
                className={styles.protectedImageContainer}
                onClick={onClick}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
                    borderRadius: '8px',
                    border: '1px dashed #444',
                    minHeight: isOverlay ? '60vh' : '200px',
                    flexDirection: 'column',
                    gap: '8px',
                    color: '#666',
                    fontSize: '13px',
                    fontFamily: 'inherit',
                    userSelect: 'none',
                }}
            >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                </svg>
                <span style={{ color: '#555' }}>{alt}</span>
                <span style={{ color: '#444', fontSize: '11px' }}>Coming soon</span>
            </div>
        );
    }

    return (
        <div
            className={styles.protectedImageContainer}
            onClick={onClick}
            onDragStart={(e) => e.preventDefault()}
        >
            <img
                src={src}
                alt={alt}
                className={isOverlay ? styles.fullscreenImg : (isTab ? styles.tabImage : styles.layerImg)}
                onContextMenu={(e) => e.preventDefault()}
                onError={() => setBroken(true)}
                onDragStart={(e) => e.preventDefault()}
                draggable={false}
            />
            <div className={styles.watermark}>Adarsh N — Portfolio</div>
            {/* Anti-camera flicker layer — invisible to human eye, disrupts photo capture */}
            <div className={styles.antiCamLayer} aria-hidden="true" />
            <div className={styles.clickOverlay} onContextMenu={(e) => e.preventDefault()} />
        </div>
    );
};

export default function CaseStudy() {
    const { id } = useParams();
    const data = caseStudies[id];
    const layers = data?.customLayers || LAYERS;
    const [activeTab, setActiveTab] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [fullscreenLayer, setFullscreenLayer] = useState(null);
    const touchStartY = useRef(0);

    const scrollLeft = (e) => {
        const wrapper = e.target.closest(`.${styles.multiImageStripWrapper}`);
        if (wrapper) {
            const strip = wrapper.querySelector(`.${styles.multiImageStrip}`);
            if (strip) strip.scrollBy({ left: -strip.clientWidth, behavior: 'smooth' });
        }
    };

    const scrollRight = (e) => {
        const wrapper = e.target.closest(`.${styles.multiImageStripWrapper}`);
        if (wrapper) {
            const strip = wrapper.querySelector(`.${styles.multiImageStrip}`);
            if (strip) strip.scrollBy({ left: strip.clientWidth, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Block all common save/screenshot keyboard shortcuts
    useEffect(() => {
        const blockShortcuts = (e) => {
            const key = e.key;
            const ctrl = e.ctrlKey || e.metaKey;
            // Block: Ctrl+S, Ctrl+P, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, F12, PrintScreen
            if (
                (ctrl && ['s', 'S', 'p', 'P', 'u', 'U'].includes(key)) ||
                (ctrl && e.shiftKey && ['i', 'I', 'j', 'J', 'c', 'C'].includes(key)) ||
                key === 'F12' ||
                key === 'PrintScreen' ||
                key === 'Meta'
            ) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        };
        // Disable right-click globally on this page
        const blockContext = (e) => e.preventDefault();
        // Disable text/image selection
        const blockSelect = (e) => e.preventDefault();

        document.addEventListener('keydown', blockShortcuts, true);
        document.addEventListener('contextmenu', blockContext, true);
        document.addEventListener('selectstart', blockSelect, true);
        document.addEventListener('dragstart', blockSelect, true);

        return () => {
            document.removeEventListener('keydown', blockShortcuts, true);
            document.removeEventListener('contextmenu', blockContext, true);
            document.removeEventListener('selectstart', blockSelect, true);
            document.removeEventListener('dragstart', blockSelect, true);
        };
    }, []);

    // No image measuring needed for simple tabs

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setFullscreenLayer(null);
        };
        if (fullscreenLayer !== null) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
                document.body.style.overflow = '';
            };
        }
    }, [fullscreenLayer]);

    if (!data) return <div className={styles.container}>Case Study Not Found</div>;

    const layerImages = data.layerImages || [null, null, null];

    return (
        <div className={styles.pageWrapper}>
            <nav className={styles.navBar}>
                <Link to="/" className={styles.backLink}>← Back to Home</Link>
            </nav>

            <div className={styles.header}>
                <div className={styles.headerTop}>
                    <h1 className={styles.projectTitle}>{data.header.projectName}</h1>
                    {data.header.liveUrl && (
                        <a href={data.header.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.liveCta}>
                            Live <span className={styles.ctaArrow}>↗</span>
                        </a>
                    )}
                </div>
                <div className={styles.metaRow}>
                    <span><strong>Role:</strong> {data.header.role}</span>
                    <span><strong>Platform:</strong> {data.header.platform}</span>
                    {data.header.tag && <span className={styles.productTag}>{data.header.tag}</span>}
                </div>
            </div>

            {isMobile && (
                <div className={styles.mobileLayerStripWrapper}>
                    <div className={styles.tabsContainer}>
                        <div className={styles.tabsHeader}>
                            {layers.map((layer, index) => (
                                <button
                                    key={layer.id}
                                    className={`${styles.tabButton} ${activeTab === index ? styles.tabButtonActive : ''}`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {layer.label}
                                </button>
                            ))}
                        </div>
                        <div className={styles.tabContent}>
                            {Array.isArray(layerImages[activeTab]) ? (
                                <div className={styles.multiImageStrip}>
                                    {layerImages[activeTab].map((src, i) => (
                                        <ProtectedImage key={i} src={src} alt={`${layers[activeTab].label} ${i + 1}`} onClick={() => setFullscreenLayer(activeTab)} isTab={true} />
                                    ))}
                                </div>
                            ) : layerImages[activeTab] ? (
                                <ProtectedImage src={layerImages[activeTab]} alt={layers[activeTab].label} onClick={() => setFullscreenLayer(activeTab)} isTab={true} />
                            ) : (
                                <div className={styles.placeholderInner}>
                                    <span className={styles.layerPlaceholderLabel}>{layers[activeTab].label}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <div className={styles.layoutContainer}>
                <div className={styles.leftColumn}>
                    {data.sections.map(sec => (
                        <SectionData key={sec.id} section={sec} />
                    ))}
                </div>

                {!isMobile && (
                    <div className={styles.rightColumn}>
                        <div className={styles.stickyPanel}>
                            <div className={styles.tabsContainer}>
                                <div className={styles.tabsHeader}>
                                    {layers.map((layer, index) => (
                                        <button
                                            key={layer.id}
                                            className={`${styles.tabButton} ${activeTab === index ? styles.tabButtonActive : ''}`}
                                            onClick={() => setActiveTab(index)}
                                        >
                                            {layer.label}
                                        </button>
                                    ))}
                                </div>
                                <div className={styles.tabContent}>
                                    {Array.isArray(layerImages[activeTab]) ? (
                                        <div className={styles.multiImageStripWrapper}>
                                            <div className={styles.multiImageStrip}>
                                                {layerImages[activeTab].map((src, i) => (
                                                    <ProtectedImage key={i} src={src} alt={`${LAYERS[activeTab].label} ${i + 1}`} onClick={() => setFullscreenLayer(activeTab)} isTab={true} />
                                                ))}
                                            </div>
                                            {layerImages[activeTab].length > 1 && (
                                                <div className={styles.stripControls}>
                                                    <div className={styles.stripArrowLeft} onClick={scrollLeft}>←</div>
                                                    <div className={styles.stripArrowRight} onClick={scrollRight}>→</div>
                                                </div>
                                            )}
                                        </div>
                                    ) : layerImages[activeTab] ? (
                                        <ProtectedImage src={layerImages[activeTab]} alt={LAYERS[activeTab].label} onClick={() => setFullscreenLayer(activeTab)} isTab={true} />
                                    ) : (
                                        <div className={styles.placeholderInner}>
                                            <span className={styles.layerPlaceholderLabel}>{LAYERS[activeTab].label}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {fullscreenLayer !== null && (
                <div 
                    className={styles.fullscreenOverlay} 
                    onClick={() => setFullscreenLayer(null)}
                    onTouchStart={(e) => { touchStartY.current = e.touches[0].clientY; }}
                    onTouchEnd={(e) => {
                        if (e.changedTouches[0].clientY - touchStartY.current > 50) setFullscreenLayer(null);
                    }}
                >
                    <button className={styles.closeBtn} onClick={() => setFullscreenLayer(null)}>×</button>
                    <div className={styles.overlayLabel}>{LAYERS[fullscreenLayer].label}</div>
                    
                    <button 
                        className={styles.navBtnPrev} 
                        onClick={(e) => { e.stopPropagation(); setFullscreenLayer(prev => (prev - 1 + LAYERS.length) % LAYERS.length); }}
                    >
                        ‹
                    </button>
                    
                    <div className={styles.overlayContent} onClick={(e) => e.stopPropagation()}>
                        {Array.isArray(layerImages[fullscreenLayer]) ? (
                            <div className={styles.overlayMultiStrip}>
                                {layerImages[fullscreenLayer].map((src, i) => (
                                    <ProtectedImage key={i} src={src} alt={`${layers[fullscreenLayer].label} ${i + 1}`} isOverlay={true} />
                                ))}
                            </div>
                        ) : layerImages[fullscreenLayer] ? (
                            <ProtectedImage src={layerImages[fullscreenLayer]} alt={layers[fullscreenLayer].label} isOverlay={true} />
                        ) : (
                            <div className={styles.placeholderInner} style={{ backgroundColor: '#1a1a1a', borderRadius: '12px', border: '1px dashed #666' }}>
                                <span className={styles.layerPlaceholderLabel}>{layers[fullscreenLayer].label}</span>
                            </div>
                        )}
                    </div>
                    
                    <button 
                        className={styles.navBtnNext} 
                        onClick={(e) => { e.stopPropagation(); setFullscreenLayer(prev => (prev + 1) % LAYERS.length); }}
                    >
                        ›
                    </button>
                </div>
            )}
        </div>
    );
}
