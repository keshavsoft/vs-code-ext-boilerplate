// src/.../services/copyTemplate.js
import { simple } from "@keshavsoft-org/express-todo";

export function copyTemplate({ targetPath }) {
    simple({
        isAnnounce: true, showLog: true,
        inProcessPath: targetPath
    });
};