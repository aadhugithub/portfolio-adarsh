import styles from './TabSection.module.css';
import RecruiterView from './RecruiterView';
import WorkView from './WorkView';

const TabSection = () => {
    return (
        <section id="work" className={styles.section}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                <RecruiterView />
                <WorkView />
            </div>
        </section>
    );
};

export default TabSection;
