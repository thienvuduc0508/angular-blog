export class GlobalContext {
    static storageImpl: any;

    static initialize() {
        this.storageImpl = GlobalContext.getStorage();
    }

    private static getStorage() {
        if (GlobalContext.storageImpl) return GlobalContext.storageImpl;
        try {
            localStorage.setItem("storage", "");
            localStorage.removeItem("storage");
            return localStorage;
        }
        catch (err) {
            return new LocalStorageAlternative();
        }
    }

    public static setLang(lang: string): void {
        this.storageImpl.setItem("lang", lang);
    }

    public static getLang(): string {
        let lang = this.storageImpl.getItem("lang");
        if (!lang) {
            lang = "en-us";
            GlobalContext.setLang(lang);
        }

        return lang;
    }
}

class LocalStorageAlternative {
    structureLocalStorage: any = {};

    constructor() {

    }

    setItem(key: string, value: any) {
        this.structureLocalStorage[key] = value;
    }

    getItem(key: string) {
        if (typeof this.structureLocalStorage[key] != 'undefined') {
            return this.structureLocalStorage[key];
        }
        else {
            return null;
        }
    }

    removeItem(key: string) {
        this.structureLocalStorage[key] = undefined;
    }
}

GlobalContext.initialize();