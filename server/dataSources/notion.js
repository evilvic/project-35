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

  async queryDatabase(db, body) {
    return await this.post(`/databases/${db}/query`, body)
  }

}

module.exports = NotionAPI