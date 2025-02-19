

const Mission = () => {
    return (
        <div className="mb-5">
            <h1 className="font-bold text-3xl text-blue-500 text-center mt-5">Our Next Mission</h1>
            <div className="overflow-x-auto border border-blue-500 mt-5">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Camp Name</th>
        <th>Target</th>
        <th>People</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Free Food Camp</td>
        <td>No hungry people</td>
        <td>Over 5k</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>New Mother treatment</td>
        <td>It is a big platform</td>
        <td>Over 2k</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Children Camp</td>
        <td>Our most successful camp</td>
        <td>Over 9k</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Mission;