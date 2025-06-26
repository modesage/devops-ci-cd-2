import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", async (socket) => {
    try {
        await client.user.create({
            data: {
                username: "usernameWS",
                password: "passwordWS"
            }
        });
        socket.send("Hi there! You are connected to the server!");
    } catch (err) {
        console.error("Error creating user:", err);
        socket.send("Error occurred while creating user.");
    }
});
