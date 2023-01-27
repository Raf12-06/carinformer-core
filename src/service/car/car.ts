import { CarEntity } from '../database/tables/Car/CarEntity';

export const createCar = async (data: {
    mark: string
    mark_description: string
    model: string
    modification: string

    engine_name: string
    engine_volume: string
    engine_horsepower: number
    engine_mediumExpense: number
}): Promise<CarEntity> => ({
    id: 0,
    markModelId: 0,
    engineId: 0
})
