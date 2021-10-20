import values from "./bar_chart_data";

const radio_selections = [
  {
    id: "fixed_acidity",
    label: "Fixed Acidity",
    data: [values.fixed_acidity],
  },
  {
    id: "volatile_acidity",
    label: "Volatile Acidity",
    data: values.volatile_acidity,
  },
  {
    id: "citric_acid",
    label: "Citric Acid",
    data: values.citric_acid,
  },
  {
    id: "residual_sugar",
    label: "Residual Sugar",
    data: values.residual_sugar,
  },
  {
    id: "chlorides",
    label: "Chlorides",
    data: values.chlorides,
  },
  {
    id: "free_sulfur_dioxide",
    label: "Free Sulfur Dioxide",
    data: values.free_sulfur_dioxide,
  },
  {
    id: "total_sulfur_dioxide",
    label: "Total Sulfur Dioxide",
    data: values.total_sulfur_dioxide,
  },
  {
    id: "density",
    label: "Density",
    data: values.density,
  },
  {
    id: "pH",
    label: "pH",
    data: values.pH,
  },
  {
    id: "sulphates",
    label: "Sulphates",
    data: values.sulphates,
  },
  {
    id: "alcohol",
    label: "Alcohol",
    data: values.alcohol,
  },
];

export default radio_selections;
