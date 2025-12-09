import { useEffect, useState } from "react";
import type { User } from "../types";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);

    fetch("/api/users")
      .then((res) => res.json())
      .then((json) => {
        if (!cancelled && Array.isArray(json.users)) {
          setUsers(json.users);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setUsers([]);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { users, isLoading };
}
