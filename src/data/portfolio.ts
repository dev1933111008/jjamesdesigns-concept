export interface Project {
  slug: string;
  title: string;
  category: 'Web Design' | 'Graphic Design' | 'Print';
  image: string;
  alt: string;
  featured?: boolean;
}

export const categories: Project['category'][] = ['Web Design', 'Graphic Design', 'Print'];

// Image filenames reference src/assets/portfolio/*.webp
export const projects: Project[] = [
  { slug: 'the-gi-consultants', title: 'The GI Consultants', category: 'Web Design', image: 'mtec-gi-consultants-website.webp', alt: 'The GI Consultants website design', featured: true },
  { slug: 'my-fusion-dance', title: 'My Fusion Dance', category: 'Web Design', image: 'my-fusion-dance-website.webp', alt: 'My Fusion Dance studio website design', featured: true },
  { slug: 'national-dbs', title: 'National DBS', category: 'Web Design', image: 'national-dbs-website.webp', alt: 'National DBS website design', featured: true },
  { slug: 'sloan-fluid', title: 'Sloan Fluid Accessories', category: 'Web Design', image: 'sloan-fluid-website.webp', alt: 'Sloan Fluid Accessories website design', featured: true },
  { slug: 'casa-jose-restaurant', title: 'Casa Jose Restaurant', category: 'Web Design', image: 'casa-jose-restaurant-website.webp', alt: 'Casa Jose Restaurant website design', featured: true },
  { slug: 'xtreme-blocks', title: 'Xtreme Blocks', category: 'Web Design', image: 'xtreme-blocks-website.webp', alt: 'Xtreme Blocks website design', featured: true },
  { slug: 'firehouse-fence', title: 'Firehouse Fence', category: 'Web Design', image: 'firehouse-fence-website.webp', alt: 'Firehouse Fence website design' },
  { slug: 'legends-gym', title: 'Legends Gym', category: 'Web Design', image: 'legends-gym-website.webp', alt: 'Legends Gym website design' },
  { slug: 'crossroads-career', title: 'Crossroads Career', category: 'Web Design', image: 'crossroads-website.webp', alt: 'Crossroads Career website design' },
  { slug: 'laura-schroeder-website', title: 'Laura Schroeder', category: 'Web Design', image: 'laura-schroeder-website.webp', alt: 'Laura Schroeder website design' },
  { slug: 'alexis-diamonds-magazine', title: 'Alexis Diamonds', category: 'Graphic Design', image: 'alexis-diamonds-magazine.webp', alt: 'Alexis Diamonds magazine ad design' },
  { slug: 'be-well-mel', title: 'Be Well with Mel', category: 'Graphic Design', image: 'bewell-logo.webp', alt: 'Be Well with Mel logo design' },
  { slug: 'brian-horvath', title: 'Brian Horvath', category: 'Graphic Design', image: 'brian-horvath-logo-1.webp', alt: 'Brian Horvath brand identity design' },
  { slug: 'clm-realty-bc', title: 'CLM Realty', category: 'Print', image: 'clm-realty-business-card.webp', alt: 'CLM Realty business card design' },
  { slug: 'silverpointe-realty', title: 'Silverpointe Realty', category: 'Print', image: 'silverpointe-flyer.webp', alt: 'Silverpointe Realty flyer design' },
  { slug: 'jariah-music', title: 'Jariah Music', category: 'Print', image: 'jariah-music-business-card.webp', alt: 'Jariah Music business card design' },
  { slug: 'jorge-hoyes', title: 'Jorge Hoyes', category: 'Graphic Design', image: 'jorge-hoyes-logo-1.webp', alt: 'Jorge Hoyes brand identity design' },
  { slug: 'laura-schroeder-logo', title: 'Laura Schroeder Logo', category: 'Graphic Design', image: 'laura-schroeder-logo.webp', alt: 'Laura Schroeder logo design' },
  { slug: 'lock-stock-and-barrel', title: 'Lock, Stock and Barrel', category: 'Print', image: 'lock-stock-and-barrel-business-card.webp', alt: 'Lock, Stock and Barrel business card design' },
  { slug: 'chadd-mcculley', title: 'Chadd McCulley', category: 'Graphic Design', image: 'chadd-mcculley-logo.webp', alt: 'Chadd McCulley logo design' },
  { slug: 'alexis-diamonds-logo', title: 'Alexis Diamonds', category: 'Graphic Design', image: 'alexis-diamonds-logo.webp', alt: 'Alexis Diamonds logo design' },
  { slug: 'xtreme-blocks-logo', title: 'Xtreme Blocks', category: 'Graphic Design', image: 'xtreme-blocks-logo.webp', alt: 'Xtreme Blocks logo design' },
  { slug: 'crossroads-logo', title: 'Crossroads Career', category: 'Graphic Design', image: 'crossroads-logo.webp', alt: 'Crossroads Career logo design' },
  { slug: 'firehouse-fence-logo', title: 'Firehouse Fence', category: 'Graphic Design', image: 'firehouse-fence-logo.webp', alt: 'Firehouse Fence logo design' },
  { slug: 'legends-gym-logo', title: 'Legends Gym', category: 'Graphic Design', image: 'legends-gym-logo.webp', alt: 'Legends Gym logo design' },
  { slug: 'mtec-gi-consultants-logo', title: 'The GI Consultants', category: 'Graphic Design', image: 'mtec-gi-consultants-logo.webp', alt: 'The GI Consultants logo design' },
  { slug: 'national-dbs-logo', title: 'National DBS', category: 'Graphic Design', image: 'national-dbs-logo.webp', alt: 'National DBS logo design' },
  { slug: 'sloan-fluid-logo', title: 'Sloan Fluid Accessories', category: 'Graphic Design', image: 'sloan-fluid-logo.webp', alt: 'Sloan Fluid Accessories logo design' },
  { slug: 'my-fusion-dance-logo', title: 'My Fusion Dance', category: 'Graphic Design', image: 'my-fusion-dance-logo.webp', alt: 'My Fusion Dance logo design' },
  { slug: 'casa-jose-restaurant-logo', title: 'Casa Jose Restaurant', category: 'Graphic Design', image: 'casa-jose-restaurant-logo.webp', alt: 'Casa Jose Restaurant logo design' },
];

// Quotes are verbatim from the live site (jjamesdesigns.com testimonial modals) — do not paraphrase.
export const testimonials = [
  {
    name: 'Jimi Higgins',
    org: 'Tabernacle Of Praise, Tampa, FL',
    image: 'jim-debi-higgins.webp',
    quote: `If you are like me then you'll agree that "image" is everything to those who are leading in some type of business. Your image has to be portrayed accurately, professionally and with the honesty and integrity that you have labored so hard to establish. Our corporation put the hopes of our public image in the hands of J. James Designs. We knew who we were but we needed a way to communicate that to the outside world. Through counseling, coaching, and encouragement they helped us to discover our identity in a way that create an expression of our worth through our website. If you are considering partnering with J.James Design take it from me. You'll not meet a more creative genius in the area of web design and graphic design than this company.`,
  },
  {
    name: 'Mark Santschi',
    org: 'Sloan Fluid Accessories Inc., Franklin, TN',
    image: 'mark-santschi.webp',
    quote: `Tremendous creativity, coupled with excellent technical knowledge and support, makes Jeremy the best web designer and service i have ever used.`,
  },
  {
    name: 'Brandon Hagan',
    org: 'Twine Graphics & Screen Printing, Franklin, TN',
    image: 'brandon-hagan.webp',
    quote: `Best local web design service we've used!`,
  },
];
