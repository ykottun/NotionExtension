class NotionClient {  
    constructor(apikey) {
        this.apikey = apikey;
        this.baseUrl = "https://api.notion.com/v1/";
        this.headers = {
            "Authorization": `Bearer ${this.apikey}`,
            "Notion-Version": "2022-06-28",
            "Content-Type": "application/json"
            }
    }

    request(endpoint, method = "GET", body = {}) {

        const options = {
            method: method,
            headers: this.headers
        }

        if (Object.keys(body).length !== 0) {
            options.payload = JSON.stringify(body);
        }

        try {
            const response = UrlFetchApp.fetch(`${this.baseUrl}${endpoint}`, options);
            return JSON.parse(response.getContentText());
        } catch (error) {
            Logger.log("Request Error: " + error.message);
            return null;   
        }
    }

}