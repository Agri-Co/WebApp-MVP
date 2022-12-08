import Server from "./server";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const server = new Server(
  Number(process.env.PORT),
  String(process.env.HOST),
  String(process.env.METHOD)
);

server.run();
