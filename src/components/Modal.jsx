import DIALogo from "../images/DIA.png";

export function Modal({ selectedData, open, close }) {
  //create an array of all of the values
  const arrayData = selectedData && Object.values(selectedData);

  return (
    //   Backdrop
    <div
      onClick={close}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      {/* Modal */}
      <div
        className={`bg-white rounded shadow p-6 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <div className="text-center w-100">
          <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            Selected State: {arrayData && arrayData[1]}
          </h3>
          <div className="min-w-full divide-y divide-gray-200">
            {arrayData && (
              <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 text-left">
                <li>Population: {arrayData[2].toLocaleString()}</li>
                <li>Vehicle Miles Traveled: {arrayData[3].toLocaleString()}</li>
                <li>Fatal Crashes: {arrayData[4].toLocaleString()}</li>
                <li>Deaths: {arrayData[5].toLocaleString()}</li>
                <li>Deaths per 100K: {arrayData[6].toLocaleString()}</li>
                <li>
                  Deaths per 100m miles traveled:{" "}
                  {arrayData[7].toLocaleString()}
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
