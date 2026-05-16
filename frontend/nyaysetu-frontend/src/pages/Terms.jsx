import { Link } from 'react-router-dom';
import { Scale } from 'lucide-react';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';

export default function Terms() {
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
                            Terms of Service
                        </h1>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Last updated: May 2026</p>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                            Acceptance of Terms
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            By accessing and using NyaySetu, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our platform.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                            Use of Services
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            NyaySetu provides a digital platform for legal assistance and case management. You agree to use our services only for lawful purposes and in accordance with these terms.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                            Limitation of Liability
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            NyaySetu is not a law firm and does not provide legal advice. The platform is intended for informational purposes only. Always consult a qualified legal professional for legal advice.
                        </p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                            Changes to Terms
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the new terms.
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