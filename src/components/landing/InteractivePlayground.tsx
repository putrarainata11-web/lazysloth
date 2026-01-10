import { useState, useRef, useEffect } from 'react';
import { Download, RefreshCw, Sparkles, Type } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const templates = [
  {
    id: 'certificate',
    name: 'Certificate',
    bg: 'linear-gradient(135deg, hsl(48, 100%, 95%) 0%, hsl(48, 80%, 85%) 100%)',
    border: 'hsl(48, 100%, 50%)',
  },
  {
    id: 'badge',
    name: 'Event Badge',
    bg: 'linear-gradient(135deg, hsl(262, 80%, 95%) 0%, hsl(262, 60%, 85%) 100%)',
    border: 'hsl(262, 83%, 58%)',
  },
  {
    id: 'card',
    name: 'Business Card',
    bg: 'linear-gradient(135deg, hsl(168, 70%, 95%) 0%, hsl(168, 50%, 85%) 100%)',
    border: 'hsl(168, 76%, 42%)',
  },
];

export function InteractivePlayground() {
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
  const [name, setName] = useState('Your Name Here');
  const [title, setTitle] = useState('Achievement Award');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    if (selectedTemplate.id === 'certificate') {
      gradient.addColorStop(0, '#fffef0');
      gradient.addColorStop(1, '#fff4cc');
    } else if (selectedTemplate.id === 'badge') {
      gradient.addColorStop(0, '#f5f0ff');
      gradient.addColorStop(1, '#e0d4f7');
    } else {
      gradient.addColorStop(0, '#f0fdfb');
      gradient.addColorStop(1, '#ccf4ed');
    }
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw decorative border
    ctx.strokeStyle = selectedTemplate.border;
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

    // Inner border
    ctx.lineWidth = 2;
    ctx.strokeRect(35, 35, canvas.width - 70, canvas.height - 70);

    // Draw corner decorations
    const corners = [
      [50, 50],
      [canvas.width - 50, 50],
      [50, canvas.height - 50],
      [canvas.width - 50, canvas.height - 50],
    ];
    
    corners.forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fillStyle = selectedTemplate.border;
      ctx.fill();
    });

    // Draw title
    ctx.fillStyle = '#1a1a1a';
    ctx.font = 'bold 28px Space Grotesk, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(title.toUpperCase(), canvas.width / 2, 100);

    // Draw decorative line
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 80, 130);
    ctx.lineTo(canvas.width / 2 + 80, 130);
    ctx.strokeStyle = selectedTemplate.border;
    ctx.lineWidth = 3;
    ctx.stroke();

    // Draw "This is to certify that"
    ctx.fillStyle = '#666';
    ctx.font = '16px Space Grotesk, sans-serif';
    ctx.fillText('This is presented to', canvas.width / 2, 170);

    // Draw name
    ctx.fillStyle = '#1a1a1a';
    ctx.font = 'bold 36px Georgia, serif';
    ctx.fillText(name || 'Your Name Here', canvas.width / 2, 220);

    // Draw decorative underline for name
    const nameWidth = ctx.measureText(name || 'Your Name Here').width;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - nameWidth / 2 - 10, 245);
    ctx.lineTo(canvas.width / 2 + nameWidth / 2 + 10, 245);
    ctx.strokeStyle = selectedTemplate.border;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw description
    ctx.fillStyle = '#666';
    ctx.font = '14px Space Grotesk, sans-serif';
    ctx.fillText('for outstanding achievement and dedication', canvas.width / 2, 280);

    // Draw date
    const today = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    ctx.fillStyle = '#888';
    ctx.font = '12px Space Grotesk, sans-serif';
    ctx.fillText(today, canvas.width / 2, 330);

    // Draw LazySloth branding
    ctx.fillStyle = selectedTemplate.border;
    ctx.font = 'bold 10px Space Grotesk, sans-serif';
    ctx.fillText('Generated with LazySloth', canvas.width / 2, canvas.height - 40);
  };

  useEffect(() => {
    drawCanvas();
  }, [selectedTemplate, name, title]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `${name.replace(/\s+/g, '-').toLowerCase()}-certificate.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-quirky-teal/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl relative">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary px-4 py-2 rounded-full border-2 border-foreground font-medium text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            Try it now — no signup needed!
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-2">
            Interactive Playground
          </h3>
          <p className="text-muted-foreground">
            See how easy it is. Pick a template, customize, and download.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-8 items-start">
          {/* Controls */}
          <div className="space-y-6 order-2 lg:order-1">
            {/* Template selector */}
            <div className="bg-card border-2 border-foreground rounded-2xl p-6 shadow-quirky">
              <Label className="text-sm font-bold mb-3 block">Choose Template</Label>
              <div className="grid grid-cols-3 gap-3">
                {templates.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTemplate(t)}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      selectedTemplate.id === t.id
                        ? 'border-foreground shadow-quirky-sm bg-muted'
                        : 'border-border hover:border-foreground'
                    }`}
                  >
                    <div
                      className="w-full h-12 rounded-lg mb-2 border"
                      style={{ background: t.bg, borderColor: t.border }}
                    />
                    <span className="text-xs font-medium">{t.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Text inputs */}
            <div className="bg-card border-2 border-foreground rounded-2xl p-6 shadow-quirky space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Type className="w-4 h-4" />
                <Label className="text-sm font-bold">Customize Text</Label>
              </div>
              
              <div>
                <Label htmlFor="title" className="text-xs text-muted-foreground">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Certificate title..."
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="name" className="text-xs text-muted-foreground">Recipient Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter a name..."
                  className="mt-1"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => {
                  setName('Your Name Here');
                  setTitle('Achievement Award');
                }}
                className="flex-1 gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Reset
              </Button>
              <Button onClick={handleDownload} className="flex-1 gap-2">
                <Download className="w-4 h-4" />
                Download
              </Button>
            </div>
          </div>

          {/* Preview */}
          <div className="order-1 lg:order-2">
            <div className="bg-card border-2 border-foreground rounded-2xl p-4 shadow-quirky-lg">
              <canvas
                ref={canvasRef}
                width={500}
                height={380}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-3">
              ↑ This is a real preview — download it!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
