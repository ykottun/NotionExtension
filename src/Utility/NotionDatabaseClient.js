class NotionDatabaseClient extends NotionClient{
    constructor(apikey,databaseId) {
        super(apikey);
        this.databaseId = databaseId;
    }

    createDatabase(parent = {}, title = [], properties = {}) {

        let body = {};

        if (Object.keys(parent).length !== 0) {
            body.parent = parent;
        }

        if (title.length !== 0) {
            body.title = title;
        }

        if (Object.keys(properties).length !== 0) {
            body.properties = properties;
        }

        return this.request(`databases/${this.databaseId}/query`, "POST", body);
    }

    queryDatabase(filter = {}, sorts = [], startCursor = null, pageSize = null) {

        let body = {};

        if (Object.keys(filter).length !== 0) {
            body.filter = filter;
        }

        if (sorts.length !== 0) {
            body.sorts = sorts;
        }

        if (startCursor !== null) {
            body.startCursor = startCursor;
        }

        if (pageSize !== null) {
            body.pageSize = pageSize;
        }

        return this.request(`databases/${this.databaseId}/query`, "POST", body);
    }

    retrieveDatabase() {

        let body = {};

        return this.request(`databases/${this.databaseId}/query`, "GET", body);
    }

    updateDatabase(title = [], description = [], properties = {}) {

        let body = {};

        if (title.length !== 0) {
            body.title = title;
        }

        if (description.length !== 0) {
            body.description = description;
        }

        if (Object.keys(properties).length !== 0) {
            body.properties = properties;
        }

        return this.request(`databases/${this.databaseId}/query`, "PATCH", body);
  
    }

}