import { jwt, JWT_SECRET } from "@repo/backend-common";
import { Router } from "express";

const routes = Router();

routes.post("/signup", async (req, res) => {
  res.json({
    userId: "123",
  });
});

routes.post("/signin", async (req, res) => {
  const userId = 1;
  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET,
  );

  return res.json({
    token,
  });
});

// doing room here for now

routes.post("/create-room", async (req, res) => {
  res.json({
    roodId: 123,
  });
});

export const AuthRoutes = routes;
