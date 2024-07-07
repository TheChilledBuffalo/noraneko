import { insert } from "@nora/solid-xul";
import { ContextMenu } from "./context-menu.tsx";

export function initSplitView() {
    insert(
        document.querySelector("#tabContextMenu"),
        () => <ContextMenu />,
        document.querySelector("#context_selectAllTabs")
    );
    Services.prefs.setBoolPref("floorp.browser.splitView.working", false);
}