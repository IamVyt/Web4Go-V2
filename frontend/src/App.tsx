import { AppProvider, useApp } from './context/AppContext';
import { SkipLink } from './components/layout/SkipLink';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { PageLoader } from './components/sections/PageLoader';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { CreateBand } from './components/sections/CreateBand';
import { Portfolio } from './components/sections/Portfolio';
import { Services } from './components/sections/Services';
import { Team } from './components/sections/Team';
import { Stats } from './components/sections/Stats';
import { FAQ } from './components/sections/FAQ';
import { Blog } from './components/sections/Blog';
import { ArticlesHub } from './components/pages/ArticlesHub';
import { ArticleDetail } from './components/pages/ArticleDetail';
import { NavMenu } from './components/overlays/NavMenu';
import { RequestModal } from './components/overlays/RequestModal';

function AppContent() {
  const { currentView, currentArticleId } = useApp();

  return (
    <>
      <SkipLink />
      <PageLoader />
      <Header />

      {currentView === 'home' && (
        <main id="main">
          <Hero />
          <About />
          <CreateBand />
          <Portfolio />
          <Services />
          <Team />
          <Stats />
          <FAQ />
          <Blog />
        </main>
      )}

      {currentView === 'articles' && (
        <main id="main">
          <ArticlesHub />
        </main>
      )}

      {currentView === 'article-detail' && (
        <main id="main">
          <ArticleDetail articleId={currentArticleId || ''} />
        </main>
      )}

      <Footer />
      <NavMenu />
      <RequestModal />
    </>
  );
}

export function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
