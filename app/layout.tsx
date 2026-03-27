import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Ravi Kumar Singh | Software Engineer',
  description: 'Software Engineer crafting data pipelines, backend systems, and real-time analytics for production-grade platforms.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedColor = localStorage.getItem('accent-color');
                if (savedColor) {
                  document.documentElement.style.setProperty('--accent', savedColor);
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="font-sans bg-bg text-text-primary antialiased selection:bg-accent selection:text-white" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
