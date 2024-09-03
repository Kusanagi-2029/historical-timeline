import { TimelinePeriod } from '../types/timeLineBlocks.types';
import { mockData } from './__mock__/mockData';

/**
 * Функция, эмулирующая GET-запрос с задержкой в 500мс
 * @async
 * @function getTimelineData
 * @returns {Promise<TimelinePeriod[]>} - Промис, разрешающийся массивом объектов TimelinePeriod.
 */
export const getTimelineData = async (): Promise<TimelinePeriod[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockData);
    }, 500);
  });
};
