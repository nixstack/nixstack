import axios from 'axios'

export class SearchUtil {
  static async search(value: string) {
    try {
      const result = await axios({
        url: `/api/search/model`,
      })
      return result.data
    } catch (error) {
      console.log(error)
    }
  }
}
