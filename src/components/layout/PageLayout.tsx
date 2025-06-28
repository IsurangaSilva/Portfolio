import { ReactNode } from 'react';
import { Header } from './Header';

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">{children}</main>
    </div>
  );
}
