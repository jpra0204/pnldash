import { useEffect, useState } from "react";

export function useSettings() {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setSettings({ workspace: "Acme Inc.", timezone: "UTC" });
      setIsLoading(false);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return { settings, isLoading };
}
