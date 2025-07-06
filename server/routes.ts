import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes can be added here if needed for future functionality
  // Currently serving as a static bridal website

  const httpServer = createServer(app);

  return httpServer;
}
