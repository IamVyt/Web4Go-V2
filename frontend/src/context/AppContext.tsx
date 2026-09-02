import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { stopScroll, startScroll, smoothScrollTo } from '../lib/scroll';

export type AppView = 'home' | 'articles' | 'article-detail';

interface AppContextType {
  introReady: boolean;
  setIntroReady: (v: boolean) => void;
  navOpen: boolean;
  openNav: () => void;
  closeNav: () => void;
  modalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  handleNav: (target: string) => void;
  selectedCategory: string | null;
  setSelectedCategory: (cat: string | null) => void;
  filterWork: (cat: string | null) => void;

  // Multi-page dynamic blog views
  currentView: AppView;
  currentArticleId: string | null;
  openArticle: (id: string) => void;
  goToArticlesHub: () => void;
  goToHome: (targetSection?: string) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [introReady, setIntroReady] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [currentView, setCurrentView] = useState<AppView>('home');
  const [currentArticleId, setCurrentArticleId] = useState<string | null>(null);

  // Synchronize with URL hash for browser history navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/article/')) {
        const articleId = hash.replace('#/article/', '');
        setCurrentView('article-detail');
        setCurrentArticleId(articleId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/articles' || hash === '#articles') {
        setCurrentView('articles');
        setCurrentArticleId(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentView('home');
        setCurrentArticleId(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openNav = useCallback(() => {
    setNavOpen(true);
    stopScroll();
  }, []);

  const closeNav = useCallback(() => {
    setNavOpen(false);
    startScroll();
  }, []);

  const openModal = useCallback(() => {
    setModalOpen(true);
    stopScroll();
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    startScroll();
  }, []);

  const openArticle = useCallback((id: string) => {
    window.location.hash = `#/article/${id}`;
    setCurrentView('article-detail');
    setCurrentArticleId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const goToArticlesHub = useCallback(() => {
    window.location.hash = '#/articles';
    setCurrentView('articles');
    setCurrentArticleId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const goToHome = useCallback((targetSection?: string) => {
    window.location.hash = targetSection ? `#${targetSection}` : '#home';
    setCurrentView('home');
    setCurrentArticleId(null);
    if (targetSection && targetSection !== 'home') {
      setTimeout(() => smoothScrollTo(targetSection), 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleNav = useCallback((target: string) => {
    closeNav();
    if (target === 'contact') {
      setTimeout(openModal, 100);
      return;
    }

    if (target === 'blog' || target === 'articles') {
      if (currentView !== 'home') {
        goToArticlesHub();
      } else {
        setTimeout(() => smoothScrollTo('blog'), 100);
      }
      return;
    }

    if (currentView !== 'home') {
      goToHome(target);
    } else {
      setTimeout(() => smoothScrollTo(target), 100);
    }
  }, [closeNav, openModal, currentView, goToArticlesHub, goToHome]);

  const filterWork = useCallback((cat: string | null) => {
    setSelectedCategory(cat);
    closeNav();
    if (currentView !== 'home') {
      goToHome('works');
    } else {
      setTimeout(() => smoothScrollTo('works'), 100);
    }
  }, [closeNav, currentView, goToHome]);

  return (
    <AppContext.Provider value={{
      introReady, setIntroReady,
      navOpen, openNav, closeNav,
      modalOpen, openModal, closeModal,
      handleNav,
      selectedCategory, setSelectedCategory,
      filterWork,
      currentView,
      currentArticleId,
      openArticle,
      goToArticlesHub,
      goToHome,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextType {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
