import { Table } from "react-bootstrap";
export const Students = ({ students }) => {
  //console.log(students);
  const tableHeaders = Object.keys(students[0]);
  const displayObjectData = (data) => {
    //console.log(data);
    return (
      <table>
        <tbody className="table table-bordered">
          {Object.keys(data).map((key, index) => {
            //console.log(key, data[key]);
            return (
              <tr key={index}>
                <td>{key}</td>
                <td>
                  {typeof data[key] === "object"
                    ? displayObjectData(data[key])
                    : data[key]}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {tableHeaders.map((headers) => {
              return <th key={headers}>{headers.toUpperCase()}</th>;
            })}
          </tr>
        </thead>

        <tbody>
          {/* {students.forEach((student, index) => {
            //console.log(index, student);
            Object.values(student).forEach((value) => {
              //console.log(value);

              if (typeof value === "object") {
                console.log(JSON.stringify(value));
              } else {
                console.log(value);
              }
            });
          })} */}

          {students.map((student) => {
            return (
              <tr key={student.id}>
                {Object.values(student).map((value) => {
                  return (
                    <td key={value}>
                      {typeof value === "object"
                        ? displayObjectData(value)
                        : value}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
