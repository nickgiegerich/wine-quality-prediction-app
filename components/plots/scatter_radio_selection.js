import scatter_data from "./scatter_chart_data";

const scatter_radio_selections = [
  {
    id: "fixed_acidity",
    label: "Fixed Acidity",
    data: [scatter_data.fixed_acidity],
  },
  {
    id: "volatile_acidity",
    label: "Volatile Acidity",
    data: scatter_data.volatile_acidity,
  },
  {
    id: "citric_acid",
    label: "Citric Acid",
    data: scatter_data.citric_acid,
  },
  {
    id: "residual_sugar",
    label: "Residual Sugar",
    data: scatter_data.residual_sugar,
  },
  {
    id: "chlorides",
    label: "Chlorides",
    data: scatter_data.chlorides,
  },
  {
    id: "free_sulfur_dioxide",
    label: "Free Sulfur Dioxide",
    data: scatter_data.free_sulfur_dioxide,
  },
  {
    id: "total_sulfur_dioxide",
    label: "Total Sulfur Dioxide",
    data: scatter_data.total_sulfur_dioxide,
  },
  {
    id: "density",
    label: "Density",
    data: scatter_data.density,
  },
  {
    id: "ph",
    label: "pH",
    data: scatter_data.pH,
  },
  {
    id: "sulphates",
    label: "Sulphates",
    data: scatter_data.sulphates,
  },
];

export default scatter_radio_selections;
