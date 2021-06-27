import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { createComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";
import { createListUserSender } from "./controllers/ListUserSenderComplimentsController";
import { createListUserReceiver } from "./controllers/ListUserReceiveComplimentsController";
import { createListTags } from "./controllers/ListTagsController";
import { createListUsers } from "./controllers/ListUsersController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createUserCompliment = new createComplimentController();
const listUserSender = new createListUserSender();
const listUserReceiver = new createListUserReceiver();
const listTags = new createListTags();
const listAllUsers = new createListUsers();

router.post(
    "/tags", 
    ensureAuthenticate, 
    ensureAdmin, 
    createTagController.handle); // -> (caminho, middleware, requisição)

router.post(
    "/users", 
    createUserController.handle);

router.post("/authenticate", 
authenticateUserController.handle);

router.post("/compliments", 
ensureAuthenticate,
createUserCompliment.handle);

router.get("/users/compliments/send", ensureAuthenticate, listUserSender.handle);
router.get("/users/compliments/receive", ensureAuthenticate, listUserReceiver.handle);
router.get("/tags/tags-compliments", ensureAuthenticate, listTags.handle)

router.get("/all-users", ensureAuthenticate, listAllUsers.handle)
export {router}