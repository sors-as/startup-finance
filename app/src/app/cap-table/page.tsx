"use client";

import React, { useEffect, useState } from "react";
import WorksheetContainer from "./WorksheetContainer";
import { BRANDING } from '@config/branding';
import { Footer } from '@/components/Footer';

const Page: React.FC = () => {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);
  
  // Initialize dark mode state based on local storage or system preference
  useEffect(() => {
    // Check local storage for theme preference
    const storedTheme = localStorage.getItem('color-theme');
    
    if (storedTheme) {
      // If we have a stored preference, use it
      const isDarkMode = storedTheme === 'dark';
      setDarkMode(isDarkMode);
      document.documentElement.classList.toggle('dark', isDarkMode);
    } else {
      // If no stored preference, check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    
    // Save preference to local storage when user explicitly toggles
    localStorage.setItem('color-theme', newMode ? 'dark' : 'light');
  };

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Only apply system preference changes if no theme is set in localStorage
      if (!localStorage.getItem('color-theme')) {
        const prefersDark = e.matches;
        setDarkMode(prefersDark);
        document.documentElement.classList.toggle('dark', prefersDark);
      }
    };
    
    // Add event listener
    mediaQuery.addEventListener('change', handleChange);
    
    // Clean up
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Create new state (for "New" button)
  const createNewState = () => {
    window.location.hash = ""; // This will trigger a reload with no hash
    window.location.reload();
  };

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between py-8">
        {/* Breadcrumb and Heading */}
        <div className="z-10 w-full max-w-5xl mb-6 px-2">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            <a
              className="hover:text-nt84orange"
              href={BRANDING.docsUrl}
            >
              {BRANDING.content.breadcrumbHome}
            </a>{" "}
            &gt; <span>{BRANDING.content.breadcrumbCurrent}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {BRANDING.siteName}
          </h1>
        </div>

        {/* WorksheetContainer handles all the complex logic */}
        <WorksheetContainer onCreateNew={createNewState} />

        {/* Dark mode toggle at top right corner */}
        <div className="absolute top-4 right-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm flex items-center gap-2 transition-colors"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? (
              <svg className="w-4 h-4 mr-0 md:mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 mr-0 md:mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            )}
            <span className="hidden md:inline">
              {darkMode ? "Founder Mode" : "VC Mode"}
            </span>
          </button>
        </div>

        <div className="w-full max-w-5xl px-4 mt-24 border-t pt-8 border-gray-300 dark:border-gray-500">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Om Cap Table Kalkulatoren
          </h1>

          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <p className="leading-relaxed">
              En åpen kildekode-kalkulator for å hjelpe grunnleggere med å modellere 
              SAFE-avtaler og finansieringsrunder. Verktøyet er tilgjengelig på{" "}
              <a
                href="https://github.com/1984vc/startup-finance"
                target="_blank"
                rel="noopener"
                className="text-nt84orange hover:text-nt84orangedarker underline font-medium"
              >
                GitHub
              </a>
              .
            </p>

            <p className="leading-relaxed pt-2 border-t border-gray-200 dark:border-gray-700">
              Vi setter pris på all tilbakemelding! Hvis du ønsker å rapportere feil, 
              gi tilbakemelding eller foreslå forbedringer, vennligst send e-post til{" "}
              <a
                href={`mailto:${BRANDING.contactEmail}`}
                className="text-nt84orange hover:text-nt84orangedarker underline font-medium"
              >
                {BRANDING.contactEmail}
              </a>
            </p>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default Page;
