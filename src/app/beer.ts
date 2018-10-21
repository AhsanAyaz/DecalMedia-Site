export class BeerSize {
  beer_available_in_id: string;
  created_at: string;
  created_by: string;
  id: number;
  is_bottled: string;
  is_tap: string;
  name: string;
  price: string;
  updated_at: string;
  updated_by: string;
  venue_beer_id: string;
  volume: number;
}

export class Beer {
    id: number;
    abv: string;
    beer_name: string;
    img: string;
    brewery: string;
    status: string;
    sizes: Array<BeerSize>;
    style: Array<string>;
    constructor () {
    }
}
