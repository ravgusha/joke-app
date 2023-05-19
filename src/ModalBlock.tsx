import React from "react";
import { Modal, Text, Checkbox } from "@nextui-org/react";


const ModalBlock = (props) => {
  const checkboxes = ["Programming", "Miscellaneous", "Dark", "Pun", "Spooky", "Christmas"];

  return (
    <Modal closeButton aria-labelledby="modal-title" open={props.visible} onClose={props.onClose}>
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Categories:
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Checkbox.Group
          value={props.categories}
          onChange={props.setCategories}
          size="md"
        >
          {checkboxes.map((checkbox) => (
            <Checkbox key={checkbox} value={checkbox}>
              {checkbox}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </Modal.Body>
    </Modal>
  );
};

export default ModalBlock;
