import { useState } from "react";

interface Props {
  id: number;
  majorName: string;
  onEdit: (id: number, value: string) => void;
  onDelete: (id: number) => void;
}

export const MajorItem = ({ id, majorName, onEdit, onDelete }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [value, setValue] = useState<string>(majorName);

  const handleClickEdit = () => setIsEdit((prev) => !prev);

  const handleClickSave = () => {
    setIsEdit((prev) => !prev);
    onEdit(id, value);
  };

  const handleCancel = () => {
    setValue(majorName);
    setIsEdit(false);
  };
  return (
    <tr>
      <td>{id}</td>
      <td>
        {isEdit ? (
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        ) : (
          <p>{majorName}</p>
        )}
      </td>
      <td>
        {isEdit ? (
          <>
            <button onClick={handleClickSave}>Save</button> -
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={handleClickEdit}>Edit</button> -
            <button onClick={() => onDelete(id)}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};
