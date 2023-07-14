import './css/style.css';
import Image from 'next/image'
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata = {
  title: 'Trafego Magnum',
  description: 'Agência de marketing digital que vai crescer seu negócio com métodos comprovados!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="pt-br">
        <head>
          {/* Google tag (gtag.js) */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-GE09S9T322"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-GE09S9T322');
              `,
            }}
          />

          {/* Meta Pixel Code */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '155419934168918');
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=155419934168918&ev=PageView&noscript=1"
            />
          </noscript>
          {/* End Meta Pixel Code */}
        </head>
        <body className={`${inter.variable} font-inter antialiased bg-slate-900 text-slate-100 tracking-tight`}>
          <div className="flex flex-col min-h-screen overflow-hidden">
          <div className="fixed right-0 bottom-0 z-50">
            <a href="https://wa.me/+555192152520?text=Ol%C3%A1,%20eu%20quero%20crescer%20minha%20empresa" target="_blank">
              <Image src="https://moein.video/wp-content/uploads/2021/12/Whatsapp-Logo-GIF-WhatsApp-Icon-GIF-Royalty-Free-Animated-Icon-GIF-350px-after-effects-project.gif" width={30} height={30} alt="Whatsapp" className="m-5 w-12 sm:w-12 md:w-14 xl:w-16" />
            </a>
          </div>
            {children}
          </div>
        </body>
      </html>
    </>
  );
}