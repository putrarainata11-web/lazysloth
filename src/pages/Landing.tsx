import { Link } from 'react-router-dom';
import { 
  Zap, Star, ArrowRight, FileImage, Users, QrCode, Download, Sparkles,
  Copy, AlertTriangle, Shield, Upload, Database, Share2, GraduationCap, 
  Briefcase, BadgeCheck, CreditCard, Trophy, Check, Play, Palette, MousePointer
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LazySlothLogo } from '@/components/LazySlothLogo';
import { InteractivePlayground } from '@/components/landing/InteractivePlayground';
import { CustomerReviews } from '@/components/landing/CustomerReviews';
import { AnimateOnScroll, FloatingDecoration } from '@/components/landing/ScrollAnimations';

const painPoints = [
  { icon: Copy, text: 'Copy-pasting names is slow', rotation: '-1deg' },
  { icon: AlertTriangle, text: 'Inconsistent layouts', rotation: '1deg' },
  { icon: Shield, text: 'No verification → fake certificates', rotation: '-0.5deg' },
  { icon: FileImage, text: "Design tools aren't built for bulk work", rotation: '0.5deg' },
];

const features = [
  { icon: Palette, text: 'Design from scratch or upload', color: 'bg-quirky-pink' },
  { icon: Upload, text: 'Import your own templates', color: 'bg-quirky-teal' },
  { icon: Database, text: 'Bulk generate from CSV', color: 'bg-quirky-purple' },
  { icon: QrCode, text: 'Auto QR verification', color: 'bg-primary' },
  { icon: Download, text: 'Export as PDF or PNG', color: 'bg-quirky-blue' },
];

const useCases = [
  { icon: GraduationCap, title: 'Certificates', color: 'bg-primary', rotate: '-2deg' },
  { icon: Briefcase, title: 'Business Cards', color: 'bg-quirky-blue', rotate: '1deg' },
  { icon: BadgeCheck, title: 'Event Badges', color: 'bg-quirky-teal', rotate: '-1deg' },
  { icon: CreditCard, title: 'Membership Cards', color: 'bg-quirky-purple', rotate: '2deg' },
  { icon: Trophy, title: 'Awards', color: 'bg-quirky-pink', rotate: '-1.5deg' },
];

