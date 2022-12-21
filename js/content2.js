const DMF_CSS = `font-weight: bold; color: deepskyblue;`;

function start() {
    console.log("%cDarkMode Forcer: Walking through all CSS rules in this document...", DMF_CSS);

    let count = 0;
    let trule = 0;

    for (let i = 0; i < document.styleSheets.length; i++) {
        const rules = document.styleSheets[i].rules;

        for (let j = 0; j < rules.length; j++) {
            const cond = rules[j].conditionText;
            const cStr = rules[j].cssText;

            if (cond && cond.includes("prefers-color-scheme") && cond.includes("dark")) {
                console.log(`%cDarkMode Forcer: Found media query: StyleSheets[${i}][${j}]`, DMF_CSS);

                const nStr = `@media screen {${cStr.split("{\n")[1].trim().split(";").join("!important;")}`;

                let ss = document.createElement("style");

                ss.innerText = nStr;
                document.body.append(ss);

                count++;
            }

            trule++
        }
    }

    console.log(`%cDarkMode Forcer: Done! ${count}/${trule} rules out of ${document.styleSheets.length} stylesheets processed.`, DMF_CSS);
}

start();