import { Link } from 'react-router-dom';
import { Scale } from 'lucide-react';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';

export default function Disclaimer() {
    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-main)' }}>
            <Header />
            <section style={{
                padding: '10rem 2rem 6rem',
                background: '#FFFFFF',
                borderBottom: '1px solid #E5E7EB'
            }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                        <Scale size={32} style={{ color: 'var(--color-primary)' }} />
                        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-primary)' }}>
                            Disclaimer
                        </h1>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Last updated: May 2026</p>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                            Not Legal Advice
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            The information provided on NyaySetu is for general informational purposes only and does not constitute legal advice. Always seek the advice of a qualified lawyer for any legal matters.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                            AI-Generated Content
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            NyaySetu uses AI to assist with legal information. While we strive for accuracy, AI-generated content may not always be complete or up to date. Do not rely solely on AI responses for legal decisions.
                        </p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                            Accuracy of Information
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            We make no warranties about the completeness, reliability, or accuracy of information on this platform. Any action you take based on the information here is strictly at your own risk.
                        </p>
                    </section>

                    <Link to="/" style={{ color: 'var(--color-secondary)', textDecoration: 'none', fontWeight: '600' }}>
                        ← Back to Home
                    </Link>
                </div>
            </section>
            <Footer />
        </div>
    );
}