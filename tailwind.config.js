module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'green-spotify': '#1ED760',
        'marble': '#F1F0EA',
        'black-console': '#191919',
        'lavander': '#B298DC',
        'lilac': '#E59DE4',
        'peach': '#EE7F77',
        'coral': '#FF9B85',
        'apricot': '#EBD57B',
        'pea': '#CBE896',
        'baby-blue': '#B8D0EB',
      },
      backgroundColor: {
        'green-spotify': '#1ED760',
        'marble': '#F1F0EA',
        'black-console': '#191919',
      },
      boxShadow: {
        'inner-xl': 'inset 0px 0px 6px 4px rgba(0, 0, 0, 0.3)',
      },
      height: {
       'quasi-full': '99%',
     }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
