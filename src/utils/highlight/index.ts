import Prism from "prismjs";
import prism from "prismjs";
import loadLanguages from "prismjs/components/";

export default function Highlight(code: string) {
    loadLanguages(["markup"]);
    code = prism.highlight(code, Prism.languages.markup, "markup");
    return wrap(code);
}

function wrap(code: string) {
    return `<pre v-pre><code>${code}</code></pre>`;
}
