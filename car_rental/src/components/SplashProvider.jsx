"use client";
import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";

export default function SplashProvider({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SplashScreen />;

  return <>{children}</>;
}
