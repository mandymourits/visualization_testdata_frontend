// @flow

// #flow types
export type Link = {
  label: string,
  link: string,
  view?: string,
  isRouteBtn?: boolean,
};

export type Navigation = {
  brand: string,
  leftLinks: Array<Link>,
  rightLinks: Array<Link>,
};
// #endregion

const navigation = {
  brand: 'Ventus Test Professionals',
  leftLinks: [],
  rightLinks: [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'Demo',
      link: '/about',
      view: 'about',
      isRouteBtn: true,
    },
    {
      label: 'Login',
      link: '/Login',
      view: 'protected',
      isRouteBtn: true,
    },
    {
      label: 'Logout',
      link: '/',
      isRouteBtn: true,
    },
  ],
};

export default navigation;
