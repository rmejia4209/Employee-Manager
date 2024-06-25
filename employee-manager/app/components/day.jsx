

export default function Day({day}) {

  let style = 'text-sm ';
  if (day.dayType === 'holder') {
    style += 'text-gray-400';
  } else {
    style += 'text-black';
  }

  return (
    <p className={style}  >
      {day.date}
    </p>
  );
}