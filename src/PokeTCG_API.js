class Poke_API {
    TCGpokemon = {
      PokeURL = 'https://api.pokemontcg.io/v2/cards?q=',  
      passOptions: (objOption) => {
        const options = {
          method: `${objOption.method}`,
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        };
        return options;
      },  
      basicCall2Api: async (query) => {
        const url = this.TCGpokemon.PokeURL + query;
        const options = this.TCGpokemon.passOptions('GET');
        const response = await fetch(url, options);
        return response.json();
      },  
      getAllCards: () => this.TCGpokemon.basicCall2Api('set.id:swsh1'),  
      getCardbyId: (cardId) => this.TCGpokemon.basicCall2Api(`id:${cardId}`),
    }
  }
  
  export { Poke_API };