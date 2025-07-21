import type { Express } from "express";
import { createServer, type Server } from "http";
import express from "express";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static assets from attached_assets directory
  app.use('/attached_assets', express.static(path.resolve(import.meta.dirname, '..', 'attached_assets')));

  // API routes can be added here if needed for future functionality
  // Currently serving as a static bridal website

  const httpServer = createServer(app);

  return httpServer;
}
