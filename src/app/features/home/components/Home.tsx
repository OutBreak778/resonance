"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Mic, Headphones, CheckCircle2 } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <Header />
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-400/10 rounded-full border border-border">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-sm font-medium text-foreground">
                AI-Powered Voice Technology
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance">
              Natural Voice Generation at Scale
            </h1>
            <p className="text-xl text-foreground/70 text-pretty leading-relaxed max-w-2xl">
              Transform text into lifelike speech with our cutting-edge AI voice
              synthesis platform. Used by creators, enterprises, and innovators
              worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base"
              >
                Try for Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                Book Demo
              </Button>
            </div>
            <div className="pt-4 flex items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-foreground/70">
                  No credit card required
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-foreground/70">29+ languages</span>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-border flex items-center justify-center">
              <div className="w-48 h-48 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                <Headphones className="w-24 h-24 text-primary/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10  border-y border-border py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance mb-4">
              Why Choose Resonance?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Industry-leading voice quality and performance for every use case
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description:
                  "Generate speech in real-time with minimal latency. Perfect for live applications and interactive experiences.",
              },
              {
                icon: Mic,
                title: "Premium Voices",
                description:
                  "Choose from 500+ professional voice actors in multiple languages and accents. Fully customizable for your brand.",
              },
              {
                icon: Headphones,
                title: "Enterprise Grade",
                description:
                  "Secure, scalable infrastructure with 99.9% uptime. HIPAA and GDPR compliant with dedicated support.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group p-8 bg-background border border-border rounded-2xl hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance mb-4">
            Built for Every Industry
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            From content creators to Fortune 500 companies, thousands rely on
            Resonance
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "🎬",
              title: "Content Creation",
              desc: "YouTube, Podcasts, Gaming",
            },
            { icon: "📚", title: "Publishing", desc: "Audiobooks, E-learning" },
            { icon: "🏢", title: "Enterprise", desc: "IVR, Customer Support" },
            { icon: "🎮", title: "Gaming", desc: "Character Voices, Dialogue" },
          ].map((useCase, idx) => (
            <div
              key={idx}
              className="p-6 bg-muted rounded-xl border border-border hover:border-primary/50 transition-all"
            >
              <div className="text-4xl mb-3">{useCase.icon}</div>
              <h3 className="font-bold text-foreground mb-1">
                {useCase.title}
              </h3>
              <p className="text-sm text-foreground/70">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-y border-border py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            Ready to Transform Text to Speech?
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Join thousands of creators and businesses using Resonance to deliver
            exceptional voice experiences. Start free today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8">
              View Pricing
            </Button>
          </div>
          <p className="text-sm text-foreground/60 pt-4">
            ✓ Free tier includes 10,000 characters/month • No credit card
            required
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
