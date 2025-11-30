// CSS Modules
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// CSS global (não-module)
declare module '*.css';

// Images
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

// Custom JSX elements (e.g., ion-icon)
declare namespace JSX {
  interface IntrinsicElements {
    'ion-icon': any; // você pode tipar melhor depois se quiser
  }
}