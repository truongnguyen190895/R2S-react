import { useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { MajorItem } from "../../components/MajorItem";

const majorList = [
  {
    id: 1,
    majorName: "IT",
  },
  {
    id: 2,
    majorName: "Marketing",
  },
  {
    id: 3,
    majorName: "Network",
  },
  {
    id: 4,
    majorName: "Accounting",
  },
];

const Major = () => {
  const [majors, setMajors] =
    useState<{ id: number; majorName: string }[]>(majorList);
  const [show, setShow] = useState(false);
  const [id, setId] = useState<string>("");
  const [major, setMajor] = useState<string>("");

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const resetState = () => {
    setId("");
    setMajor("");
  };

  const handleAdd = () => {
    setMajors((prev) => [...prev, { id: Number(id), majorName: major }]);
    handleClose();
    resetState();
  };

  const handleDelete = (id: number) => {
    console.log("Clicked item number ", id);
    const filteredMajors = majors.filter((major) => major.id !== id);
    setMajors(filteredMajors);
  };

  const handleUpdate = (id: number, value: string) => {
    const currentMajors = [...majors];
    const index = currentMajors.findIndex((major) => major.id === id);
    currentMajors[index].majorName = value;
    setMajors(currentMajors);
  };

  return (
    <div className="border border-1 border-primary py-4">
      <section className="major-header d-flex justify-content-between align-items-center border-bottom border-secondary bg-body-secondary">
        <h2>
          Major <span style={{ fontSize: "22px", color: "grey" }}>list</span>
        </h2>
        <Button variant="primary" onClick={handleShow}>
          +Add
        </Button>
      </section>
      <section>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Major Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {majors.map((major) => (
              <MajorItem
                key={major.id}
                id={major.id}
                majorName={major.majorName}
                onDelete={handleDelete}
                onEdit={handleUpdate}
              />
            ))}
          </tbody>
        </Table>
      </section>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add new major</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label htmlFor="majorId">Major ID: </label>
            <input
              type="number"
              name="majorId"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <br />
            <label htmlFor="majorName">Major Name: </label>
            <input
              type="text"
              name="majorId"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Major;


/**
 * REST
 * CRUD
 * CREATE -> POST
 * READ -> GET
 * Update -> PUT (PATCH)
 * Delete -> DELETE
 * JSON -> JavaScript Object Notation
 */
