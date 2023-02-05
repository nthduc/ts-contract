// Find all our documentation at https://docs.near.org
import { NearBindgen, near, call, view, LookupMap, initialize } from 'near-sdk-js';

@NearBindgen({})
class K10NFTContract {
  owner_id: string;
  owner_by_id: LookupMap<string>;

  constructor(){
    this.owner_id = "";
    this.owner_by_id = new LookupMap<string>("duc");
  }

  @initialize({})
  init({owner_id,owner_by_id_prefix}){
    this.owner_id = owner_id;
    this.owner_by_id = new LookupMap<string>(owner_by_id_prefix);
  }
}