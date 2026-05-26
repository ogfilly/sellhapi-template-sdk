export type ComponentCategory = "layout" | "commerce" | "navigation" | "data" | "utilities";
export type PageContextType = "home" | "category" | "all-products" | "sale" | "collection" | "section" | "product" | "*";
export interface ComponentImport {
    source: string;
    named?: string[];
    default?: string;
}
export interface ComponentMeta {
    id: string;
    name: string;
    description: string;
    category: ComponentCategory;
    pageContexts: PageContextType[];
    requiredProps: Array<"vendor" | "config" | "homepage" | "navigation" | "announcements" | "footer" | "page">;
    imports: ComponentImport[];
    insertSnippet: string;
    sdkVersion: string;
}
export declare function defineMeta(meta: ComponentMeta): ComponentMeta;
//# sourceMappingURL=component.d.ts.map