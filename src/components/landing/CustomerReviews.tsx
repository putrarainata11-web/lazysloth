import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Chen',
    role: 'Event Coordinator',
    company: 'TechConf Global',
    avatar: '👩‍💼',
    rating: 5,
    text: "We generated 2,000+ event badges in under 10 minutes. The QR verification saved us from fake badge issues completely!",
    color: 'bg-quirky-pink',
  },
  {
    name: 'Marcus Johnson',
    role: 'HR Director',
    company: 'ScaleUp Inc.',
    avatar: '👨‍💻',
    rating: 5,
    text: "Used to spend 2 days on employee certificates. Now it takes 20 minutes. The ROI is insane.",
    color: 'bg-quirky-teal',
  },
  {
    name: 'Dr. Emily Roberts',
    role: 'Dean of Studies',
    company: 'Westfield Academy',
    avatar: '👩‍🏫',
    rating: 5,
    text: "Perfect for graduation season. Clean templates, bulk generation, and parents love the verification feature.",
    color: 'bg-quirky-purple',
  },
  {
    name: 'Alex Kim',
    role: 'Founder',
    company: 'DesignPro Studio',
    avatar: '🎨',
    rating: 5,
    text: "Finally, a tool that lets me upload my own designs and just handles the boring repetitive work!",
    color: 'bg-primary',
  },
];

export function CustomerReviews() {
  return (
    <section className="py-16 px-4 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-10 rotate-12">💤</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-10 -rotate-12">🦥</div>

      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by <span className="text-primary">lazy</span> (smart) teams everywhere
          </h3>
          <p className="text-muted-foreground">
            Join thousands who stopped doing things the hard way.
          </p>
        </div>

        {/* Bento-style grid - not rigid columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className={`bg-card border-2 border-foreground rounded-2xl p-6 shadow-quirky hover:shadow-quirky-lg transition-shadow ${
                index === 0 ? 'lg:row-span-1' : ''
              } ${index === 1 ? 'lg:col-span-2' : ''}`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl ${review.color} flex items-center justify-center text-2xl border-2 border-foreground`}>
                  {review.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                  <p className="text-xs text-muted-foreground">{review.company}</p>
                </div>
                <Quote className="w-6 h-6 text-muted-foreground/30" />
              </div>

              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed">"{review.text}"</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { value: '50K+', label: 'Assets Generated' },
            { value: '2,000+', label: 'Happy Teams' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '< 1min', label: 'Per 100 Assets' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-card border-2 border-foreground rounded-xl p-4 text-center shadow-quirky-sm"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
