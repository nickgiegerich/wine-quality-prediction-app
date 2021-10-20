export default function Table() {
  return (
    <div className="flex overflow-scroll bg-white pb-10">
      <table className="table-auto shadow-lg bg-white m-4">
        <thead>
          <tr>
            <th className="bg-gray-200 border text-left px-8 py-4"></th>
            <th className="bg-gray-200 border text-left px-8 py-4">
              fixed acidity
            </th>
            <th className="bg-gray-200 border text-left px-8 py-4">
              volatile acidity
            </th>
            <th className="bg-gray-200 border text-left px-8 py-4">
              citric acid
            </th>
            <th className="bg-gray-200 border text-left px-8 py-4">
              residual sugar
            </th>
            <th className="bg-gray-200 border text-left px-8 py-4">
              chlorides
            </th>
            <th className="bg-gray-200 border text-left px-8 py-4">
              free sulfur dioxide
            </th>
            <th className="bg-gray-200 border text-left px-8 py-4">
              total sulfur dioxide
            </th>
            <th className="bg-gray-200 border text-left px-8 py-4">density</th>
            <th className="bg-gray-200 border text-left px-8 py-4">pH</th>
            <th className="bg-gray-200 border text-left px-8 py-4">
              sulphates
            </th>
            <th className="bg-gray-200 border text-left px-8 py-4">alcohol</th>
            <th className="bg-gray-200 border text-left px-8 py-4">quality</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-8 py-4">count</td>
            <td className="border px-8 py-4">1599.000000</td>
            <td className="border px-8 py-4">1599.000000</td>
            <td className="border px-8 py-4">1599.000000</td>
            <td className="border px-8 py-4">1599.000000</td>
            <td className="border px-8 py-4">1599.000000</td>
            <td className="border px-8 py-4">1599.000000</td>
            <td className="border px-8 py-4">1599.000000</td>
            <td className="border px-8 py-4">1599.000000</td>
            <td className="border px-8 py-4">1599.000000</td>
            <td className="border px-8 py-4">1599.000000</td>
            <td className="border px-8 py-4">1599.000000</td>
            <td className="border px-8 py-4">1599.000000</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-8 py-4">mean</td>
            <td className="border px-8 py-4">8.319637</td>
            <td className="border px-8 py-4">0.527821</td>
            <td className="border px-8 py-4">0.270976</td>
            <td className="border px-8 py-4">2.538806</td>
            <td className="border px-8 py-4">0.087467</td>
            <td className="border px-8 py-4">15.874922</td>
            <td className="border px-8 py-4">46.467792</td>
            <td className="border px-8 py-4">0.996747</td>
            <td className="border px-8 py-4">3.311113</td>
            <td className="border px-8 py-4">0.658149</td>
            <td className="border px-8 py-4">10.422983</td>
            <td className="border px-8 py-4">5.636023</td>
          </tr>
          <tr>
            <td className="border px-8 py-4 w-10 ">std</td>
            <td className="border px-8 py-4">1.741096</td>
            <td className="border px-8 py-4">0.179060</td>
            <td className="border px-8 py-4">0.194801</td>
            <td className="border px-8 py-4">1.409928</td>
            <td className="border px-8 py-4">0.047065</td>
            <td className="border px-8 py-4">10.460157</td>
            <td className="border px-8 py-4">32.895324</td>
            <td className="border px-8 py-4">0.001887</td>
            <td className="border px-8 py-4">0.154386</td>
            <td className="border px-8 py-4">0.169507</td>
            <td className="border px-8 py-4">1.065668</td>
            <td className="border px-8 py-4">0.807569</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-8 py-4">min</td>
            <td className="border px-8 py-4">4.600000</td>
            <td className="border px-8 py-4">0.120000</td>
            <td className="border px-8 py-4">0.000000</td>
            <td className="border px-8 py-4">0.900000</td>
            <td className="border px-8 py-4">0.012000</td>
            <td className="border px-8 py-4">1.000000</td>
            <td className="border px-8 py-4">6.000000</td>
            <td className="border px-8 py-4">0.990070</td>
            <td className="border px-8 py-4">2.740000</td>
            <td className="border px-8 py-4">0.330000</td>
            <td className="border px-8 py-4">8.400000</td>
            <td className="border px-8 py-4">3.000000</td>
          </tr>
          <tr>
            <td className="border px-8 py-4">25%</td>
            <td className="border px-8 py-4">7.200000</td>
            <td className="border px-8 py-4">0.390000</td>
            <td className="border px-8 py-4">0.090000</td>
            <td className="border px-8 py-4">1.900000</td>
            <td className="border px-8 py-4">0.070000</td>
            <td className="border px-8 py-4">7.000000</td>
            <td className="border px-8 py-4">22.000000</td>
            <td className="border px-8 py-4">0.995600</td>
            <td className="border px-8 py-4">3.220000</td>
            <td className="border px-8 py-4">0.550000</td>
            <td className="border px-8 py-4">9.500000</td>
            <td className="border px-8 py-4">5.000000</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-8 py-4">50%</td>
            <td className="border px-8 py-4">7.900000</td>
            <td className="border px-8 py-4">0.520000</td>
            <td className="border px-8 py-4">0.260000</td>
            <td className="border px-8 py-4">2.200000</td>
            <td className="border px-8 py-4">0.079000</td>
            <td className="border px-8 py-4">14.000000</td>
            <td className="border px-8 py-4">38.000000</td>
            <td className="border px-8 py-4">0.996750</td>
            <td className="border px-8 py-4">3.320000</td>
            <td className="border px-8 py-4">0.620000</td>
            <td className="border px-8 py-4">10.200000</td>
            <td className="border px-8 py-4">6.000000</td>
          </tr>
          <tr>
            <td className="border px-8 py-4">75%</td>
            <td className="border px-8 py-4">9.200000</td>
            <td className="border px-8 py-4">0.640000</td>
            <td className="border px-8 py-4">0.420000</td>
            <td className="border px-8 py-4">2.600000</td>
            <td className="border px-8 py-4">0.090000</td>
            <td className="border px-8 py-4">21.000000</td>
            <td className="border px-8 py-4">62.000000</td>
            <td className="border px-8 py-4">0.997835</td>
            <td className="border px-8 py-4">3.400000</td>
            <td className="border px-8 py-4">0.730000</td>
            <td className="border px-8 py-4">11.200000</td>
            <td className="border px-8 py-4">6.000000</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-8 py-4">max</td>
            <td className="border px-8 py-4">15.900000</td>
            <td className="border px-8 py-4">1.580000</td>
            <td className="border px-8 py-4">1.000000</td>
            <td className="border px-8 py-4">15.500000</td>
            <td className="border px-8 py-4">0.612000</td>
            <td className="border px-8 py-4">72.000000</td>
            <td className="border px-8 py-4">289.000000</td>
            <td className="border px-8 py-4">1.003690</td>
            <td className="border px-8 py-4">4.020000</td>
            <td className="border px-8 py-4">2.000000</td>
            <td className="border px-8 py-4">14.900000</td>
            <td className="border px-8 py-4">8.000000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
