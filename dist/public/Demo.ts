import { ref } from "vue"
/**
 * 获取单例
 * @param callback 回调函数
 */
export function GetSingle<R>(callback: (...args: any[]) => R) {
    let instance: R;

    return function () {
        if (instance) return instance;
        else {
            return (instance = callback());
        }
    };
}
/**
 * 防抖立即执行
 * @param callback 回调函数
 * @param callback2 不受防抖影响
 */
export function DebounceImmediately(callback: CallBack, delay: number, callback2?: CallBack) {
    let open = true; // 节流阀
    let t: NodeJS.Timeout;

    return function () {
        if (callback2) callback2();
        if (open) {
            callback();
            open = false;
        }
        if (t) clearTimeout(t);
        t = setTimeout(() => {
            open = true;
        }, delay);
    };
}
export default function main() {
    const nodes = {
        article: ref<HTMLElement>()
    }

    return { nodes }
}
type CallBack = () => void;
