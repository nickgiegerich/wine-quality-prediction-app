export default function Header() {
  return (
    <div>
      <div className="section parallax bg md:h-full lg:h-screen ">
        <div className="bg-white bg-opacity-90 shadow-lg md:w-full lg:w-2/3 text-center rounded-md text-black mt-16 lg:mt-64 pb-10 pt-4">
          <div className="text-4xl font-light">
            Wine Quality Prediction Tool
          </div>
          <div className="font-semibold italic">
            Vinho Co Português na América (Vinho Co.)
          </div>
          <div className="px-14 pt-11 font-sans">
            This data application serves the purpose of discovering the
            physicochemical properties that characterize a wines quality. This
            can help serve as a tool for better decision making as{" "}
            <span className="italic">Vinho Co.</span> makes the move to the
            American wine market.
          </div>
          <div className="px-14 pt-5 font-sans">
            In the given data set, which can be found{" "}
            <a
              className="underline text-blue-900"
              href="https://www.kaggle.com/uciml/red-wine-quality-cortez-et-al-2009"
              rel="noopener noreferrer"
              target="_blank"
            >
              here
            </a>
            , we are given roughly 1600 different wine inputs and their
            corresponding quality output. The output scores for wines range from
            3 to 8, with 8 being the highest score. For the purpose of this
            project I have broken the wines into two categories 'bad' and
            'good', where 'bad' is any wine with a score lower than 6 and a
            'good' wine is anything above 6.
          </div>
          <div className="px-14 pt-5 font-sans">
            You will notice that this appliction provides two different
            algorithms to choose from when using the prediction tool. The
            recommended agorithm to use is the Random Forest Classifier as it
            provides slightly more accuracy when predicting on the given inputs.
            The K-Nearest Neighbor algorithm is provided in order to show the accuracy
            difference between the two methods.
          </div>
          <div className="px-14 pt-5 font-sans font-semibold">Data Acknowledgements:</div>
          <div className="px-14 pt-3 font-sans italic">
            P. Cortez, A. Cerdeira, F. Almeida, T. Matos and J. Reis. Modeling
            wine preferences by data mining from physicochemical properties. In
            Decision Support Systems, Elsevier, 47(4):547-553, 2009.
          </div>
        </div>
      </div>
    </div>
  );
}
