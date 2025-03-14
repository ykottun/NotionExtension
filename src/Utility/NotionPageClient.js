class NotionPageClient extends NotionClient{
    constructor(apikey,pageId) {
        super(apikey);
        this.pageId = pageId;
    }

    createPage(parent = {}, properties = {}, children = [], icon = {}, cover = {}) {
        
        let body = {};

        if (Object.keys(parent).length !== 0) {
            body.parent = parent;
        }

        if (Object.keys(properties).length !== 0) {
            body.properties = properties;
        }

        if (children.length !== 0) {
            body.children = children;
        }

        if (Object.keys(icon).length !== 0) {
            body.icon = icon;
        }

        if (Object.keys(cover).length !== 0) {
            body.cover = cover;
        }

        return this.request(`pages/${this.pageId}`, "POST", body);        
    }

    /*
    retrievePagePropertyItem() {
        return this.request(`pages/${this.pageId}`, "GET", properties);        
    }
    */

    updatePage(properties = {}, inTrash = false, icon = {}, cover = {}) {

        let body = {};

        if (Object.keys(properties).length !== 0) {
            body.properties = properties;
        }

        if (inTrash) {
            body.archived = true;
        }

        if (Object.keys(icon).length !== 0) {
            body.icon = icon;
        }

        if (Object.keys(cover).length !== 0) {
            body.cover = cover;
        }

        return this.request(`pages/${this.pageId}`, "PATCH", body);
    }
}