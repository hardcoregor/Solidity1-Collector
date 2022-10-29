import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xF6fC37Cb7540e567848fa2459D05D2e573d6bAcd'
);

export default instance;