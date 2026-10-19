/**
 * Photo catalogue. Every image is hosted in Vercel Blob (see CLAUDE.md → "Photos").
 * To add a photo: upload it to the bucket, then add a `photo(...)` line below
 * with its real pixel width/height (used for layout + optimization).
 * Keep IMAGE_HOST in sync with `images.remotePatterns` in next.config.ts.
 */
export const IMAGE_HOST = "vc6bfofuoftvo8ls.public.blob.vercel-storage.com";
export const IMAGE_BASE_URL = `https://${IMAGE_HOST}`;

export interface Photo {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface GalleryCollection {
  id: string;
  title: string;
  cover: Photo;
  photos: Photo[];
}

const photo = (path: string, width: number, height: number, alt: string): Photo => ({
  src: `${IMAGE_BASE_URL}/${path}`,
  width,
  height,
  alt,
});

export const heroPhotos: Photo[] = [
  photo("carousel/photo-4.jpg", 1501, 1000, "Featured photograph 1"),
  photo("carousel/photo-2.jpg", 1500, 1000, "Featured photograph 2"),
  photo("carousel/photo-3.jpg", 1500, 1000, "Featured photograph 3"),
  photo("carousel/photo-4-2.jpg", 1500, 1000, "Featured photograph 4"),
];

export const aboutPhoto = photo("about.jpg", 1500, 2000,"Lisa Marie, the photographer");

const nature = (n: string, w: number, h: number, i: number) =>
  photo(`nature/nature-${n}.jpg`, w, h, `Nature and landscape photograph ${i}`);
const portrait = (n: string, w: number, h: number, i: number) =>
  photo(`portraits/portrait-${n}.jpg`, w, h, `Portrait photograph ${i}`);
const family = (file: string, w: number, h: number, i: number) =>
  photo(`families/${file}.jpg`, w, h, `Family and couples photograph ${i}`);

export const galleries: GalleryCollection[] = [
  {
    id: "nature",
    title: "Nature & Landscapes",
    cover: photo("nature/nature-tall-1.jpg", 667, 1000, "Nature and landscape photography"),
    photos: [
      nature("long-1", 1000, 667, 1),
      nature("long-2", 1000, 667, 2),
      nature("tall-1", 667, 1000, 3),
      nature("long-3", 1000, 667, 4),
      nature("tall-2", 667, 1000, 5),
      nature("long-4", 1000, 667, 6),
      nature("long-5", 1000, 667, 7),
      nature("tall-3", 667, 1000, 8),
      nature("long-6", 1000, 667, 9),
      nature("long-7", 2000, 1333, 10),
      nature("tall-4", 1000, 1500, 11),
      nature("long-8", 2000, 1333, 13),
      nature("tall-6", 1000, 1469, 14),
      nature("long-9", 1500, 1000, 15),
      nature("tall-7", 1000, 1500, 16),
      nature("tall-8", 1000, 1500, 17),
      nature("tall-9", 1000, 1500, 19),
    ],
  },
  {
    id: "portraits",
    title: "Portraits",
    cover: photo("portraits/portrait-tall-13.jpg", 667, 1000, "Portrait photography"),
    photos: [
      portrait("tall-1", 719, 1000, 1),
      portrait("tall-2", 668, 1000, 2),
      portrait("tall-3", 667, 1000, 3),
      portrait("long-1", 1000, 706, 4),
      portrait("tall-4", 694, 1000, 5),
      portrait("tall-5", 696, 1000, 6),
      portrait("long-2", 1000, 667, 7),
      portrait("tall-6", 667, 1000, 8),
      portrait("tall-14", 667, 1000, 9),
      portrait("tall-8", 667, 1000, 10),
      portrait("tall-9", 700, 1000, 11),
      portrait("tall-10", 695, 1000, 12),
      portrait("tall-11", 660, 1000, 13),
      portrait("tall-12", 667, 1000, 14),
      portrait("tall-13", 667, 1000, 15),
      portrait("tall-15", 1417, 2000, 16),
    ],
  },
  {
    id: "families",
    title: "Families & Couples",
    cover: photo("families/families-tall-2.jpg", 667, 1000, "Family and couples photography"),
    photos: [
      family("families-tall-1", 667, 1000, 1),
      family("families-long-1", 1000, 667, 2),
      family("families-long-2", 1000, 667, 3),
      family("portrait-tall-2", 715, 1000, 4),
      family("families-long-3", 1000, 667, 5),
      family("families-long-4", 2000, 1333, 6),
      family("families-tall-3", 1333, 2000, 7),
      family("families-tall-4", 1622, 2000, 8),
      family("families-long-5", 2000, 1333, 9),
      family("families-tall-5", 1545, 2000, 10),
      family("families-tall-6", 1276, 2000, 11),
    ],
  },
];
