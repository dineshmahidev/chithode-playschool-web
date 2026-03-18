import { createContext, useContext, useState, useEffect } from 'react';

const ContentContext = createContext();

export function ContentProvider({ children }) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchContent = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/site-content`);
      if (response.ok) {
        const data = await response.json();
        setContent(data);
      }
    } catch (err) {
      console.error('Failed to fetch content:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  useEffect(() => {
    if (content?.settings) {
      if (content.settings.siteName) {
        document.title = `${content.settings.siteName} – Best Playschool, Pre-KG & Daycare in Chithode 🐻`;
      }
      if (content.settings.favicon) {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
          link = document.createElement('link');
          link.rel = 'icon';
          document.head.appendChild(link);
        }
        link.href = content.settings.favicon;
      }
    }
  }, [content]);

  const refreshContent = () => {
    setLoading(true);
    fetchContent();
  };

  return (
    <ContentContext.Provider value={{ content, loading, refreshContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export const useContent = () => useContext(ContentContext);
