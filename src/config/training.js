/**
 * Settings for the /training landing page (The Remote Closers Club).
 * Edit values here — the page reads everything from this file.
 */

// Every "join" button on the page opens this link.
export const TRAINING_WHATSAPP_URL = 'https://wa.link/ep4exm'

/**
 * Images live in /public/images/training/. While a value is null the page shows a
 * labelled placeholder frame. To add or swap an image, drop the file into
 * /public/images/training/ and set { src, width, height } (width/height = the file's
 * pixel size; they stop the page jumping while it loads). A plain path string
 * like '/images/training/my-image.webp' also works.
 */
export const TRAINING_IMAGES = {
  // Hero trust strip: foreign currency wallet balance
  walletCollage: { src: '/images/training/wallet-balance.webp', width: 900, height: 1105 },
  // About: Billeddy on a live closing Zoom call
  zoomCall: { src: '/images/training/zoom-closing-call.webp', width: 900, height: 1500 },
  // About: WhatsApp DM from Carlos (Eco-Resort, Indonesia)
  carlosDm: { src: '/images/training/carlos-dm.webp', width: 900, height: 826 },
  // Program: member portal on MacBook + iPhone
  portalMockup: { src: '/images/training/portal-mockup.webp', width: 1400, height: 933 },
  // Real World Receipts: student commission message
  proofCelebrations: { src: '/images/training/student-commission.webp', width: 900, height: 923 },
  // Client calls (shown under the mentor section) (a list — add or remove entries freely)
  proofClientCalls: [
    { src: '/images/training/client-call-1.webp', width: 900, height: 1948 },
    { src: '/images/training/client-call-2.webp', width: 900, height: 1848 },
    { src: '/images/training/client-call-3.webp', width: 900, height: 1860 },
  ],
}
