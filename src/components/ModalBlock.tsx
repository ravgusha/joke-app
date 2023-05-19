import React from "react";
import { Modal, Text, Checkbox } from "@nextui-org/react";


const ModalBlock = (props) => {
  
  return (
    <Modal closeButton aria-labelledby="modal-title" open={props.visible} onClose={props.onClose}>
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Choose:
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Checkbox.Group
          value={props.value}
          onChange={props.setValue}
          size="md"
        >
          {props.checkboxes.map((checkbox) => (
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
