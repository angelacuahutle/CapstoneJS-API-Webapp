import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './css/bootstrap.min.css';
import './css/style.css';


class Inv_API {
  InvolvementURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jO96LQf9ZZkhY1OlDSZo/likes';
  API_KEY = 'jO96LQf9ZZkhY1OlDSZo';
  baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

    passOptions = (objOption) => {
      const options = {
        method: `${objOption}`,
        bodyObj
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        headers: {
          'Content-Type': `application/json`,
        },
      };
      return options;
    };

    basicCall2Api = async (method, query, bodyObj) => {
      const url = this.Inv_API.baseURL + this.Inv_API.API_KEY + '/' + query;
      console.log(url);
      const options = this.Inv_API.passOptions(method);
      console.log(bodyObj);
      options.body = bodyObj;
      //options.body = JSON.stringify(bodyObj);
      console.log(options);
      const response = await fetch(url, options);
      if (method === 'POST') {
        console.log('Entering POST');
        return response.text();
      } else {
        console.log('Another method');
        return response.json();
      }
    };

  getLike = () => {
      this.Inv_API.basicCall2Api('GET', 'likes');
    },
    postLike = (cardId) => {
      const bodyObj = {
        item_id: cardId,
      };
      return this.Inv_API.basicCall2Api('POST', 'likes', bodyObj);
    };

    getComments = (cardId) => this.Inv_API.basicCall2Api('GET', `comments?item_id=${cardId}`),

    postComment = (commentObj) => this.Inv_API.basicCall2Api('POST', 'comments', commentObj),
  }
}

const InvAPI = new Inv_API();
export {
  InvAPI
};

//  getCardSetSwShbyId: (cardId) => this.TCGpokemon.basicCall2Api(`id:${cardId}`),
//  getTwelveCardsSwSh: () => this.TCGpokemon.basicCall2Api('set.id:swsh1&pageSize=12'),