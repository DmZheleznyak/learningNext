import '../styles/global.css';

export default function App({ Component, pageProps}) {
    return <Component {...pageProps} />;
}

// The default export of _app.js is a top-level React component that wraps all the pages in your application. 
// You can use this component to keep state when navigating between pages, 
// or to add global styles as we're doing here
// https://nextjs.org/docs/pages/building-your-application/routing/custom-app

// Important: You need to restart the development server when you add pages/_app.js. 
// Press Ctrl + c to stop the server and run:
// npm run dev