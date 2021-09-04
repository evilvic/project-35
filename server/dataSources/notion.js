require('dotenv').config()
const { RESTDataSource } = require('apollo-datasource-rest')

const url = 'https://api.notion.com/v1'
const token = `Bearer ${process.env.NOTION_API_TOKEN}`
const version = '2021-08-16'

class NotionAPI extends RESTDataSource {

  constructor() {
    super()
    this.baseURL = url
  }

  willSendRequest(request) {
    request.headers.set('Authorization', token)
    request.headers.set('Notion-Version', version)
  }

  async queryDatabase() {
    return await this.post('/databases/966ad8cc8faf4695b3743f22efbc6d99/query')
  }

}

module.exports = NotionAPI