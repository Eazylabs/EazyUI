function time(timer) {
  const hours = Math.floor(timer / 3600);
  const minutes = Math.floor((timer % 3600) / 60);
  const seconds = Math.floor(timer % 60);

  return { hours, minutes, seconds };
}

export default time;
