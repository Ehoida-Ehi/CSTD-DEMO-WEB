import { createContext, useContext, useState } from "react";

const EventsSidebarContext = createContext();

export function EventsSidebarProvider({ children }) {
  const [eventsSidebarOpen, setEventsSidebarOpen] = useState(false);

  return (
    <EventsSidebarContext.Provider value={{ eventsSidebarOpen, setEventsSidebarOpen }}>
      {children}
    </EventsSidebarContext.Provider>
  );
}

export function useEventsSidebar() {
  const ctx = useContext(EventsSidebarContext);
  if (!ctx) {
    throw new Error("useEventsSidebar must be used within EventsSidebarProvider");
  }
  return ctx;
}
