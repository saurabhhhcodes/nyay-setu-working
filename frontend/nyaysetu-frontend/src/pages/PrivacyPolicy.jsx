import { Link } from 'react-router-dom';
import { Scale } from 'lucide-react';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';

export default function PrivacyPolicy() {
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
                            Privacy Policy
                        </h1>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Last updated: May 2026</p>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                            Information We Collect
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            We collect information you provide directly to us, such as your name, email address, and case details when you register or use our services.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                            How We Use Your Information
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                            Data Security
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                        </p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                            Contact Us
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            If you have any questions about this Privacy Policy, please contact us at:{' '}
                            <a href="mailto:gadekarvidera4@gmail.com" style={{ color: 'var(--color-secondary)', fontWeight: '600' }}>
                                gadekarvidera4@gmail.com
                            </a>
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