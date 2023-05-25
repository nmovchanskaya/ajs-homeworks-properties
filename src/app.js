export default function orderByProps(obj, properties) {
  const propsSorted = [];
  let props = [];

  for (const prop in obj) {
    props.push({ key: prop, value: obj[prop] });
  }

  // looking for properties from input list
  properties.forEach((item) => {
    const result = props.filter((itemProps) => itemProps.key === item);

    // push and delete them from initial array if found
    if (result[0]) {
      propsSorted.push(result[0]);
      props = props.filter((itemProps) => itemProps.key !== item);
    }
  });

  // sorting the rest of properties in initial array
  if (props.length > 0) {
    props.sort((a, b) => {
      if (a.key < b.key) {
        return -1;
      }
      return 0;
    });
  }

  propsSorted.push(...props);
  return propsSorted;
}

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};
const result = orderByProps(obj, ['name', 'level']);
