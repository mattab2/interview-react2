
/**
 * List all activities
 * @constructor
 */
export const ActivityListGet = () => {
  let data = sessionStorage.getItem('items');
  if (!data) {
    return [];
  }

  data = JSON.parse(data);
  return data;
};

/**
 * List all activities
 * @constructor
 */
export const ActivityListSet = (items) => {
  sessionStorage.setItem('items', JSON.stringify(items));
};
