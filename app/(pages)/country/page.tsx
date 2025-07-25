export default function Country() {
  return (
    <div className="flex flex-col rounded-md">
      <div className="bg-amber-100 w-full h-10"></div>
      <div className="flex flex-col p-8">
        <h2>Germany</h2>
        <ul className="flex flex-col gap-8s">
          <li className="text-gray-600">Population: 81,990,000</li>
          <li className="text-gray-600">Region: Europe</li>
          <li className="text-gray-600">Capital: Berlins</li>
        </ul>
      </div>
    </div>
  );
}
