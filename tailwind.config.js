/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
  presets: [require('./src/themes/DefaultTheme')],
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  plugins: [require('@tailwindcss/typography'), 'tailwindcss-3d'],
  theme: {
    extend: {
      screens: {
        '3xl': '2000px',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      minWidth: {
        'citation-panel-md': '259px', // subtract 10px for scrollbar and 1px for border
        'citation-panel-lg': '325px', // subtract 10px for scrollbar and 1px for border
        'citation-panel-xl': '349px', // subtract 10px for scrollbar and 1px for border
        menu: '174px',
        'left-panel-lg': '242px',
        'left-panel-2xl': '300px',
        'left-panel-3xl': '360px',
      },
      width: {
        'ep-icon-sm': '12px',
        'ep-icon-md': '16px',
        'ep-icon-lg': '24px',
        'ep-icon-xl': '36px',
        'btn-sm': '280px',
        'btn-md': '312px',
        'btn-lg': '350px',
        'btn-xl': '370px',
        modal: '648px',
        toast: '320px',
        'toast-sm': '280px',
        'citation-md': '250px',
        'citation-lg': '298px',
        'citation-xl': '320px',
        file: '224px',
      },
      maxWidth: {
        'modal-xs': '352px',
        'modal-sm': '463px',
        'modal-md': '476px',
        modal: '648px',
        'modal-lg': '1062px',
        'modal-xl': '1600px',

        message: '976px',
        drawer: '288px',
        'drawer-lg': '360px',
        'left-panel-lg': '242px',
        'left-panel-2xl': '300px',
        'left-panel-3xl': '360px',
        'share-content': '700px',
      },
      height: {
        'ep-icon-sm': '12px',
        'ep-icon-md': '16px',
        'ep-icon-lg': '24px',
        'ep-icon-xl': '36px',
        header: '64px',
      },
      minHeight: {
        'cell-xs': '24px',
        'cell-sm': '32px',
        'cell-md': '40px',
        'cell-lg': '50px',
        'cell-xl': '64px',
        header: '64px',
      },
      maxHeight: {
        'cell-xs': '24px',
        'cell-sm': '32px',
        'cell-md': '40px',
        'cell-lg': '50px',
        'cell-xl': '64px',
      },
      zIndex: {
        backdrop: '20',
        navigation: '30',
        modal: '50',
        dropdown: '60',
        toast: '70',
        'main-section': '10',
        'tag-suggestions': '10',
        'drag-drop-input-overlay': '10',
        'configuration-drawer': '20',
        'selected-citation': '20',
        menu: '20',
        'guide-tooltip': '30',
      },
      boxShadow: {
        drawer: '-10px 4px 12px -10px rgba(197, 188, 172, 0.48)', // secondary-400
        menu: '0px 4px 12px 0px rgba(197, 188, 172, 0.48)', // secondary-400
        top: '4px 0px 12px 0px rgba(197, 188, 172, 0.48)', // secondary-400
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.volcanic.900'),
          },
        },
      }),
      keyframes: {
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden',
          },
          '100%': {
            width: '100%',
          },
        },
        'left-to-right': {
          '0%': {
            left: '0%',
            transform: 'translateX(-100%)',
          },
          '100%': {
            left: '100%',
            transform: 'translateX(0%)',
          },
        },
        borealisBar: {
          '0%': {
            left: '0%',
            right: '100%',
            width: '0%',
          },
          '20%': {
            left: '0%',
            right: '75%',
            width: '25%',
          },
          '80%': {
            right: '0%',
            left: '75%',
            width: '25%',
          },
          '100%': {
            left: '100%',
            right: '0%',
            width: '0%',
          },
        },
      },
      animation: {
        'typing-ellipsis': 'typing 2s steps(4) infinite',
        'typing-loading-message': 'typing 0.7s steps(20)',
        'ping-once': 'ping 1s cubic-bezier(0, 0, 0.2, 1)',
        'left-to-right': 'left-to-right 0.5s ease-in-out infinite',
        borealisBar: 'borealisBar 2s linear infinite',
      },
      scale: {
        175: '1.75',
      },
      variants: {
        extend: {},
      },
      plugins: [],
    },
  },
});
/* eslint-enable global-require */
