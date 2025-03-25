"use client";
import React from "react";
import {
    Activity,
    Bell,
    Shield,
    Clock,
    Server,
    ArrowRight,
    Check,
} from "lucide-react";
import Image from "next/image";

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
            {/* Hero Section */}
            <main>
                <section className="container mx-auto px-6 py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-left">
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
                                Monitor Your Services
                                <br />
                                with Confidence
                            </h1>
                            <p className="text-xl text-gray-300 mb-12">
                                Get instant alerts when your services go down.
                                Monitor uptime, response time, and performance
                                metrics in real-time.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-emerald-500 text-white px-8 py-4 rounded-lg hover:bg-emerald-600 transition-colors flex items-center justify-center space-x-2">
                                    <span>Start Monitoring</span>
                                    <ArrowRight className="h-5 w-5" />
                                </button>
                                <button className="border border-gray-500 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                                    View Demo
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-emerald-500/20 rounded-xl blur-xl"></div>
                            <Image
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80"
                                // src="/dashboard/Flux_Dev_A_futuristic_and_sleek_network_monitoring_dashboard_w_2.jpeg"
                                alt="Server monitoring dashboard"
                                width={2000}
                                height={1333}
                                className="relative rounded-xl shadow-2xl w-full"
                            />
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section id="features" className="container mx-auto px-6 py-20">
                    <h2 className="text-3xl font-bold text-white text-center mb-16">
                        Everything you need for reliable monitoring
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Bell className="h-8 w-8 text-emerald-400" />}
                            title="Instant Alerts"
                            description="Get notified immediately when your services experience downtime through multiple channels."
                        />
                        <FeatureCard
                            icon={
                                <Shield className="h-8 w-8 text-emerald-400" />
                            }
                            title="SSL Monitoring"
                            description="Track SSL certificate expiration and get alerts before they expire."
                        />
                        <FeatureCard
                            icon={
                                <Clock className="h-8 w-8 text-emerald-400" />
                            }
                            title="Response Time"
                            description="Monitor response times and get detailed performance metrics."
                        />
                    </div>
                </section>

                {/* Pricing */}
                <section id="pricing" className="container mx-auto px-6 py-20">
                    <h2 className="text-3xl font-bold text-white text-center mb-16">
                        Simple, transparent pricing
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <PricingCard
                            title="Starter"
                            price="29"
                            features={[
                                "10 monitors",
                                "1-minute checks",
                                "Email notifications",
                                "5 team members",
                                "7-day history",
                            ]}
                        />
                        <PricingCard
                            title="Professional"
                            price="79"
                            featured={true}
                            features={[
                                "50 monitors",
                                "30-second checks",
                                "All notifications",
                                "Unlimited team members",
                                "30-day history",
                                "API access",
                            ]}
                        />
                        <PricingCard
                            title="Enterprise"
                            price="199"
                            features={[
                                "Unlimited monitors",
                                "15-second checks",
                                "Priority support",
                                "Custom solutions",
                                "1-year history",
                                "SLA guarantee",
                            ]}
                        />
                    </div>
                </section>

                {/* Status Section */}
                <section className="container mx-auto px-6 py-20">
                    <div className="bg-slate-800 rounded-xl p-8 text-center">
                        <Server className="h-12 w-12 text-emerald-400 mx-auto mb-6" />
                        <h2 className="text-2xl font-bold text-white mb-4">
                            All Systems Operational
                        </h2>
                        <p className="text-gray-300">
                            Check our status page for real-time and historical
                            data on system performance.
                        </p>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="container mx-auto px-6 py-12 border-t border-gray-800">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Activity className="h-6 w-6 text-emerald-400" />
                            <span className="text-xl font-bold text-white">
                                UptimeGuard
                            </span>
                        </div>
                        <p className="text-gray-400">
                            Reliable monitoring for modern applications.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Product
                        </h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Status
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Company
                        </h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Terms
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Security
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function FeatureCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="bg-slate-800 p-6 rounded-xl">
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
}

function PricingCard({
    title,
    price,
    features,
    featured = false,
}: {
    title: string;
    price: string;
    features: string[];
    featured?: boolean;
}) {
    return (
        <div
            className={`rounded-xl p-8 ${featured ? "bg-emerald-500" : "bg-slate-800"}`}
        >
            <h3
                className={`text-xl font-semibold mb-2 ${featured ? "text-white" : "text-white"}`}
            >
                {title}
            </h3>
            <div className="mb-6">
                <span className="text-4xl font-bold text-white">${price}</span>
                <span
                    className={`${featured ? "text-white/80" : "text-gray-400"}`}
                >
                    /month
                </span>
            </div>
            <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                        <Check
                            className={`h-5 w-5 ${featured ? "text-white" : "text-emerald-400"}`}
                        />
                        <span
                            className={`${featured ? "text-white" : "text-gray-300"}`}
                        >
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>
            <button
                className={`w-full py-2 px-4 rounded-lg transition-colors ${
                    featured
                        ? "bg-white text-emerald-500 hover:bg-gray-100"
                        : "bg-emerald-500 text-white hover:bg-emerald-600"
                }`}
            >
                Get Started
            </button>
        </div>
    );
}

export default App;
