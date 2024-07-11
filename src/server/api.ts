export { };
const express = require('express');
const apiRouter = express.Router();

const { requireUser } = require("./utils")

const jwt = require("jsonwebtoken")

require("dotenv").config();
const { JWT_SECRET } = process.env

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const bcrypt = require("bcrypt");
const SALT_COUNT = 10;

import { Request, Response, NextFunction } from 'express';

//May add other routes at later time...

module.exports = apiRouter;