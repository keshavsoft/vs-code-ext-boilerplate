// src/.../services/copyTemplate.js
import { simpleWithUi } from "@keshavsoft-org/express-todo";

export function copyTemplate({ targetPath }) {
    simpleWithUi({
        isAnnounce: true, showLog: true,
        inProcessPath: targetPath
    });
};