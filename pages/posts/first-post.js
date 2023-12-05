import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <Layout>
          <Head>
            <title>First Post</title>
          </Head>
          <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
            }
          />
          <h1>First Post</h1>
          <h2>
            <Link href="/">Back to home</Link>
          </h2>
          <Image
            src="/images/dalmatinForExample.jpg" // Route of the image file
            height={444} // Desired size with correct aspect ratio
            width={444} // Desired size with correct aspect ratio
            alt="Your Name"
          />  
        </Layout>
      );
}

// 
// <Script /> for add third-party javascript for example Facebook SDk
// Notice that a few additional properties have been defined in the Script component:
// 
// strategy controls when the third-party script should load. A value of lazyOnload tells Next.js to load this particular script lazily during browser idle time
// onLoad is used to run any JavaScript code immediately after the script has finished loading. In this example, we log a message to the console that mentions that the script has loaded correctly

// <Image /> - Resizing & optimizing images 