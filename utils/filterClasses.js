export function filterClasses(
  classes,
  {
    search,
    category,
    difficulty,
    sort,
  }
) {
  let filtered = [...classes];

  if (search) {
    filtered = filtered.filter((item) =>
      item.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }

  if (category) {
    filtered = filtered.filter(
      (item) => item.category === category
    );
  }

  if (difficulty) {
    filtered = filtered.filter(
      (item) => item.difficulty === difficulty
    );
  }

  switch (sort) {
    case "price-low":
      filtered.sort((a, b) => a.price - b.price);
      break;

    case "price-high":
      filtered.sort((a, b) => b.price - a.price);
      break;

    case "rating":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
  }

  return filtered;
}