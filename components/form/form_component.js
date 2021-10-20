import { useState } from "react";

export const FormComponent = () => {
  const [wineInputs, setWineInputs] = useState({
    fixed_acidity: 6.7,
    volatile_acidity: 0.32,
    citric_acid: 0.44,
    residual_sugar: 2.4,
    chlorides: 0.061,
    free_sulfur_dioxide: 24.0,
    total_sulfur_dioxide: 34.0,
    density: 0.99484,
    ph: 3.29,
    sulphates: 0.8,
    alcohol: 11.6,
    // if our model_to_run is true then we run RF else we will run KNN
    model_to_run: true,
  });

  const [prediction, setPrediction] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const [loading, setLoading] = useState(false);

  // below is the base code for a post request to our API
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // wine-quality-prediction-app.vercel.app/:1 Access to fetch at 'https://wine-quality-ml-api.herokuapp.com/api/prediction/' from origin
    // 'https://wine-quality-prediction-app.vercel.app' has been blocked by CORS policy: Request header field access-control-allow-origin is not
    // allowed by Access-Control-Allow-Headers in preflight response.

    const options = {
      method: "POST",
      body: JSON.stringify(wineInputs),
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "POST, OPTIONS",
        // "Access-Control-Allow-Headers": "*",
      },
    };

    fetch(`${process.env.PRODUCTION_BASE_URL}/api/prediction/`, options)
      .then((res) => res.json())
      .then((response) => {
        setPrediction(response["quality"][0]);
        setConfidence(response["confidence"]);
        setLoading(false);
      })
      .catch((error) => console.log(error.message));
  };

  const handleModelChoice = (e) => {
    setWineInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleChange = (e) => {
    setWineInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="border border-red-900 rounded-2xl shadow-lg m-5">
      <h3 className="font-thin text-3xl text-center pt-2">
        Red Wine Quality Prediction Tool
      </h3>
      <form onSubmit={handleOnSubmit}>
        <div className="flex flex-row flex-wrap justify-center pt-3">
          <div className="p-7">
            <div className="text-center pb-4">
              <div className="text-xl font-extralight">
                choose prediction algorithm <br />{" "}
                <span className="text-sm font-normal">
                  (random forest is recommended)
                </span>
              </div>
            </div>
            <label
              htmlFor="toggle"
              className={`text-gray-700 transform duration-500 ease-in-out pr-3 cursor-pointer ${
                !wineInputs.model_to_run
                  ? "text-green-900 font-bold text-lg"
                  : "text-gray-700 text-md"
              }`}
            >
              K-Nearest Neighbor
            </label>
            <div className="relative inline-block w-16 mr-2 align-middle select-none transform transition-all duration-900 ease-in-out">
              <input
                name="model_to_run"
                id="toggle"
                type="checkbox"
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                checked={wineInputs.model_to_run}
                onChange={handleModelChoice}
              />
              <label
                htmlFor="toggle"
                className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
            <label
              htmlFor="toggle"
              className={`text-gray-700 transition-all transform duration-200 ease-in-out cursor-pointer ${
                wineInputs.model_to_run
                  ? "text-green-900 font-bold text-lg"
                  : "text-gray-700 text-md"
              }`}
            >
              Random Forest Classifier
            </label>
          </div>
        </div>
        <div className="text-center pt-8">
          <div className="text-xl font-extralight">adjust inputs</div>
        </div>
        <div className="flex flex-wrap flex-row content-start justify-evenly pt-5 ">
          <div className="p-7">
            <div className="text-center">
              <div>Fixed Acidity</div>
              <div>{wineInputs.fixed_acidity}</div>
            </div>
            <input
              name="fixed_acidity"
              type="range"
              min={4.5}
              max={16.0}
              step={0.01}
              value={wineInputs.fixed_acidity}
              onChange={handleChange}
            />
          </div>
          <div className="p-7">
            <div className="text-center">
              <div>Volatile Acidity</div>
              <div>{wineInputs.volatile_acidity}</div>
            </div>
            <input
              name="volatile_acidity"
              type="range"
              min={0.12}
              max={1.58}
              step={0.00001}
              value={wineInputs.volatile_acidity}
              onChange={handleChange}
            />
          </div>
          <div className="p-7">
            <div className="text-center">
              <div>Citric Acid</div>
              <div>{wineInputs.citric_acid}</div>
            </div>
            <input
              name="citric_acid"
              type="range"
              min={0.0}
              max={1.0}
              step={0.01}
              value={wineInputs.citric_acid}
              onChange={handleChange}
            />
          </div>
          <div className="p-7">
            <div className="text-center">
              <div>Residual Sugar</div>
              <div>{wineInputs.residual_sugar}</div>
            </div>
            <input
              name="residual_sugar"
              type="range"
              min={0.9}
              max={15.5}
              step={0.01}
              value={wineInputs.residual_sugar}
              onChange={handleChange}
            />
          </div>
          <div className="p-7">
            <div className="text-center">
              <div>Chlorides</div>
              <div>{wineInputs.chlorides}</div>
            </div>
            <input
              name="chlorides"
              type="range"
              min={0.012}
              max={0.611}
              step={0.001}
              value={wineInputs.chlorides}
              onChange={handleChange}
            />
          </div>
          <div className="p-7">
            <div className="text-center">
              <div>Free Sulfur Dioxide</div>
              <div>{wineInputs.free_sulfur_dioxide}</div>
            </div>
            <input
              name="free_sulfur_dioxide"
              type="range"
              min={1.0}
              max={72.0}
              step={1}
              value={wineInputs.free_sulfur_dioxide}
              onChange={handleChange}
            />
          </div>
          <div className="p-7">
            <div className="text-center">
              <div>Total Sulfur Dioxide</div>
              <div>{wineInputs.total_sulfur_dioxide}</div>
            </div>
            <input
              name="total_sulfur_dioxide"
              type="range"
              min={6.0}
              max={289.0}
              step={1}
              value={wineInputs.total_sulfur_dioxide}
              onChange={handleChange}
            />
          </div>
          <div className="p-7">
            <div className="text-center">
              <div>Density</div>
              <div>{wineInputs.density}</div>
            </div>
            <input
              name="density"
              type="range"
              min={0.99007}
              max={1.00369}
              step={0.00001}
              value={wineInputs.density}
              onChange={handleChange}
            />
          </div>
          <div className="p-7">
            <div className="text-center">
              <div>pH</div>
              <div>{wineInputs.ph}</div>
            </div>
            <input
              name="ph"
              type="range"
              min={2.74}
              max={4.01}
              step={0.01}
              value={wineInputs.ph}
              onChange={handleChange}
            />
          </div>
          <div className="p-7">
            <div className="text-center">
              <div>Sulphates</div>
              <div>{wineInputs.sulphates}</div>
            </div>
            <input
              name="sulphates"
              type="range"
              min={0.33}
              max={2.0}
              step={0.01}
              value={wineInputs.sulphates}
              onChange={handleChange}
            />
          </div>
          <div className="p-7">
            <div className="text-center">
              <div>Alcohol</div>
              <div>{wineInputs.alcohol}</div>
            </div>
            <input
              className="slider"
              name="alcohol"
              type="range"
              min={8.4}
              max={14.9}
              step={0.1}
              value={wineInputs.alcohol}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="p-5 text-center ">
          <button
            type="submit"
            className="bg-green-500 text-white py-3 px-7 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:skew-x-2 hover:-skew-y-2 whitespace-nowrap"
          >
            submit model inputs
          </button>
        </div>
      </form>
      <div className="text-center">
        <div>based on the above inputs this wine is predicted to be ...</div>
        {prediction == null && <div>(*hint: press the submit button)</div>}
        {loading && (
          <div className="flex justify-items-center justify-center">
            <svg class="animate-spin h-10 w-10 mr-3" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50" />
            </svg>
          </div>
        )}
        {prediction == 1 && !loading && (
          <div className="p-5 text-3xl font-semibold text-green-900">Good</div>
        )}
        {prediction == 0 && !loading && (
          <div className="p-5 text-3xl font-semibold text-red-900">Bad</div>
        )}
      </div>
      <div className="text-center">
        {confidence && !loading && (
          <div>
            {/* <div>
              based on the above inputs this wine is predicted to be ...
            </div> */}
            <div className="p-5 text-3xl font-semibold">
              This wine has a{" "}
              <span className="font-bold text-red-900">
                {parseFloat(confidence[0] * 100).toFixed(2)}
              </span>
              % chance of being 'bad'
            </div>
            <div className="p-5 text-3xl font-semibold">
              and a{" "}
              <span className="font-bold text-green-900">
                {parseFloat(confidence[1] * 100).toFixed(2)}
              </span>
              % of being 'good'
            </div>
          </div>
        )}
      </div>
      {/* <img src="/assets/ph_vol.svg" /> */}
    </div>
  );
};
