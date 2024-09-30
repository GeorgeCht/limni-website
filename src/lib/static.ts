/**
 * This file is used to store static data that doesn't need
 * to be fetched from the server.
 */

export const staticData = {
  menu: {
    contact: {
      email: 'info@limni-hotel.com',
      phone: '+3069444343343',
      address: {
        en: 'Odos Limni, Evoia 3243, Southwestern Evoia',
        el: 'Οδός Λίμνης, Εύβοια 3243, Νότια Εύβοια',
      },
    },
    cta: {
      sm: {
        en: 'Book your room',
        el: 'Κράτηση δωματίου',
      },
      lg: {
        en: 'Book now',
        el: 'Κράτηση',
      },
    },
    items: [
      {
        href: '/rooms',
        label: { en: 'Find a room', el: 'Δωμάτια' },
        image: '/assets/placeholder.avif',
      },
      {
        href: '/about',
        label: { en: 'Our hotel', el: 'Το ξενοδοχείο' },
        image: '/assets/placeholder.avif',
      },
      {
        href: '/experiences',
        label: { en: 'Experiences', el: 'Εμπειρίες' },
        image: '/assets/placeholder.avif',
      },
      {
        href: '/contact',
        label: { en: 'Contact us', el: 'Επικοινωνία' },
        image: '/assets/placeholder.avif',
      },
      {
        href: '/faqs',
        label: { en: 'FAQs', el: 'Συχνές ερωτήσεις' },
        image: '/assets/placeholder.avif',
      },
    ],
    socialMedia: [
      {
        href: 'https://www.instagram.com/limnihotel/',
        label: 'Instagram',
      },
      {
        href: 'https://www.facebook.com/limnihotel/',
        label: 'Facebook',
      },
      {
        href: 'https://www.booking.com/hotel/gr/limni-hotel.html',
        label: 'Booking',
      },
    ],
  },
  footer: {
    copyright: 'Limni Hotel © {{year}}. Created by {{author}}',
    newsletter: {
      title: {
        en: 'Get offer updates straight to your inbox!',
        el: 'Εγγραφείτε στο newsletter μας!',
      },
      inputPlaceholder: {
        en: 'Enter your email',
        el: 'Το email σας',
      },
      disclaimer: {
        en: 'By subscribing, you agree to our {{policy}}.',
        el: 'Κατα την εγγραφή σας συμφωνείτε με τη {{policy}}.',
      },
    },
    legal: {
      privacy: {
        label: {
          en: 'Privacy Policy',
          el: 'Πολιτική απορρήτου',
        },
        href: '/privacy',
      },
      terms: {
        label: {
          en: 'Terms of Service',
          el: 'Όροι χρήσης',
        },
        href: '/terms',
      },
      residency: {
        label: {
          en: 'Residency Policy',
          el: 'Πολιτική διαμονής',
        },
        href: '/residency',
      },
    },
    menu: {
      items: [
        {
          href: '/rooms',
          label: { en: 'Find a room', el: 'Δωμάτια' },
        },
        {
          href: '/about',
          label: { en: 'Our hotel', el: 'Το ξενοδοχείο' },
        },
        {
          href: '/experiences',
          label: { en: 'Experiences', el: 'Εμπειρίες' },
        },
        {
          href: 'https://maps.google.com',
          label: { en: 'Directions', el: 'Οδηγίες' },
        },
        {
          href: '/faqs',
          label: { en: 'FAQs', el: 'Συχνές ερωτήσεις' },
        },
      ],
      contact: {
        href: '/contact',
        label: { en: 'Contact us', el: 'Επικοινωνία' },
      },
    },
    backToTop: {
      label: {
        en: 'Back to top',
        el: 'Επάνω',
      },
    },
  },
}
