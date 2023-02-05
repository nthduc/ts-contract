// Find all our documentation at https://docs.near.org
import { call, NearBindgen } from 'near-sdk-js';
import { AccountId } from 'near-sdk-js/lib/types';

type TokenId = string;

@NearBindgen({})
class Token {
  token_id: TokenId;
  owner_id: AccountId;

  constructor(token_id: TokenId, owner_id: AccountId){
    this.token_id = token_id;
    this.owner_id = owner_id;
  }

  @call({})
  mint_nft({token_id, token_owner_id}){
    
  }

}