const steps = [
  { number: '1', title: 'Design or Upload', description: 'Create from scratch or upload your template', icon: Palette },
  { number: '2', title: 'Add Your Data', description: 'Paste names or import CSV', icon: Upload },
  { number: '3', title: 'Generate & Share', description: 'Download all with QR verification', icon: Download },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Header */}
      <header className="border-b-2 border-foreground bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <LazySlothLogo size="sm" />
            <div className="flex items-center gap-3">
              <Link to="/dashboard">
                <Button variant="ghost" size="sm">Dashboard</Button>
              </Link>
              <Link to="/dashboard/templates/new">
                <Button size="sm" className="gap-2 shadow-quirky-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                  <Sparkles className="w-4 h-4" />
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Quirky Layout */}
      <section className="py-16 md:py-24 px-4 relative">
        {/* Floating decorations */}
        <FloatingDecoration emoji="🦥" className="top-20 left-[5%] rotate-12" />
        <FloatingDecoration emoji="✨" className="top-40 right-[10%] -rotate-6" />
        <FloatingDecoration emoji="💤" className="bottom-20 left-[15%] rotate-6" />
        <FloatingDecoration emoji="🎨" className="bottom-10 right-[5%] -rotate-12" />

        <div className="container mx-auto max-w-5xl relative">
          <AnimateOnScroll animation="fade-up">
            <div className="inline-flex items-center gap-2 bg-primary px-5 py-2.5 rounded-full border-2 border-foreground font-bold text-sm mb-8 shadow-quirky-sm transform rotate-[-1deg]">
              <Zap className="w-4 h-4" />
              Work smarter, not harder 🦥
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={100}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Generate <span className="relative inline-block">
                <span className="relative z-10">thousands</span>
                <span className="absolute inset-x-0 bottom-2 h-4 bg-primary/40 -rotate-1 z-0" />
              </span> of personalized assets
              <br className="hidden md:block" />
              <span className="text-muted-foreground">— in minutes.</span>
            </h2>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
              Certificates, badges, cards, and more. Upload a template or design from scratch. 
              Add your data. We handle the rest — with QR verification built in.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/dashboard/templates/new">
                <Button size="lg" className="gap-2 text-base w-full sm:w-auto shadow-quirky hover:shadow-quirky-sm hover:translate-x-1 hover:translate-y-1 transition-all">
                  Start Generating Free
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-base w-full sm:w-auto gap-2 shadow-quirky-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={400}>
            <div className="flex flex-wrap items-center gap-6 mt-10 text-sm">
              <span className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border-2 border-foreground shadow-quirky-sm">
                <Check className="w-4 h-4 text-quirky-teal" />
                No account needed
              </span>
              <span className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border-2 border-foreground shadow-quirky-sm">
                <Check className="w-4 h-4 text-quirky-teal" />
                100% browser-based
              </span>
              <span className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border-2 border-foreground shadow-quirky-sm">
                <Check className="w-4 h-4 text-quirky-teal" />
                Works offline
              </span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Interactive Playground */}
      <InteractivePlayground />

      {/* Problem Section - Scattered Layout */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <AnimateOnScroll animation="scale">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Manual design <span className="line-through text-muted-foreground">doesn't</span> can't scale.
              </h3>
              <p className="text-muted-foreground">Sound familiar?</p>
            </div>
          </AnimateOnScroll>

          {/* Scattered cards - not grid */}
          <div className="relative min-h-[400px] md:min-h-[300px]">
            {painPoints.map((point, i) => (
              <AnimateOnScroll
                key={point.text}
                animation={i % 2 === 0 ? 'fade-left' : 'fade-right'}
                delay={i * 100}
                className={`absolute ${
                  i === 0 ? 'left-0 top-0' :
                  i === 1 ? 'right-0 top-16 md:top-0' :
                  i === 2 ? 'left-4 top-48 md:top-40' :
                  'right-4 top-72 md:top-44'
                } w-[calc(100%-2rem)] md:w-auto md:max-w-[48%]`}
              >
                <div
                  className="flex items-center gap-4 bg-card border-2 border-foreground rounded-xl p-4 shadow-quirky"
                  style={{ transform: `rotate(${point.rotation})` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center flex-shrink-0 border-2 border-destructive/30">
                    <point.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="font-medium">{point.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section - Asymmetric */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-quirky-teal/5 relative">
        <FloatingDecoration emoji="🚀" className="top-10 right-[10%]" />
        
        <div className="container mx-auto max-w-5xl">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                One platform. <span className="text-primary">Infinite</span> possibilities.
              </h3>
            </div>
          </AnimateOnScroll>

          <div className="flex flex-wrap justify-center gap-4">
            {features.map((feature, i) => (
              <AnimateOnScroll key={feature.text} animation="scale" delay={i * 80}>
                <div
                  className="flex items-center gap-3 bg-card border-2 border-foreground rounded-xl px-5 py-3 shadow-quirky-sm hover:shadow-quirky hover:-translate-y-1 transition-all cursor-default"
                  style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (i * 0.5)}deg)` }}
                >
                  <div className={`w-9 h-9 rounded-lg ${feature.color} flex items-center justify-center flex-shrink-0 border-2 border-foreground`}>
                    <feature.icon className="w-4 h-4" />
                  </div>
                  <p className="font-semibold text-sm">{feature.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases - Playful Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Works for everything you need</h3>
            </div>
          </AnimateOnScroll>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {useCases.map((useCase, i) => (
              <AnimateOnScroll key={useCase.title} animation="rotate" delay={i * 60}>
                <div
                  className="bg-card border-2 border-foreground rounded-2xl p-5 md:p-6 shadow-quirky hover:shadow-quirky-lg transition-all hover:-translate-y-1 cursor-default"
                  style={{ transform: `rotate(${useCase.rotate})` }}
                >
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl ${useCase.color} flex items-center justify-center border-2 border-foreground mx-auto mb-3`}>
                    <useCase.icon className="w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  <h4 className="font-bold text-center">{useCase.title}</h4>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Creative Steps */}
      <section className="py-20 px-4 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-2 border-foreground rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-foreground rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-foreground rounded-full" />
        </div>

        <div className="container mx-auto max-w-4xl relative">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Three steps to <span className="text-primary">lazy</span> perfection
              </h3>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <AnimateOnScroll key={step.title} animation="fade-up" delay={index * 150}>
                <div className="relative">
                  <div className="bg-card border-2 border-foreground rounded-2xl p-6 shadow-quirky text-center hover:shadow-quirky-lg transition-all">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center border-2 border-foreground mx-auto mb-4 shadow-quirky-sm">
                      <step.icon className="w-8 h-8" />
                    </div>
                    <div className="text-6xl font-bold text-muted/20 absolute top-4 right-4">
                      {step.number}
                    </div>
                    <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <div className="w-6 h-6 rounded-full bg-primary border-2 border-foreground flex items-center justify-center">
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <CustomerReviews />

      {/* Pricing Teaser */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <AnimateOnScroll animation="scale">
            <div className="bg-card border-2 border-foreground rounded-3xl p-8 md:p-12 shadow-quirky-lg text-center relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-quirky-teal/20 rounded-full blur-2xl" />
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4 relative">
                Simple pricing that <span className="text-primary">grows with you</span>
              </h3>
              
              <p className="text-muted-foreground mb-8 relative">
                Start free. Upgrade when you need more.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
                <div className="bg-muted/50 border-2 border-foreground rounded-xl p-6 flex-1 max-w-xs mx-auto sm:mx-0">
                  <div className="text-3xl mb-2">🆓</div>
                  <h4 className="font-bold text-lg mb-1">Free Forever</h4>
                  <p className="text-sm text-muted-foreground">Basic generation features</p>
                </div>
                <div className="bg-primary/10 border-2 border-foreground rounded-xl p-6 flex-1 max-w-xs mx-auto sm:mx-0 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary px-3 py-1 rounded-full text-xs font-bold border-2 border-foreground">
                    Popular
                  </div>
                  <div className="text-3xl mb-2">🚀</div>
                  <h4 className="font-bold text-lg mb-1">Pay As You Go</h4>
                  <p className="text-sm text-muted-foreground">Unlimited + advanced features</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/20 via-quirky-teal/10 to-quirky-purple/20 relative">
        <FloatingDecoration emoji="🎉" className="top-10 left-[10%]" />
        <FloatingDecoration emoji="🦥" className="bottom-10 right-[10%]" />

        <div className="container mx-auto max-w-3xl text-center relative">
          <AnimateOnScroll animation="scale">
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              Stop designing one by one.
              <br />
              <span className="text-primary">Start generating at scale.</span>
            </h3>
            
            <p className="text-muted-foreground mb-8 text-lg">
              Join thousands of lazy (smart) creators who automated the boring stuff.
            </p>
            
            <Link to="/dashboard/templates/new">
              <Button size="lg" className="gap-2 text-lg px-8 py-6 shadow-quirky hover:shadow-quirky-sm hover:translate-x-1 hover:translate-y-1 transition-all">
                <Sparkles className="w-5 h-5" />
                Start Generating Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-foreground bg-card py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <LazySlothLogo size="sm" />
          <p className="text-sm text-muted-foreground">
            Built with 🦥 for lazy geniuses everywhere
          </p>
        </div>
      </footer>
    </div>
  );
}
