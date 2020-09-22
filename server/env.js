import path from "path";
import dotenv from "dotenv";

process.env.FFMPEG_PATH = path.normalize("C:/ffmpeg/bin/ffmpeg.exe");
dotenv.config();
