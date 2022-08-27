import fs from "fs";
import path from "path";

export default function FindExamplesFolderDir(dir: string): string {
    const docsDir = findDocsFolderDir(dir);
    const examplesDir = breadthTraversal(docsDir);
    return examplesDir;
}
/**
 * 截断dir返回包含docs路径
 * @param dir 绝对路径
 * @returns docs绝对路径，忽略大小写
 */
function findDocsFolderDir(dir: string): string {
    const res = dir.match(/(.*docs)/i);
    if (res) return res[0];
    throw Error("can not find docs folder, does it exist? you can specify the example directory");
}
/**
 * 从当前绝对路径找docs
 * @param dir 绝对路径
 * @returns examples绝对路径，忽略大小写
 */
function breadthTraversal(dir: string): string {
    let counter = 0; // counter 防止死循环
    const dirs = [dir];
    while (dirs.length > 0 && counter < 200) {
        const folders = fs.readdirSync(dirs[0]);
        for (let i = 0; i < folders.length; i++) {
            dir = path.resolve(dirs[0], folders[i]);
            if (folders[i].toLowerCase() === "examples") return dir;
            if (fs.statSync(dir).isDirectory()) dirs.push(dir);
        }
        dirs.shift();
        counter++;
    }
    return "";
}
