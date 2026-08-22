// Lightweight file-type sniffing (docs/05 section 6): the first bytes must
// match a signature for the accepted types; extension alone is not trusted.
// [TO CONFIRM: ClamAV container in Option B / provider scanning in A] is the
// follow-up AV hook; this gate covers type spoofing only.

const SIGNATURES: { name: string; test: (bytes: Uint8Array) => boolean }[] = [
  {
    name: "pdf",
    test: (b) => b[0] === 0x25 && b[1] === 0x50 && b[2] === 0x44 && b[3] === 0x46,
  },
  {
    // docx, xlsx, pptx are ZIP containers.
    name: "office-openxml",
    test: (b) => b[0] === 0x50 && b[1] === 0x4b && (b[2] === 0x03 || b[2] === 0x05),
  },
  {
    // Legacy doc, xls, ppt: OLE compound file.
    name: "office-legacy",
    test: (b) =>
      b[0] === 0xd0 && b[1] === 0xcf && b[2] === 0x11 && b[3] === 0xe0,
  },
  {
    name: "jpeg",
    test: (b) => b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff,
  },
  {
    name: "png",
    test: (b) =>
      b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47,
  },
  {
    // MP4: "ftyp" at offset 4.
    name: "mp4",
    test: (b) =>
      b[4] === 0x66 && b[5] === 0x74 && b[6] === 0x79 && b[7] === 0x70,
  },
];

export function sniffAllowed(bytes: Uint8Array): boolean {
  if (bytes.length < 8) return false;
  return SIGNATURES.some((signature) => signature.test(bytes));
}
