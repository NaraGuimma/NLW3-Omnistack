import House from '../models/House';
import imagesView from './images_view';

export default {
  render(house: House) {
    return {
      id: house.id,
      name: house.name,
      latitude: house.latitude,
      longitude: house.longitude,
      about: house.about,
      instructions: house.instructions,
      opening_hours: house.opening_hours,
      open_on_weekends: house.open_on_weekends,
      images: imagesView.renderMany(house.images),
    };
  },
  renderMany(houses: House[]) {
    return houses.map((house) => this.render(house));
  },
};
