import { useEffect, useRef, useState } from 'react';
import type { CertificateConfig } from '@/types/certificate';
import { formatDate, generateQRCode } from '@/lib/certificate-utils';
interface CertificatePreviewProps {
  config: CertificateConfig;
  previewName: string;
  onCanvasLoad: (width: number, height: number) => void;
}
export function CertificatePreview({
  config,
  previewName,
  onCanvasLoad
}: CertificatePreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  useEffect(() => {
    const generateQR = async () => {
      if (config.qrSettings.enabled) {
        const qr = await generateQRCode(`CERT-PREVIEW-${previewName}`, config.qrSettings.size);
        setQrCodeUrl(qr);
      }
    };
    generateQR();
  }, [config.qrSettings.enabled, config.qrSettings.size, previewName]);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx || !config.templateImage) return;
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      onCanvasLoad(img.width, img.height);

      // Draw template
      ctx.drawImage(img, 0, 0);

      // Draw name
      ctx.fillStyle = config.nameSettings.color;
      ctx.font = `${config.nameSettings.fontSize}px ${config.nameSettings.fontFamily}`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(previewName || 'John Doe', config.nameSettings.x, config.nameSettings.y);

      // Draw date if enabled
      if (config.dateSettings.enabled) {
        const dateStr = formatDate(new Date(), config.dateSettings.format);
        ctx.fillStyle = config.dateSettings.color;
        ctx.font = `${config.dateSettings.fontSize}px ${config.dateSettings.fontFamily}`;
        ctx.fillText(dateStr, config.dateSettings.x, config.dateSettings.y);
      }

      // Draw QR if enabled and loaded
      if (config.qrSettings.enabled && qrCodeUrl) {
        const qrImg = new Image();
        qrImg.onload = () => {
          ctx.drawImage(qrImg, config.qrSettings.x - config.qrSettings.size / 2, config.qrSettings.y - config.qrSettings.size / 2, config.qrSettings.size, config.qrSettings.size);
        };
        qrImg.src = qrCodeUrl;
      }
    };
    img.src = config.templateImage;
  }, [config, previewName, qrCodeUrl, onCanvasLoad]);
  if (!config.templateImage) {
    return (
      <div className="text-center text-muted-foreground p-12">
        <p className="text-lg font-medium">Upload a template to see preview</p>
      </div>
    );
  }
  
  return <canvas ref={canvasRef} className="max-w-full h-auto rounded-lg shadow-lg" />;
}