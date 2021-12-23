class InvAPI {
  microverseInvolvement = {
    APIKey: 'jO96LQf9ZZkhY1OlDSZo',
    microverseURL: 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
    passOptions: (objOption) => {
      const options = {
        method: `${objOption}`,
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      };
      return options;
    },
    basicCall2Api: async (method, query, bodyObj) => {
      const url = `${this.microverseInvolvement.microverseURL}${this.microverseInvolvement.APIKey}/${query}`;
      const options = this.microverseInvolvement.passOptions(method);
      options.body = JSON.stringify(bodyObj);
      const response = await fetch(url, options);
      if (method === 'POST') {
        return response.text();
      }
      return response.json();
    },
    postLike: (cardId) => {
      const bodyObj = {
        item_id: cardId,
      };
      return this.microverseInvolvement.basicCall2Api('POST', 'likes', bodyObj);
    },
    getLikes: () => this.microverseInvolvement.basicCall2Api('GET', 'likes'),
    postComment: (commentObj) => this.microverseInvolvement.basicCall2Api('POST', 'comments', commentObj),
    getComments: (cardId) => this.microverseInvolvement.basicCall2Api('GET', `comments?item_id=${cardId}`),
  }
}

const DataAPI = new InvAPI();
// eslint-disable-next-line import/prefer-default-export
export { DataAPI };