
for (let j = 0; j < rules.length; j++) {
    const cond = rules[j].conditionText;
    const cStr = rules[j].cssText
    if (cond && cond.includes("prefers-color-scheme") && cond.includes("dark")) {
        const nStr = `@media screen {\n${cStr.split("{\n")[1].trim().split(";").join("!important;")}`;

        let ss = document.createElement("style");
        ss.innerText = nStr;
        document.body.append(ss);
    }

    if (cond && cond.includes("prefers-color-scheme") && cond.includes("light")) {
        document.styleSheets[i].removeRule(rules[j]);
        console.warn(`DarkMode Forcer: Attempted to remove 'prefers-color-scheme: light' CSS query: c(${i}), r(${j})`);
    }
}