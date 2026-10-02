import QRCode from 'qrcode';
/** QR code SVG (pour renvoyer le papier vers la version interactive en ligne). */
export const qrSvg = (url: string) => QRCode.toString(url, { type: 'svg', margin: 0, errorCorrectionLevel: 'M', color: { dark: '#151515', light: '#ffffff' } });
