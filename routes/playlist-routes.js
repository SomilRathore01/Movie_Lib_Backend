import express from "express";
import { NewPlaylists, deleteMoviefromPlaylist, deletePlaylist, moviesinPlaylist, newIteminPlaylist, playlistofUser } from "../controllers/playlist-controller.js";

const playlistRouter = express.Router();


playlistRouter.post("/newlist", NewPlaylists);
playlistRouter.post("/:id", newIteminPlaylist);
playlistRouter.delete("/:id", deleteMoviefromPlaylist);
playlistRouter.get("/user/:id", playlistofUser);
playlistRouter.get("/:id", moviesinPlaylist);
playlistRouter.delete("/delete/:id", deletePlaylist);

export default playlistRouter;