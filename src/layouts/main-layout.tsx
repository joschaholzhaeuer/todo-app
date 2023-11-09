import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title?: string;
  footer?: string;
}

export const MainLayout = ({ children, title, footer }: Props) => {
  return (
    <div className="min-h-screen grid grid-rows-layout">
      <header className="flex items-center p-3 bg-rose-500 text-white text-2xl font-bold">
        {title || "Todo App"}
      </header>
      <main className="px-3 py-6">{children}</main>
      <footer className="flex items-center p-3 bg-slate-200 text-slate-400">
        {footer || "© 2023 Joscha Holzhäuer"}
      </footer>
    </div>
  );
};
