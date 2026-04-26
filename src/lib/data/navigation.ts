export const navLinks = [
  {
    label: 'Technology',
    href: '/technology',
    dropdown: null
  },
  {
    label: 'Solutions',
    href: '/solutions',
    dropdown: {
      heading: 'BeCrop® Products & Solutions',
      items: [
        { label: 'BeCrop® Farm', href: '/becrop-farm', desc: 'Maximize every acre' },
        { label: 'BeCrop® Test', href: '/becrop-test', desc: 'Advanced soil testing' },
        { label: 'BeCrop® Trials', href: '/becrop-trials', desc: 'Functional analysis' },
        { label: 'BeCrop® Rate', href: '/becrop-rate', desc: 'Sustainable land' },
      ],
      audiences: [
        { label: 'Farmers', href: '/farmers' },
        { label: 'Retailers', href: '/advisors' },
        { label: 'Manufacturers', href: '/manufacturer' },
      ]
    }
  },
  {
    label: 'Resources',
    href: '/resources',
    dropdown: {
      items: [
        { label: 'eBooks & Webinars', href: '/resources' },
        { label: 'BCA Program', href: '/advisors' },
        { label: 'Case Studies', href: '/case-studies' },
      ]
    }
  },
  {
    label: 'Company',
    href: '/about',
    dropdown: {
      items: [
        { label: 'About', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
      ]
    }
  }
];
