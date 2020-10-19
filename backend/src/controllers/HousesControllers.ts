import { Request, Response } from 'express';

import { getRepository } from 'typeorm';
import House from '../models/House';
import houseView from '../views/houses_view';

import * as Yup from 'yup';

export default {
  async index(request: Request, response: Response) {
    const housesRepository = getRepository(House);

    const houses = await housesRepository.find({
      relations: ['images'],
    });

    return response.json(houseView.renderMany(houses));
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const housesRepository = getRepository(House);

    const house = await housesRepository.findOneOrFail(id, {
      relations: ['images'],
    });

    return response.json(houseView.render(house));
  },
  async create(request: Request, response: Response) {
    // console.log(request.files);
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;

    const housesRepository = getRepository(House);

    const requestImages = request.files as Express.Multer.File[];
    const images = requestImages.map((image) => {
      return { path: image.filename };
    });

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends: open_on_weekends == 'true',
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const house = housesRepository.create(data);
    await housesRepository.save(house);

    return response.status(201).json(house);
  },
};
